import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { bool, string } = PropTypes;

export const Divider = ({ className, inset }) => (
  <hr styleName={inset ? 'inset' : 'normal'} className={className} />
);

Divider.propTypes = {
  className: string,
  inset: bool,
};

export default css(Divider, styles, { allowMultiple: true });
