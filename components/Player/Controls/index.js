import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';
import { spring, Motion } from 'react-motion';

import Playback from './Playback';
import Options from './Options';
import Volume from './Volume';

import styles from './styles';

const { bool, number, string, func } = PropTypes;

export const Controls = (props) => {
  const {
    className,
    visible,
    error,
    paused,
    muted,
    playbackRate,
    volume,
    loop,
    onToggleDebugMonitor,
    onTogglePlay,
    onToggleMute,
    onVolumeChange,
    onPrevious,
    onNext,
    onDecreasePlaybackRate,
    onIncreasePlaybackRate,
    onToggleLoop,
    onToggleFullScreen,
  } = props;

  const playbackHandlers = {
    onTogglePlay,
    onPrevious,
    onNext,
    onDecreasePlaybackRate,
    onIncreasePlaybackRate,
  };

  const animationStyle = {
    opacity: spring(visible ? 1 : 1, { stiffness: 500, damping: 40 }),
  };

  return (
    <Motion style={animationStyle}>{s =>
      <div className={cn(className, styles.controls)} style={s}>
        {onTogglePlay &&
          <Playback { ...{ ...{ error, paused, playbackRate }, ...playbackHandlers } } />
        }
        {onToggleLoop && onToggleFullScreen &&
          <Options { ...{ error, loop, onToggleDebugMonitor, onToggleLoop, onToggleFullScreen } } />
        }
        {onVolumeChange && onToggleMute &&
          <Volume { ...{ error, muted, volume, onToggleMute, onVolumeChange } } />
        }
      </div>
    }</Motion>
  );
};

Controls.propTypes = {
  className: string,
  visible: bool,
  error: bool,
  paused: bool,
  muted: bool,
  playbackRate: number,
  volume: number,
  loop: bool,
  onToggleDebugMonitor: func,
  onTogglePlay: func,
  onToggleMute: func,
  onVolumeChange: func,
  onPrevious: func,
  onNext: func,
  onDecreasePlaybackRate: func,
  onIncreasePlaybackRate: func,
  onToggleLoop: func,
  onToggleFullScreen: func,
};

Controls.defaultProps = {
  visible: true,
};

export default css(Controls, styles, { allowMultiple: true });
