import { PropTypes } from 'react';

const { func, shape } = PropTypes;

export default shape({
  toggleDebugMonitor: func.isRequired,
  previous: func,
  next: func
});
