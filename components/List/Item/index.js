import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import styles from './styles';

const { bool, string, node } = PropTypes;

export const Item = props => {
  const {
    className,
    children,
    disabled,
    selectable,
    filled,
  } = props;

  const state = disabled ? 'disabled' : 'enabled';
  const fill = filled ? 'filled' : 'neutral';
  const behavior = selectable ? 'selectable' : 'normal';
  const styleName = cn('list-item', state, behavior, fill);

  return (
    <li { ...{ styleName, className } } styles={undefined}>
      {children}
    </li>
  );
};

Item.propTypes = {
  className: string,
  children: node,
  disabled: bool,
  selectable: bool,
  filled: bool,
};

Item.defaultProps = {
  disabled: false,
  selectable: false,
  filled: false,
};

export default css(Item, styles, { allowMultiple: true });
