import { PropTypes } from 'react';

const { func, shape } = PropTypes;

export default shape({
  loadStart: func.isRequired,
  progress: func.isRequired,
  suspend: func.isRequired,
  abort: func.isRequired,
  error: func.isRequired,
  emptied: func.isRequired,
  stalled: func.isRequired,
  loadedMetadata: func.isRequired,
  loadedData: func.isRequired,
  canPlay: func.isRequired,
  canPlayThrough: func.isRequired,
  playing: func.isRequired,
  waiting: func.isRequired,
  seeking: func.isRequired,
  seeked: func.isRequired,
  ended: func.isRequired,
  durationChange: func.isRequired,
  timeUpdate: func.isRequired,
  play: func.isRequired,
  pause: func.isRequired,
  rateChange: func.isRequired,
  resize: func.isRequired,
  volumeChange: func.isRequired
});
