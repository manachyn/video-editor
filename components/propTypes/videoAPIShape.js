import { PropTypes } from 'react';

const { func, shape } = PropTypes;

export default shape({
  toggleMute: func.isRequired,
  toggleLoop: func.isRequired,
  togglePlay: func.isRequired,
  toggleFullScreen: func.isRequired,
  setVolume: func.isRequired,
  setPlaybackRate: func.isRequired,
  seek: func.isRequired
});
