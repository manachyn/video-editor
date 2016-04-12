import round from 'lodash/round';
import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { number } = PropTypes;

const Indicator = ({ volume }) => {
  const percent = round(volume * 100);

  return (
    <div styleName="indicator">
      {`${percent}%`}
    </div>
  );
};

Indicator.propTypes = {
  volume: number.isRequired,
};

export default css(Indicator, styles);
