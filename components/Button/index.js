import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Icon from '../Icon';
import styles from './styles';

const { bool, string, node } = PropTypes;

export const Button = props => {
  const {
    className,
    children,
    iconClassName,
    labelClassName,
    label,
    icon,
    disabled,
    filled,
    raised,
    circle,
    rounded,
    neutral,
    small,
    big,
    ...other,
  } = props;

  const shape = circle ? 'circle' : rounded ? 'rounded' : neutral ? '' : 'squared';
  const size = small ? 'small' : big ? 'big' : 'normal';
  const state = disabled ? 'disabled' : 'enabled';
  const appearance = raised && !circle ? 'raised' : 'flat';
  const fill = filled ? 'filled' : '';

  const styleName = cn('button', state, appearance, fill, shape, size);
  const known = { styleName, className, disabled };

  return (
    <button { ...{ ...known, ...other } } styles={undefined}>
      {icon &&
        <Icon className={cn(iconClassName, styles.icon)}
          { ...{ small, big } }
          value={icon}
        />
      }
      {label &&
        <span className={labelClassName} styleName="label">
          {label}
        </span>
      }
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node,
  className: string,
  iconClassName: string,
  labelClassName: string,

  label: string,
  icon: string,
  disabled: bool,
  filled: bool,
  raised: bool,
  circle: bool,
  rounded: bool,
  neutral: bool,
  small: bool,
  big: bool,
};

Button.defaultProps = {
  disabled: false,
  filled: false,
  raised: false,
  circle: false,
  rounded: false,
  neutral: false,
  small: false,
  big: false,
};

export default css(Button, styles, { allowMultiple: true });
