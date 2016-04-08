import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';

import {
    videoProps,
    videoAPIShape,
    playbackRateShape,
    playerActionsShape,
} from '../propTypes';

import HUD from './HUD';
//import Info from './Info';
//import SeekBar from './SeekBar';
import Overlay from './Overlay';
//import Controls from './Controls';

import styles from './styles.css';

export class Player extends Component {

  renderContainer() {
    if (!React.Children.count) return null;

    const { children, debug, video, api, hovered } = this.props;

    return (
        <div styleName="container">
          {children}
          <Overlay {...video} debug={debug} onTogglePlay={api.togglePlay}>
            <HUD {...video} hovered={hovered} />
          </Overlay>
        </div>
    );
  }

  render() {
    return (
        this.renderContainer()
    );
  }
}

Player.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  debug: PropTypes.bool,
  hovered: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  playbackRate: playbackRateShape,

  actions: playerActionsShape.isRequired,
  api: videoAPIShape.isRequired,
  video: PropTypes.shape(videoProps).isRequired,
};

Player.defaultProps = {
  debug: process.env.NODE_ENV === 'development',
  width: 640,
  playbackRate: {
    step: 0.25,
    min: 0.25,
    max: 4,
  },
};

//export default css(Player, styles);
export default Player;
