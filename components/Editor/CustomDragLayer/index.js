import flow from 'lodash/flow';
import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import css from 'react-css-modules';

import FilterTypeDragPreview from '../Filters/FilterDragPreview.js';
import FilterDragPreview from '../Layers/Layer/FilterDragPreview';
import { LayerDragPreview } from '../Layers';

import getItemStyle from './getItemStyle';
import styles from './styles';

const {
  bool,
  number,
  string,
  object,
  shape,
} = PropTypes;

export class CustomDragLayer extends Component {

  renderPreview(item, itemType) {
    const { previews } = this.props;
    const Preview = previews[itemType];

    // invariant(Preview, `Preview of type "${itemType}" is not registered`);

    return Preview && <Preview {...item} />;
  }

  render() {
    const {
      item,
      itemType,
      isDragging,
    } = this.props;

    if (!isDragging) return null;

    const style = getItemStyle(this.props);

    return (
      <div styleName="drag-layer">
        <div style={style}>
          {this.renderPreview(item, itemType)}
        </div>
      </div>
    );
  }
}

CustomDragLayer.propTypes = {
  item: object,
  itemType: string,

  initialOffset: shape({
    x: number.isRequired,
    y: number.isRequired,
  }),
  currentOffset: shape({
    x: number.isRequired,
    y: number.isRequired,
  }),

  isDragging: bool,

  // for each object type
  // we should have a preview component
  previews: object,

  snapToGrid: bool,
  cellSize: number.isRequired,
};

CustomDragLayer.defaultProps = {
  // preview components for
  // various draggable item types
  previews: {
    filterType: FilterTypeDragPreview,
    filter: FilterDragPreview,
    layer: LayerDragPreview,
  },
};

const collect = monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
});

/* eslint-disable new-cap */
export default flow(
  css(styles),
  DragLayer(collect)
)(CustomDragLayer);
/* eslint-ensable new-cap */
