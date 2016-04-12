import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import styles from './styles';

const { bool, string, node } = PropTypes;

export const ButtonGroup = props => {
  const {
    className,
    buttonClassName,
    children,
    vertical,
    neutral,
    filled,
    big,
    small,
    ...other,
  } = props;

  const orientation = vertical ? 'vertical' : 'horizontal';
  const size = small ? 'small' : big ? 'big' : 'normal';
  const styleName = cn('button-group', orientation, size, { filled });

  const known = { styleName, className };

  return (
    <ul { ...{ ...known, ...other } } styles={undefined}>
      {React.Children.map(children, button =>
        button &&
          React.cloneElement(button, {
            className: cn(button.props.className, buttonClassName, styles.button),
            neutral: neutral || button.props.neutral,
            filled: filled || button.props.filled,
            big: big || button.props.big,
            small: small || button.props.small,
          })
      )}
    </ul>
  );
};

ButtonGroup.propTypes = {
  className: string,
  buttonClassName: string,
  children: node.isRequired,
  vertical: bool,
  neutral: bool,
  filled: bool,
  small: bool,
  big: bool,
};

ButtonGroup.defaultProps = {
  vertical: false,
  neutral: false,
  filled: false,
  small: false,
  big: false,
};

export default css(ButtonGroup, styles, { allowMultiple: true });
