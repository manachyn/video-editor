import snap from '../../../../../modules/utils/snap';
import ItemTypes from '../../../ItemTypes';

export default {
  // -
  canDrop(props, monitor) {
    const { type, filterTypes } = props;
    const sourceType = monitor.getItemType();
    const item = monitor.getItem();
    const typePropName = sourceType === ItemTypes.FilterType ? 'id' : 'type';
    const itemType = item[typePropName];
    const filterType = filterTypes[itemType];

    if (filterType) {
      // layer types on which filter can be placed (dropped)
      const layerTypes = filterType.layerTypes;
      // allowed filter types for layer includes current item's type
      return layerTypes.includes(type);
    }

    return false;
  },

  // -
  // returned value will be available to the drag source
  // in its endDrag method as monitor.getDropResult()
  drop(props, monitor, component) {
    const { id, snapToGrid, cellSize } = props;

    const sourceType = monitor.getItemType();
    // the item being dropped
    const item = monitor.getItem();

    if (sourceType === ItemTypes.FilterType) {
      return {
        layerId: id,
        type: item.name,
      };
    } else if (sourceType === ItemTypes.Filter) {
      // difference between the last recorded client offset of the pointer
      // and the client offset when current the drag operation has started
      const delta = monitor.getDifferenceFromInitialOffset();

      const x = item.x + delta.x;
      const x1 = snapToGrid ? snap(x, cellSize) : x;

      // update filter position on a timeline
      component.moveFilter(item.id, item.layerId, id, x1);

      return {
        fitlerId: item.id,
        sourceLayerId: item.layerId,
        targetLayerId: id,
        x1,
      };
    }

    return null;
  },
};
