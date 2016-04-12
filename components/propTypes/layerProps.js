import { PropTypes } from 'react';

const { bool, number, string, object } = PropTypes;

export default {
  id: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  type: string.isRequired,
  filters: object.isRequred,
  order: number,
  editable: bool,
  disabled: bool,
  locked: bool,
  single: bool,
};
