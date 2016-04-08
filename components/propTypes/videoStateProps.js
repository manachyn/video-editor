import { PropTypes } from 'react';
import videoStateShape from './videoStateShape';
import sizeShape from './sizeShape';
import percentageShape from './percentageShape';

const { bool, number } = PropTypes;

export default {
  readyState: videoStateShape,
  networkState: videoStateShape,
  error: videoStateShape,
  size: sizeShape,

  currentTime: number.isRequired,
  duration: number.isRequired,

  percentage: percentageShape.isRequired,

  paused: bool.isRequired,
  loading: bool.isRequired,
  seeking: bool.isRequired,
  canPlay: bool.isRequired,
  canPlayThrough: bool.isRequired,
  playbackRate: number.isRequired,
};
