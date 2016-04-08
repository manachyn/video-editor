import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import PlaybackRate from './PlaybackRate';
import Time from './Time';

import { videoStateShape } from '../../propTypes';
import styles from './styles';

const { bool, number, string } = PropTypes;

export const HUD = (props) => {
  const {
    className,
    error,
    hovered,
    currentTime,
    duration,
    playbackRate
  } = props;

  return (
    <div className={className} styleName='hud'>
      {!error && hovered && <Time { ...{ currentTime, duration } } />}
      {!error && hovered && <PlaybackRate value={playbackRate} />}
    </div>
  );
};


HUD.propTypes = {
  className: string,
  error: videoStateShape,
  hovered: bool,
  currentTime: number,
  duration: number,
  playbackRate: number
};

export default css(HUD, styles, { allowMultiple: true });
