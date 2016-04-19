import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';
import { spring, Motion } from 'react-motion';

import { formatTime } from '../../../../modules/utils/format';
import styles from './styles';

const { number, string } = PropTypes;

export const Time = ({ className, currentTime, duration }) => {
  const time = formatTime(currentTime, duration);
  const animationStyle = {
    x: spring(1),
    opacity: spring(1, {
      stiffness: 80,
      damping: 40,
    }),
  };

  return (
    <Motion defaultStyle={{ x: 0, opacity: 0 }} style={animationStyle}>
      {({ x, ...style }) =>
      <span className={cn(className, styles.time)} style={{
        ...style,
        WebkitTransform: `translate3d(${x}rem, 0, 0)`,
        transform: `translate3d(${x}rem, 0, 0)`,
      }}
      >
        {time}
      </span>

    }</Motion>
  );
};

Time.propTypes = {
  className: string,
  currentTime: number,
  duration: number,
};

export default css(Time, styles, { allowMultiple: true });
