import { PropTypes } from 'react';

const { bool, string, shape } = PropTypes;

export default shape({
  name: string.isRequired,
  description: string,
  behavioral: bool,
  presentational: bool,
});
