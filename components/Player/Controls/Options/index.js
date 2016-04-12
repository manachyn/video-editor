import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import tooltip from '../../../Tooltip';
import Button from '../../../Button';
import styles from './styles';

const TooltipButton = tooltip(Button);
const { bool, string, func, node } = PropTypes;

export const Options = (props) => {
  const {
    children,
    className,
    buttonClassName,
    buttonOnClassName,
    buttonOffClassName,
    error,
    loop,
    onToggleDebugMonitor,
    onToggleLoop,
    onToggleFullScreen,
  } = props;

  const loopButtonClasses = loop ?
    [buttonOnClassName, styles.buttonOn] :
    [buttonOffClassName, styles.buttonOff];

  return (
    <div className={className} styleName="options">
      {process.env.NODE_ENV === 'development' &&
        <TooltipButton icon="bug_report"
          filled raised circle small
          disabled={error}
          className={styles.buttonDebug}
          tooltipText="toggle debug monitor"
          tooltipDelay={1200}
          onClick={onToggleDebugMonitor}
        />
      }
      <TooltipButton className={cn(...loopButtonClasses)}
        disabled={error}
        icon="repeat"
        tooltipText="toogle repeat"
        tooltipDelay={500}
        onClick={onToggleLoop}
      />
      <TooltipButton className={cn(buttonClassName, styles.buttonFullScreen)}
        disabled={error}
        tooltipText="toggle fullscreen"
        tooltipDelay={500}
        icon="fullscreen"
        onClick={onToggleFullScreen}
      />
      {children}
    </div>
  );
};


Options.propTypes = {
  children: node,
  className: string,
  buttonClassName: string,
  buttonOnClassName: string,
  buttonOffClassName: string,
  error: bool,
  loop: bool.isRequired,
  onToggleDebugMonitor: func,
  onToggleLoop: func.isRequired,
  onToggleFullScreen: func.isRequired,
};

export default css(Options, styles, { allowMultiple: true });
