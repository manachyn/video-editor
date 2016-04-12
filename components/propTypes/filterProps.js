import { PropTypes } from 'react';

import filterTimelineShape from './filterTimelineShape';

const { bool, string, object } = PropTypes;

export default {
  id: string.isRequired,
  type: string.isRequired,
  attributes: object,
  timeline: filterTimelineShape.isRequired,
  visible: bool,
  locked: bool,
  appearance: object.isRequired,
};
