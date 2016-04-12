import pick from 'lodash/pick';

import React, { PropTypes } from 'react';

import draggable from '../../../Draggable';
import ItemTypes from '../../ItemTypes';
import Filter from '../Filter';

import dragSource, { dragSourceProps } from './dragSource';

const { bool, string, object } = PropTypes;

export const DraggableFilter = ({ isDragging, ...props }) => (
  <Filter { ...{
    ...{ isDragging },
    ...pick(props, dragSourceProps),
  } }
  />
);

DraggableFilter.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  appearance: object.isRequired,
  disabled: bool,
  isDragging: bool,
};

export default draggable(
  ItemTypes.FilterType,
  dragSource
)(DraggableFilter);
