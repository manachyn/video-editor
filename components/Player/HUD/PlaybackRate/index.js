import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';
import { spring, Motion } from 'react-motion';

import styles from './styles';

const { number, string } = PropTypes;

export const PlaybackRate = (props) => {
  const { className, value } = props;
  const animationStyle = {
    x: spring(-1),
    opacity: spring(1, {
      stiffness: 80,
      damping: 40
    })
  };

  return (
    <Motion defaultStyle={{ x: 0, opacity: 0 }}
      style={animationStyle}>{({ x, ...style }) =>
      <span className={cn(className, styles.playbackRate)} style={{
        ...style,
        WebkitTransform: `translate3d(${x}rem, 0, 0)`,
        transform: `translate3d(${x}rem, 0, 0)`
      }}>
        {`x ${value}`}
      </span>
    }</Motion>
  );
};


PlaybackRate.propTypes = {
  className: string,
  value: number
};

export default css(PlaybackRate, styles, { allowMultiple: true });
