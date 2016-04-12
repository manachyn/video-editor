import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import styles from './styles';

const { bool, string, node } = PropTypes;

export const Badge = props => {
  const {
    className,
    neutral,
    success,
    info,
    warning,
    error,
    children,
    ...other,
  } = props;

  const styleName = cn('badge', { neutral, success, info, warning, error });

  return (
    <span { ...{ ...{ styleName, className }, ...other } }>
      {children}
    </span>
  );
};

Badge.propTypes = {
  className: string,
  neutral: bool,
  success: bool,
  info: bool,
  warning: bool,
  error: bool,
  children: node,
};

Badge.defaultProps = {
  neutral: true,
  info: false,
  warning: false,
  error: false,
};

export default css(Badge, styles, { allowMultiple: true });
