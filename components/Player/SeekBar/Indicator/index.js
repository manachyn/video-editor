import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import { formatTime } from '../../../../modules/utils/format';
import styles from './styles';

const { number } = PropTypes;

const Indicator = ({ currentTime, duration }) => {
  const time = formatTime(currentTime, duration);

  return (
    <div styleName="indicator">
      {time}
    </div>
  );
};

Indicator.propTypes = {
  currentTime: number.isRequired,
  duration: number.isRequired,
};

export default css(Indicator, styles);
