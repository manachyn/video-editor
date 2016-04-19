import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import css from 'react-css-modules';

import Button from '../../../Button';
import tooltip from '../../../Tooltip';

import styles from './styles';

const TooltipButton = tooltip(Button);
const { bool, number, string, func } = PropTypes;

export class Playback extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      className,
      error,
      paused,
      playbackRate,
      onTogglePlay,
      onPrevious,
      onNext,
      onDecreasePlaybackRate,
      onIncreasePlaybackRate,
    } = this.props;

    return (
      <div className={className} styleName="playback">
        {onPrevious &&
          <TooltipButton filled disabled
            className={styles.button}
            tooltipTop
            tooltipText="previous"
            delay={1000}
            icon="skip_previous"
            onClick={onPrevious}
          />
        }
        {onDecreasePlaybackRate &&
          <TooltipButton filled
            className={styles.button}
            tooltipTop
            tooltipText="descrease playback rate"
            delay={1000}
            disabled={error || playbackRate < 0.5}
            icon="fast_rewind"
            onClick={onDecreasePlaybackRate}
          />
        }
        <Button disabled={error}
          className={styles.button}
          icon={paused ? 'play_arrow' : 'pause' }
          onClick={onTogglePlay}
        />
        {onIncreasePlaybackRate &&
          <TooltipButton filled
            className={styles.button}
            tooltipTop
            tooltipText="increase playback rate"
            delay={1000}
            disabled={error || playbackRate > 3.75}
            icon="fast_forward"
            onClick={onIncreasePlaybackRate}
          />
        }
        {onNext &&
          <TooltipButton filled disabled
            className={styles.button}
            tooltipTop
            tooltipText="next"
            delay={1000}
            icon="skip_next"
            onClick={onNext}
          />
        }
      </div>
    );
  }
}

Playback.propTypes = {
  className: string,
  error: bool,
  paused: bool,
  playbackRate: number,
  onTogglePlay: func.isRequired,
  onPrevious: func,
  onNext: func,
  onDecreasePlaybackRate: func,
  onIncreasePlaybackRate: func,
};

export default css(Playback, styles, { allowMultiple: true });
