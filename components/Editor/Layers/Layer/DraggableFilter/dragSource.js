import pick from 'lodash/pick';

export const dragSourceProps = [
  'id',
  'layerId',
  'type',
  'timeline',
  'visible',
  'locked',
  'attributes',
  'appearance',
  'x',
  'width',
];

export default {
  canDrag({ locked }, _monitor) {
    return !locked;
  },

  // *
  // return the information that should be available
  // to the drop targets about the drag source
  beginDrag(props) {
    return pick(props, dragSourceProps);
  },
};
