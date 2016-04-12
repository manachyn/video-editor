import { PropTypes } from 'react';

const { number, shape } = PropTypes;

export default shape({
  offset: number.isRequired,
  duration: number.isRequired,
});
