import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Controls from './Controls';
import styles from './styles';

const { bool, string, func } = PropTypes;

export const Header = props => {
  const {
      className,
      name,
      type,
      description,
      disabled,
      locked,
      single,
      expanded,
      onDestroy,
      onToggleLocked,
      onToggleDisabled,
      onToggleSingle,
      onToggleExpanded,
      ...other,
      } = props;

  const appearance = expanded ? 'wide' : 'narrow';
  const styleName = cn('header', appearance);

  const controlsProps = {
    type,
    disabled,
    locked,
    single,
    expanded,
    onDestroy,
    onToggleLocked,
    onToggleDisabled,
    onToggleSingle,
    onToggleExpanded,
  };
  const known = { styleName, className };

  return (
      <div { ...{ ...known, ...other } }>
        <h6 styleName="title">
          {name}
        </h6>
        <Controls {...controlsProps} />
      </div>
  );
};

Header.propTypes = {
  className: string,
  disabled: bool,
  locked: bool,
  single: bool,
  name: string,
  type: string,
  description: string,
  expanded: bool,
  onDestroy: func,
  onToggleLocked: func,
  onToggleDisabled: func,
  onToggleSingle: func,
  onToggleExpanded: func,
};

Header.defaultProps = {
  disabled: false,
  expanded: true,
};

export default css(Header, styles, { allowMultiple: true });
