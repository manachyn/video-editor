import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapValues from 'lodash/mapValues';
import flow from 'lodash/flow';
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
} from '../propTypes';

import Player from '../Player';
import Html5Video from '../Html5Video';

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
    this.api = {
      toggleMute: () => this.video.toggleMute(),
      toggleLoop: () => this.video.toggleLoop(),
      togglePlay: () => this.video.togglePlay(),
      toggleFullScreen: () => this.video.toggleFullScreen(),
      setVolume: v => this.video.setVolume(v),
      setPlaybackRate: v => this.video.setPlaybackRate(v),
      seek: offset => this.video.seek(offset),
    };
    //this.handleProgress = this.handleProgress.bind(this);
  }

  refresh() {
    const { actions, video } = this.props;
    actions.editor.update(video.currentTime);
  }

  renderVideo(size) {
    const { video, source, actions } = this.props;

    return (
        <Html5Video ref={r => this.video = r}
                    preload='auto'
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
    const { className, video, actions } = this.props;
    return (
        <div styleName='editor' className={className}>
          <div styleName='main'>
            {this.renderPlayer()}
          </div>
        </div>
    );
  }
}

Editor.propTypes = {
  className: PropTypes.string,

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
