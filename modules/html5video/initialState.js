export default {
  error: null,
  networkState: null,
  readyState: null,

  size: null,

  currentTime: 0,
  duration: 0,

  percentage: {
    buffered: 0,
    played: 0,
  },

  paused: true,
  loading: false,
  seeking: false,

  loop: false,
  muted: false,
  volume: 0.5,
  playbackRate: 1.0,

  canPlay: false,
  canPlayThrough: false,
};
