import { PropTypes } from 'react';

const { func, shape } = PropTypes;

export default shape({
  destroy: func.isRequired,

  move: func.isRequired,
  resize: func.isRequired,

  toggleVisibility: func.isRequired,
  toggleLocked: func.isRequired,
});
