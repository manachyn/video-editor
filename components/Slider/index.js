import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { bool, string, number, func, node } = PropTypes;

export class Slider extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const orient = this.props.vertical ? 'vertical' : 'horizontal';
    this.input.setAttribute('orient', orient);
  }

  handleChange(e) {
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    const {
      sliderClassName,
      barClassName,
      fillClassName,
      markerClassName,
      vertical,
      size,
      disabled,
      thickness,
      min,
      max,
      step,
      value,
      onChange,
      children,
      ...other,
    } = this.props;

    const thicknessProp = vertical ? 'width' : 'height';
    const sizeProp = vertical ? 'height' : 'width';
    const offsetProp = vertical ? 'bottom' : 'left';

    const interval = max - min;
    const factor = 100 / interval;
    const offset = value * factor;

    const barStyle = { [thicknessProp]: thickness, [sizeProp]: size };
    const fillStyle = { [thicknessProp]: '100%', [sizeProp]: `${offset}%` };

    return (
      <div className={barClassName}
        styleName={vertical ? 'bar-vertical' : 'bar-horizontal'}
        style={barStyle}
      >
        <div
          className={fillClassName}
          styleName="fill"
          style={fillStyle}
        />
        <input type="range"
          className={sliderClassName}
          styleName={vertical ? 'slider-vertical' : 'slider-horizontal'}
          ref={r => (this.input = r)}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={this.handleChange}
          {...other}
        />
        {children &&
          <div className={markerClassName}
            styleName={vertical ? 'marker-vertical' : 'marker-horizontal'}
            style={{ [offsetProp]: `${offset}%` }}
          >
            {children}
          </div>
        }
      </div>
    );
  }
}

Slider.propTypes = {
  sliderClassName: string,
  barClassName: string,
  fillClassName: string,
  markerClassName: string,
  size: string,
  disabled: bool,
  thickness: string,
  min: number,
  max: number,
  step: number,
  value: number,
  vertical: bool,
  onChange: func,
  children: node,
};

Slider.defaultProps = {
  vertical: false,
  size: '100%',
  disabled: false,
  thickness: '8px',
  min: 0,
  max: 100,
  step: 1,
  value: 0,
};

export default css(Slider, styles, { allowMultiple: true });
