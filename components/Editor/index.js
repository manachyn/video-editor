import flow from 'lodash/flow';
import pick from 'lodash/pick';
import mapValues from 'lodash/mapValues';
import invariant from 'invariant';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import css from 'react-css-modules';

import selector from '../../modules/editor/selectors';

import * as layerActions from '../../modules/editor/layers/actions';
import * as filterActions from '../../modules/editor/filters/actions';
import * as videoActions from '../../modules/html5video/actions';
import * as playerActions from '../../modules/player/actions';
import * as editorActions from '../../modules/editor/actions';

import {
    videoProps,
    videoActionsShape,
    playerActionsShape,
    filterTypeShape,
    layerShape,
} from '../propTypes';

import Player from '../Player';
import Html5Video from '../Html5Video';

import CustomDragLayer from './CustomDragLayer';
import MainToolbar from './MainToolbar';
import MainPanel from './MainPanel';
import { Panel as FiltersPanel } from './Filters';
import { Panel as LayersPanel } from './Layers';
import Timeline from './Timeline';
import PropertyEditor from './PropertyEditor';
import Inspector from './Inspector';

import {
    Blur,
    Hue,
    Negative,
    CSB,
    ColorMatrix,
} from './FilterRenderer/renderers';

const FilterRenderer = require('./FilterRenderer').default;

import styles from './styles';

const {
    bool,
    number,
    string,
    object,
    arrayOf,
    shape,
    } = PropTypes;

const filterGroups = {
  behavioral: ['cut'],
  presentational: [
    'overlay',
    'blur',
    'negative',
    'hue',
    'csb',
    'colorMatrix',
  ],
};

const filterRenderers = {
  blur: Blur,
  hue: Hue,
  negative: Negative,
  csb: CSB,
  colorMatrix: ColorMatrix,
};

const filterProcessors = {
  cut: (filter, api, video) => {
    const { timeline } = filter;
    const { currentTime } = video;

    const timeStart = timeline.offset;
    const timeEnd = timeStart + timeline.duration;

    if (currentTime >= timeStart && currentTime < timeEnd) {
      api.seek(Math.ceil(timeEnd));
    }
  },
};

export class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      snapToGrid: this.props.snapToGrid,
      cellSize: this.props.cellSize,
    };
    this.api = {
      toggleMute: () => this.video.toggleMute(),
      toggleLoop: () => this.video.toggleLoop(),
      togglePlay: () => this.video.togglePlay(),
      toggleFullScreen: () => this.video.toggleFullScreen(),
      setVolume: v => this.video.setVolume(v),
      setPlaybackRate: v => this.video.setPlaybackRate(v),
      seek: offset => this.video.seek(offset),
    };
    this.refresh = this.refresh.bind(this);
    this.handleCreateLayer = this.handleCreateLayer.bind(this);
  }

  refresh() {
    const { actions, video } = this.props;
    actions.editor.update(video.currentTime);
    this.processFilters();
  }

  processFilters() {
    const { filters, video } = this.props;
    const behavioralFilters = Object.values(filters)
        .filter(({ type }) => filterGroups.behavioral.indexOf(type) !== -1);

    behavioralFilters.forEach(filter => {
      const { type } = filter;
      const processor = filterProcessors[type];
      invariant(processor, `No filter processor is registered for type ${type}`);
      processor(filter, this.api, video);
    });
  }

  handleCreateLayer() {
    this.props.actions.layer.create('effect');
  }

  renderVideo(size) {
    const { video, source, actions } = this.props;

    return (
        <Html5Video ref={r => (this.video = r)}
                    preload="auto"
                    src={source}
                    onTimeUpdate={this.refresh}
                    actions={actions.video}
            { ...{ ...size, ...video } }
        />
    );
  }

  renderPlayer() {
    const {
        filters,
        actions,
        video,
        player: {
            width,
            height,
            ...player,
            },
        activeFilters,
        } = this.props;

    const size = { width, height };
    const playerProps = {
      ...player,
      api: this.api,
      actions: actions.player,
      width,
      video,
    };

    const presentationalFilters = Object.values(filters)
        .filter(({ id, type }) =>
            filterGroups.presentational.indexOf(type) !== -1 &&
            activeFilters.indexOf(id) !== -1
        );

    const videoEl = this.renderVideo(size);

    return (
        <Player {...playerProps}>
          {FilterRenderer ?
              <FilterRenderer {...size}
                  renderers={filterRenderers}
                  filters={presentationalFilters}
              >
                {videoEl}
              </FilterRenderer> :
              videoEl
          }
        </Player>
    );
  }

  render() {
    const {
        className,
        filterTypes,
        video,
        layers,
        actions,
        } = this.props;

    const {
        snapToGrid,
        cellSize,
        } = this.state;

    const layersPanelProps = {
      snapToGrid,
      cellSize,
      layers,
      filterTypes,
      duration: video.duration,
    };

    return (
        <div styleName="editor" className={className}>
          <div styleName="main">
            <FiltersPanel
                filterTypes={filterTypes}
                onCreateFilter={actions.editor.createFilter}
            />
            {this.renderPlayer()}
            <Inspector />
          </div>
          <MainToolbar
              onCreateLayer={this.handleCreateLayer}
          />
          <MainPanel>
            <LayersPanel {...layersPanelProps}
                actions={pick(actions, 'layer', 'filter')}
            >
              <Timeline {...video} onSeek={this.api.seek} />
            </LayersPanel>
            <PropertyEditor />
          </MainPanel>
          <CustomDragLayer { ...{ snapToGrid, cellSize } } />
        </div>
    );
  }
}

Editor.propTypes = {
  className: string,

  layerTypes: object.isRequired,
  filterTypes: object.isRequired,
  layers: arrayOf(layerShape).isRequired,
  //filters: arrayOf(filterTypeShape).isRequired,

  snapToGrid: bool,
  cellSize: number,

  source: string.isRequired,

  actions: shape({
    video: videoActionsShape.isRequired,
    player: playerActionsShape.isRequired,
  }),

  player: shape({
    width: number,
    height: number,
    debug: bool,
  }).isRequired,

  video: shape(videoProps).isRequired,

  activeFilters: arrayOf(string).isRequired,
};

Editor.defaultProps = {
  snapToGrid: true,
  cellSize: 10,
};

const actionsMap = {
  player: playerActions,
  video: videoActions,
  layer: layerActions,
  filter: filterActions,
  editor: editorActions,
};

const selectActions = dispatch => ({
  actions: mapValues(
      actionsMap,
      actions => bindActionCreators(actions, dispatch)
  ),
});

/* eslint-disable new-cap */
export default flow(
    css(styles, { allowMultiple: true }),
    connect(selector, selectActions),
    DragDropContext(HTML5Backend)
)(Editor);
/* eslint-enable new-cap */
