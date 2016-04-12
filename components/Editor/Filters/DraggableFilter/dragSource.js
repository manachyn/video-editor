import pick from 'lodash/pick';

export const dragSourceProps = [
  'id',
  'name',
  'description',
  'appearance',
  'disabled',
];

export default {
  // *
  // return the information that should be available
  // to the drop targets about the drag source
  beginDrag(props) {
    return pick(props, dragSourceProps);
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) return;

    const { onCreateFilter } = props;
    const { layerId, type } = monitor.getDropResult();

    onCreateFilter(layerId, type);
  },
};
