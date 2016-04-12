import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import tooltip from '../../../../../Tooltip';

import ButtonGroup from '../../../../../ButtonGroup';
import Button from '../../../../../Button';

import styles from './styles';

const TooltipButton = tooltip(Button);
const { string, bool, func } = PropTypes;

export const Controls = props => {
  const {
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
      } = props;

  const canDelete = type !== 'video';

  return (
      <ButtonGroup small className={styles.controls} buttonClassName={styles.button}>

        <TooltipButton
          neutral
          icon={single ? 'adjust' : 'lens'}
          tooltipTop
          tooltipDelay={800}
          tooltipText="single"
          onClick={onToggleSingle}
        />
        <TooltipButton
          neutral
          icon={locked ? 'lock_open' : 'lock_outline' }
          tooltipTop
          tooltipDelay={1200}
          tooltipText={locked ? 'unlock' : 'lock'}
          onClick={onToggleLocked}
        />
        <TooltipButton
          neutral
          icon={disabled ? 'visibility' : 'visibility_off'}
          tooltipTop
          tooltipDelay={1000}
          tooltipText={disabled ? 'enable' : 'disable'}
          onClick={onToggleDisabled}
        />
        <TooltipButton
          neutral
          icon={expanded ? 'expand_less' : 'expand_more'}
          tooltipTop
          tooltipDelay={1000}
          tooltipText={expanded ? 'collapse' : 'expand'}
          onClick={onToggleExpanded}
        />
        <TooltipButton
          neutral
          disabled={!canDelete}
          tooltipTop
          tooltipDelay={1400}
          tooltipText="delete layer"
          icon="delete"
          onClick={onDestroy}
        />
      </ButtonGroup>
  );
};

Controls.propTypes = {
  type: string,
  disabled: bool,
  locked: bool,
  single: bool,
  expanded: bool,
  onDestroy: func.isRequired,
  onToggleLocked: func,
  onToggleDisabled: func,
  onToggleSingle: func,
  onToggleExpanded: func,
};

export default css(Controls, styles);
