import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import { filterProps } from '../../../../propTypes';

import Controls from './Controls';
import styles from './styles';

const { string, func } = PropTypes;

export class Filter extends Component {

  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleToggleLocked = this.handleToggleLocked.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleToggleVisibility() {
    const { id, onToggleVisibility } = this.props;
    onToggleVisibility(id);
  }

  handleToggleLocked() {
    const { id, onToggleLocked } = this.props;
    onToggleLocked(id);
  }

  handleDestroy() {
    const { id, onDestroy } = this.props;
    onDestroy(id);
  }

  render() {
    const {
      id,
      layerId,
      visible,
      locked,
      appearance,
      width,
    } = this.props;

    const state = locked ? 'locked' : 'unlocked';
    const visibility = visible ? 'visible' : 'hidden';
    const styleName = cn('filter', visibility, state);
    const style = {
      width,
      backgroundColor: appearance.color,
    };

    const known = { styleName, style };

    return (
      <div {...known}>
        <h6 styleName="title">
          {`${id} - ${layerId}`}
        </h6>
        <Controls {...{ locked, visible } }
          onToggleVisibility={this.handleToggleVisibility}
          onToggleLocked={this.handleToggleLocked}
          onDestroy={this.handleDestroy}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  ...filterProps,
  className: string,
  onDestroy: func.isRequired,
  onToggleVisibility: func.isRequired,
  onToggleLocked: func.isRequired,
};

export default css(Filter, styles, { allowMultiple: true });
