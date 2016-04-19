import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import css from 'react-css-modules';
import cn from 'classnames';

import tooltip from '../../../Tooltip';
import Button from '../../../Button';
import styles from './styles';

const TooltipButton = tooltip(Button);
const { bool, string, func } = PropTypes;

export class Controls extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      className,
      buttonClassName,
      paused,
      onTogglePlay,
    } = this.props;

    const playbackIcon = paused ? 'play_circle_filled' : 'pause';

    return (
      <div className={className} styleName="controls">
        <TooltipButton big
          tooltipTop
          tooltipText={paused ? 'resume' : 'pause'}
          tooltipDelay={1200}
          className={cn(buttonClassName, styles.togglePlayButton)}
          icon={playbackIcon}
          onClick={onTogglePlay}
        />
      </div>
    );
  }
}

Controls.propTypes = {
  className: string,
  buttonClassName: string,
  paused: bool,
  onTogglePlay: func.isRequired,
};

export default css(Controls, styles, { allowMultiple: true });
