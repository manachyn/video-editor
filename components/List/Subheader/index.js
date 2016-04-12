import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { string, node } = PropTypes;

export const Subheader = props => {
  const { className, children } = props;

  return (
    <div styleName="subheader" className={className}>{children}</div>
  );
};

Subheader.propTypes = {
  className: string,
  children: node,
};

export default css(Subheader, styles, { allowMultiple: true });
