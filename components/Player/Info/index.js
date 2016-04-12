import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { string } = PropTypes;

export const Info = (props) => {
  const { className } = props;

  return (
    <div className={className} styleName="info">
    </div>
  );
};


Info.propTypes = {
  className: string,
};

export default css(Info, styles, { allowMultiple: true });
