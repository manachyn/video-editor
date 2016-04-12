import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Content from './Content';
import Header from './Header';
import Footer from './Footer';

import styles from './styles';

const { bool, string, node } = PropTypes;

export const Panel = props => {
  const {
    className,
    children,
    filled,
    vertical,
    ...other,
  } = props;

  const orientation = vertical ? 'vertical' : 'horizontal';
  const appearance = filled ? 'filled' : 'neutral';
  const styleName = cn('panel', orientation, appearance);
  const known = { styleName, className };

  return (
    <div {...{ ...known, ...other } } styles={undefined}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  className: string,
  children: node,
  filled: bool,
  vertical: bool,
};

Panel.defaultProps = {
  filled: false,
  vertical: false,
};

Panel.Header = Header;
Panel.Content = Content;
Panel.Footer = Footer;

export default css(Panel, styles, { allowMultiple: true });
