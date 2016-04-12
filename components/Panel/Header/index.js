import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { string, node } = PropTypes;

export const Header = props => {
  const { className, children } = props;
  return (
    <header styleName="header" className={className}>
      {children}
    </header>
  );
};

Header.propTypes = {
  className: string,
  children: node,
};

export default css(Header, styles, { allowMultiple: true });
