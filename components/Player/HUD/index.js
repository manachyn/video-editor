import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import css from 'react-css-modules';

import PlaybackRate from './PlaybackRate';
import Time from './Time';

import { videoStateShape } from '../../propTypes';
import styles from './styles';

const { bool, number, string } = PropTypes;

export class HUD extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      className,
      error,
      hovered,
      currentTime,
      duration,
      playbackRate,
    } = this.props;

    return (
      <div className={className} styleName="hud">
        {!error && hovered && <Time { ...{ currentTime, duration } } />}
        {!error && hovered && <PlaybackRate value={playbackRate} />}
      </div>
    );
  }
}

HUD.propTypes = {
  className: string,
  error: videoStateShape,
  hovered: bool,
  currentTime: number,
  duration: number,
  playbackRate: number,
};

export default css(HUD, styles, { allowMultiple: true });
