import React, { Component, PropTypes } from 'react';
import { spring, Motion } from 'react-motion';
import cn from 'classnames';

import { percentageShape } from '../../propTypes';
import styles from './styles';

const { bool, number, string, func } = PropTypes;

export class Timeline extends Component {

  constructor(props) {
    super(props);

    this.handleSeek = this.handleSeek.bind(this);
  }

  handleSeek(offset) {
    this.props.onSeek(Number(offset));
  }

  render() {
    const {
      className,
      step,
      disabled,
      duration,
      currentTime,
      percentage,
      onSeek,
    } = this.props;

    const { buffered, played } = percentage;

    const containerClasses = cn(
      className,
      styles.timeline,
      disabled ? styles.disabled : styles.enabled
    );

    const shouldAnimate = played >= 1 && played <= 99;
    const animationPreset = {
      stiffness: 150,
      damping: 80,
    };

    const animationStyle = {
      x: shouldAnimate ?
        spring(played, animationPreset) :
        played,
    };

    return (
      <Motion style={animationStyle}>{({ x }) =>
        <div className={containerClasses}>
          <div className={styles.line} style={{ right: `${100 - x}%` }}></div>
        </div>
      }</Motion>
    );
  }
}

Timeline.propTypes = {
  className: string,
  step: number,
  disabled: bool,
  currentTime: number.isRequired,
  duration: number.isRequired,
  percentage: percentageShape.isRequired,
  onSeek: func.isRequired,
};

export default Timeline;
