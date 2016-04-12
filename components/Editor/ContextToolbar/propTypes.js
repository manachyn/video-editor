import { PropTypes } from 'react';

const { string, func, arrayOf, shape } = PropTypes;

export const contextActionShape = shape({
  title: string,
  description: string,
  icon: string,
  handle: func,
});

export const contextActionsArray = arrayOf(contextActionShape);
