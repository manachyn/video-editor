import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import styles from './styles';

const { bool, string, object } = PropTypes;

export class Filter extends Component {
  render() {
    const {
      className,
      name,
      appearance,
      isDragging,
    } = this.props;

    const state = isDragging ? 'dragging' : 'normal';
    const styleName = cn('filter', state);
    const style = {
      backgroundColor: appearance.color,
    };

    return (
      <div { ...{ styleName, className, style } }>
        <h6 styleName="title">{name}</h6>
      </div>
    );
  }
}

Filter.propTypes = {
  className: string,
  name: string.isRequired,
  description: string.isRequired,
  appearance: object.isRequired,
  disabled: bool,
  isDragging: bool,
};

Filter.defaultProps = {
  disabled: false,
};

export { styles };
export default css(Filter, styles, { allowMultiple: true });
