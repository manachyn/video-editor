import { PropTypes } from 'react';

const { number, shape } = PropTypes;

export default shape({
  width: number.isRequired,
  height: number.isRequired,
  videoWidth: number.isRequired,
  videoHeight: number.isRequired,
});
