import { PropTypes } from 'react';

const { string, object, arrayOf } = PropTypes;

export default {
  // layer types on which filter can be placed (dropped)
  layerTypes: arrayOf(string).isRequired,
  name: string.isRequired,
  description: string,
  appearance: object,
  defaults: object,
  editor: object,
};
