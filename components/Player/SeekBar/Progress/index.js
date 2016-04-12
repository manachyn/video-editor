import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { number, string } = PropTypes;

const Progress = (props) => {
  const {
    className,
    currentBarClassName,
    bufferedBarClassName,
    played,
    buffered,
  } = props;

  const style = {
    current: { right: `${100 - played}%` },
    buffered: { right: `${100 - buffered}%` },
  };

  return (
    <div className={className} styleName="progress">
      <span className={currentBarClassName} styleName="current" style={style.current}></span>
      <span className={bufferedBarClassName} styleName="buffered" style={style.buffered}></span>
    </div>
  );
};

Progress.propTypes = {
  className: string,
  currentBarClassName: string,
  bufferedBarClassName: string,
  played: number.isRequired,
  buffered: number.isRequired,
};

export default css(Progress, styles, { allowMultiple: true });
