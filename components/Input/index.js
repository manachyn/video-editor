import omit from 'lodash/omit';
import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Icon from '../Icon';
import Badge from '../Badge';
import styles from './styles';

const { bool, number, string, func, node, any } = PropTypes;

export class Input extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  blur() {
    this.refs.input.blur();
  }

  focus() {
    this.refs.input.focus();
  }

  handleChange(e) {
    if (this.props.onChange) this.props.onChange(e.target.value, event);
  }

  render() {
    const {
      children,
      className,
      inputClassName,
      labelClassName,
      iconClassName,
      barClassName,
      errorClassName,
      counterClassName,
      multiline,
      type,
      error,
      icon,
      floating,
      required,
      disabled,
      small,
      big,
      maxLength,
      label,
      value,
      ...other,
    } = this.props;

    const elementType = multiline ? 'textarea' : 'input';
    const elementProps = {
      ...omit(other, 'onChange'),
      className: cn(inputClassName, styles.input),
      onChange: this.handleChange,
      type,
      ref: 'input',
      role: 'input',
      value,
      maxLength,
    };

    const element = React.createElement(elementType, elementProps);
    const state = disabled ? 'disabled' : 'enabled';
    const size = small ? 'small' : big ? 'big' : 'normal';
    const appearance = floating ? 'floating' : 'static';
    const errorState = error ? 'error' : 'regular';

    const styleName = cn('container', state, errorState, appearance, size);
    const length = maxLength && value ? value.length : 0;

    return (
      <div { ...{ styleName, className } }>
        {element}
        {icon &&
          <Icon className={cn(iconClassName, styles.icon)}
            { ...{ small, big } } value={icon}
          />
        }
        {!multiline && <span className={cn(barClassName, styles.bar)}></span>}
        {label && <label className={cn(labelClassName, styles.label)}>{label}</label>}
        {error && <span className={cn(errorClassName, styles.error)}>{error}</span>}
        {maxLength &&
          <Badge className={cn(counterClassName, styles.counter)}>
            {`${length}/${maxLength}`}
          </Badge>
        }
        {children}
      </div>
    );
  }
}

Input.propTypes = {
  children: node,
  className: string,
  inputClassName: string,
  labelClassName: string,
  iconClassName: string,
  barClassName: string,
  errorClassName: string,
  counterClassName: string,
  multiline: bool,
  type: string,
  error: string,
  icon: string,
  floating: bool,
  required: bool,
  disabled: bool,
  small: bool,
  big: bool,
  maxLength: number,
  label: string,
  value: any,
  onChange: func,
};

Input.defaultProps = {
  type: 'text',
  multiline: false,
  floating: true,
  required: false,
  disabled: false,
  small: false,
  big: false,
  resize: 'none',
};

export default css(Input, styles, { allowMultiple: true });
