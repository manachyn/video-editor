import { PropTypes } from 'react';

const { number, shape } = PropTypes;

export default shape({
  buffered: number.isRequired,
  played: number.isRequired
});
