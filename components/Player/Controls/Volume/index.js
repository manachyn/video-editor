import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import css from 'react-css-modules';
import cn from 'classnames';
import { spring, presets, Motion } from 'react-motion';

import Button from '../../../Button';
import Slider from '../../../Slider';

import Indicator from './Indicator';
import styles from './styles';

const { bool, number, string, func } = PropTypes;

export class Volume extends Component {

  constructor(props) {
    super(props);

    this.state = { expanded: false };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleExpand() {
    this.setState({ expanded: true });
  }

  handleCollapse() {
    this.setState({ expanded: false });
  }

  handleVolumeChange(volume) {
    const { muted, onToggleMute, onVolumeChange } = this.props;

    onVolumeChange(volume);
    if (muted && volume > 0) onToggleMute();
  }

  render() {
    const {
      className,
      containerClassName,
      buttonClassName,
      sliderThickness,
      error,
      step,
      volume,
      muted,
      onToggleMute,
    } = this.props;

    const { expanded } = this.state;

    const silent = muted || volume === 0;
    const toggleIcon = silent ? 'volume_off' : volume > 0.5 ? 'volume_up' : 'volume_down';

    const animationStyle = {
      opacity: spring(expanded && !error ? 1 : 0, presets.stiff),
      height: spring(expanded && !error ? 120 : 0, { stiffness: 300, damping: 40 }),
    };

    return (
      <div className={className}
        styleName="volume"
        onMouseOver={this.handleExpand}
        onMouseLeave={this.handleCollapse}
      >
        <Button
          className={cn(buttonClassName, styles.toggleButton)}
          disabled={error}
          icon={toggleIcon}
          onClick={onToggleMute}
        />
        <Motion style={animationStyle}>{s =>
          <div className={cn(containerClassName, styles.container)}>
            <div className={styles.box} style={{
              ...s, display: s.opacity === 0 ? 'none' : 'block',
            }}
            >
              <Slider vertical
                fillClassName={styles.fill}
                markerClassName={styles.marker}
                min={0} max={1} step={step}
                value={muted ? 0 : volume}
                thickness={sliderThickness}
                onChange={this.handleVolumeChange}
              >
                {!silent && <Indicator volume={volume} />}
              </Slider>
            </div>
          </div>
        }</Motion>
      </div>
    );
  }
}

Volume.propTypes = {
  className: string,
  containerClassName: string,
  buttonClassName: string,
  sliderThickness: string,
  error: bool,
  step: number,
  volume: number.isRequired,
  muted: bool.isRequired,
  onToggleMute: func.isRequired,
  onVolumeChange: func.isRequired,
};

Volume.defaultProps = {
  step: 0.01,
  sliderThickness: '3rem',
};

export default css(Volume, styles, { allowMultiple: true });
