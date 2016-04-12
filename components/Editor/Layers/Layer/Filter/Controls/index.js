import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import tooltip from '../../../../../Tooltip';
import Button from '../../../../../Button';
import ButtonGroup from '../../../../../ButtonGroup';

import styles from './styles';

const TooltipButton = tooltip(Button);
const { bool, func } = PropTypes;

export const Controls = props => {
  const {
    visible,
    locked,
    onToggleVisibility,
    onToggleLocked,
    onDestroy,
  } = props;

  return (
    <div styleName="filter-controls">
      <ButtonGroup small buttonClassName={styles.filterButton}>
        <TooltipButton
          neutral
          icon="delete"
          tooltipTop
          tooltipDelay={1200}
          tooltipText="remove filter slice"
          onClick={onDestroy}
        />
        <TooltipButton
          neutral
          icon={locked ? 'lock_outline' : 'lock'}
          tooltipTop
          tooltipDelay={1200}
          tooltipText={locked ? 'unlock' : 'lock'}
          onClick={onToggleLocked}
        />
        <TooltipButton
          neutral
          icon={visible ? 'visibility_off' : 'visibility'}
          tooltipTop
          tooltipDelay={1200}
          tooltipText={visible ? 'hide' : 'show'}
          onClick={onToggleVisibility}
        />
      </ButtonGroup>
    </div>
  );
};

Controls.propTypes = {
  visible: bool,
  locked: bool,
  onDestroy: func.isRequired,
  onToggleVisibility: func.isRequired,
  onToggleLocked: func.isRequired,
};

export default css(Controls, styles);
