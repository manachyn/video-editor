import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import styles from './styles';

const { number, string, func } = PropTypes;

export class Handle extends Component {

  constructor(props) {
    super(props);

    this.direction = props.factor > 0 ? 'right' : 'left';
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  getX() {
    return this.handle.getBoundingClientRect()[this.direction];
  }

  handleMouseDown() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.props.onResized(this.state.delta, this.props.factor);
  }

  handleMouseMove(e) {
    const { factor, onResizing } = this.props;
    const delta = e.clientX - this.getX();
    this.setState({ delta });
    onResizing(delta, factor);
  }

  render() {
    const { className } = this.props;
    const styleName = cn('handle', this.direction);

    return (
      <div {...{ styleName, className } }
        ref={r => (this.handle = r)}
        onMouseDown={this.handleMouseDown}
      />
    );
  }
}

Handle.propTypes = {
  className: string,
  id: string.isRequired,
  factor: number.isRequired,
  onResizing: func.isRequired,
  onResized: func.isRequired,
};

export default css(Handle, styles, { allowMultiple: true });
