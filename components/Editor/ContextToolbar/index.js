import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import tooltip from '../../Tooltip';
import Button from '../../Button';
import ButtonGroup from '../../ButtonGroup';

import { contextActionsArray } from './propTypes';
import styles from './styles';

const TooltipButton = tooltip(Button);
const { bool, string, node } = PropTypes;

export const ContextToolbar = props => {
  const {
    children,
    className,
    filled,
    contextActions,
    ...other,
  } = props;

  const fill = filled ? 'filled' : 'neutral';
  const styleName = cn('toolbar', fill);

  const known = { styleName, className };

  return (
    <div { ...{ ...known, ...other } } styles={undefined}>
      {children}
      {contextActions.map(({ name, actions }) =>
        <ButtonGroup key={name} filled={filled} className={styles.toolbarGroup}>
          {actions.map(({ title, description, icon, handler, ...actionProps }) =>
            <TooltipButton key={title}
              icon={icon}
              tooltipText={description}
              onClick={handler}
              {...actionProps}
            />
          )}
        </ButtonGroup>
      )}
    </div>
  );
};

ContextToolbar.propTypes = {
  className: string,
  children: node,
  filled: bool,
  contextActions: contextActionsArray,
};

ContextToolbar.defaultProps = {
  filled: false,
};

export { contextActionsArray };
export default css(ContextToolbar, styles, { allowMultiple: true });
