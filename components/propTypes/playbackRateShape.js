import { PropTypes } from 'react';

const { number, shape } = PropTypes;

export default shape({
  step: number.isRequired,
  min: number.isRequired,
  max: number.isRequired
});
