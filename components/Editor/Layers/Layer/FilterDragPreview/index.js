import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import styles from './styles';

const { number, bool, object, string } = PropTypes;

export class FilterDragPreview extends Component {

  constructor(props) {
    super(props);
    this.state = { tick: false };
    this.tick = this.refresh.tick(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ tick: !this.state.tick });
  }

  render() {
    const {
      id,
      layerId,
      width,
      visible,
      locked,
      appearance,
    } = this.props;

    const { tick } = this.state;
    const style = {
      width,
      backgroundColor: appearance.color,
    };

    const animation = tick ? 'tick' : 'tock';
    const visibility = visible ? 'visible' : 'hidden';
    const styleName = cn('filter-drag-preview', visibility, animation);
    const known = { styleName, style };

    return (
      <div {...known}>
        <h6 styleName="title">
          {`${id} - ${layerId}`}
        </h6>
      </div>
    );
  }
}

FilterDragPreview.propTypes = {
  id: string.isRequired,
  layerId: string.isRequired,
  type: string.isRequired,
  visible: bool,
  locked: bool,
  appearance: object.isRequired,
  width: number.isRequired,
};

export default css(FilterDragPreview, styles, { allowMultiple: true });
