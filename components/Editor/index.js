import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapValues from 'lodash/mapValues';
import flow from 'lodash/flow';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import css from 'react-css-modules';
import styles from './styles.css';

import selector from '../../modules/editor/selectors';

import * as videoActions from '../../modules/html5video/actions';
import * as playerActions from '../../modules/player/actions';
import * as editorActions from '../../modules/editor/actions';

import {
    videoProps,
    videoActionsShape,
    playerActionsShape,
    layerShape,
} from '../propTypes';

import Player from '../Player';
import Html5Video from '../Html5Video';
import { Panel as FiltersPanel } from './Filters';
import Inspector from './Inspector';
import MainToolbar from './MainToolbar';

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
  }

  refresh() {
    const { actions, video } = this.props;
    actions.editor.update(video.currentTime);
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
          {videoEl}
        </Player>
    );
  }

  render() {
    const { className, filterTypes, video, layers, actions } = this.props;
    const { snapToGrid, cellSize } = this.state;
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
          <MainToolbar onCreateLayer={this.handleCreateLayer} />
        </div>
    );
  }
}

Editor.propTypes = {
  className: PropTypes.string,

  layerTypes: PropTypes.object.isRequired,
  filterTypes: PropTypes.object.isRequired,
  layers: PropTypes.arrayOf(layerShape).isRequired,

  snapToGrid: PropTypes.bool,
  cellSize: PropTypes.number,

  source: PropTypes.string.isRequired,

  actions: PropTypes.shape({
    video: videoActionsShape.isRequired,
    player: playerActionsShape.isRequired,
  }),

  player: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    debug: PropTypes.bool,
  }).isRequired,

  video: PropTypes.shape(videoProps).isRequired,

  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Editor.defaultProps = {
  snapToGrid: true,
  cellSize: 10,
};

const actionsMap = {
  player: playerActions,
  video: videoActions,
  editor: editorActions,
};

const mapDispatchToProps = dispatch => ({
  actions: mapValues(
      actionsMap,
      actions => bindActionCreators(actions, dispatch)
  ),
});

export default flow(
    css(styles, { allowMultiple: true }),
    connect(selector, mapDispatchToProps)
)(Editor);

export default flow(
    css(styles, { allowMultiple: true }),
    connect(selector, mapDispatchToProps),
    DragDropContext(HTML5Backend)
)(Editor);

