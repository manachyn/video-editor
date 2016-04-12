import flow from 'lodash/flow';
import pick from 'lodash/pick';

import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import { filterProps } from '../../../../propTypes';
import draggable from '../../../../Draggable';
import ItemTypes from '../../../ItemTypes';
import Filter from '../Filter';

import dragSource, { dragSourceProps } from './dragSource';
import styles from './styles';

const { bool, number, string, func } = PropTypes;

export const DraggableFilter = props => {
  const {
      onDestroy,
      onToggleVisibility,
      onToggleLocked,
      } = props;

  return (
      <Filter { ...{
        ...{
          onDestroy,
          onToggleVisibility,
          onToggleLocked,
        },
        ...pick(this.props, dragSourceProps),
      } }
      />
  );
};

DraggableFilter.propTypes = {
  ...filterProps,

  layerId: string.isRequired,

  onDestroy: func.isRequired,
  onToggleVisibility: func.isRequired,
  onToggleLocked: func.isRequired,

  x: number.isRequired,
  width: number.isRequired,

  isDragging: bool,
};

export default flow(
  css(styles),
  draggable(ItemTypes.Filter, dragSource)
)(DraggableFilter);
