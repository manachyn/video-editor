import flow from 'lodash/flow';

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import css from 'react-css-modules';

import styles from './styles';

const { bool, string, func, node } = PropTypes;

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

export default (type, source) =>
  /* eslint-disable new-cap */
  ComposedComponent => {
    class HOC extends Component {
      componentDidMount() {
        const { connectDragPreview } = this.props;

        // Use empty image as a drag preview so browsers don't draw it
        // and we can draw whatever we want on the custom drag layer instead.
        connectDragPreview(getEmptyImage(), {
          // IE fallback: specify that we'd rather screenshot the node
          // when it already knows it's being dragged so we can hide it with CSS.
          captureDraggingState: true,
        });
      }

      render() {
        const {
          className,
          isDragging,
          connectDragSource,
          ...other,
        } = this.props;

        const styleName = isDragging ? 'dragging' : 'normal';
        const known = {
          isDragging,
          connectDragSource,
        };

        return connectDragSource(
          <div {...{ styleName, className }}>
            <ComposedComponent {...{ ...known, ...other } } />
          </div>
        );
      }
    }

    HOC.propTypes = {
      className: string,
      children: node,
      isDragging: bool,
      connectDragSource: func.isRequired,
      connectDragPreview: func.isRequired,
    };

    return flow(
      css(styles, { allowMultiple: true }),
      DragSource(type, source, collect)
    )(HOC);
  };
  /* eslint-enable new-cap */
