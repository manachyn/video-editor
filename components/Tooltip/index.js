import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import styles from './styles';

const { bool, number, string, func, node } = PropTypes;

export const tooltip = ComposedComponent => {
  class Tooltip extends Component {
    constructor(props) {
      super(props);

      this.state = { visible: false };
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    resetTimeout() {
      if (this.timeout) clearTimeout(this.timeout);
    }

    handleMouseEnter() {
      this.resetTimeout();
      this.timeout = setTimeout(() => this.setState({ visible: true }), this.props.tooltipDelay);
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter();
      }
    }

    handleMouseLeave() {
      this.resetTimeout();
      if (this.state.visible) this.setState({ visible: false });
      if (this.props.onMouseLeave) this.props.onMouseLeave();
    }

    handleClick() {
      this.resetTimeout();
      if (this.props.tooltipHideOnClick) this.setState({ visible: false });
      if (this.props.onClick) this.props.onClick();
    }

    render() {
      const {
          className,
          tooltipText,
          tooltipTop,
          tooltipDelay,
          tooltipHideOnClick,
          children,
          ...other,
          } = this.props;

      const { visible } = this.state;

      const composedClass = cn(className, styles.container);
      const tooltipClass = cn(
          visible ? styles.visible : styles.hidden,
          tooltipTop ? styles.top : styles.bottom
      );

      return (
          <ComposedComponent className={composedClass} {...other}
                             onMouseEnter={this.handleMouseEnter}
                             onMouseLeave={this.handleMouseLeave}
                             onClick={this.handleClick}>
            {children}
            {tooltipText &&
            <span className={tooltipClass}>
            {tooltipText}
          </span>
            }
          </ComposedComponent>
      );
    }
  }

  Tooltip.propTypes = {
    className: string,
    tooltipText: string,
    tooltipTop: bool,
    tooltipDelay: number,
    tooltipHideOnClick: bool,
    children: node,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
  };

  Tooltip.defaultProps = {
    tooltip: 0,
    tooltipTop: false,
    tooltipHideOnClick: true,
  };

  return Tooltip;
};

export default tooltip;
