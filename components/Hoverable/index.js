import React, { Component, PropTypes } from 'react';

export const hoverable = ComposedComponent => {
  class Hoverable extends Component {
    constructor(props) {
      super(props);

      this.state = { hovered: false };
      this.focus = this.focus.bind(this);
      this.unfocus = this.unfocus.bind(this);
    }

    focus() {
      this.setState({ hovered: true });
    }

    unfocus() {
      this.setState({ hovered: false });
    }

    render() {
      return (
          <div onMouseEnter={this.focus} onMouseLeave={this.unfocus}>
            <ComposedComponent {...this.props} hovered={this.state.hovered} />
          </div>
      );
    }
  }

  Hoverable.propTypes = { children: PropTypes.node };

  return Hoverable;
};

export default hoverable;
