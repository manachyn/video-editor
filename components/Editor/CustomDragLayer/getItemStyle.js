import snap from '../../../modules/utils/snap';

const getTransformStyle = (x, y) => {
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
};

export default props => {
  const {
    initialOffset,
    currentOffset,
    snapToGrid,
    cellSize,
  } = props;

  if (!initialOffset || !currentOffset) {
    return { display: 'none' };
  }

  let x = currentOffset.x;

  if (snapToGrid) {
    x -= initialOffset.x;
    x = snap(x, cellSize);
    x += initialOffset.x;
  }

  return getTransformStyle(x, currentOffset.y);
};
