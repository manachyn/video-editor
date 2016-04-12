import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { string, node } = PropTypes;

export const Footer = props => {
  const { className, children } = props;
  return (
    <footer styleName="footer" className={className}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  className: string,
  children: node,
};

export default css(Footer, styles, { allowMultiple: true });
