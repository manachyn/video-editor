import reduceReducers from 'reduce-reducers';
import { reduceAny } from '../../utils/reducers';

import {
    VIDEO_INIT,
    VIDEO_LOADED_METADATA,
    VIDEO_CAN_PLAY,
    VIDEO_CAN_PLAY_THROUGH,
    VIDEO_PROGRESS,
    VIDEO_RESIZE,
    VIDEO_DURATION_CHANGE,
    VIDEO_PLAY,
    VIDEO_PAUSE,
    VIDEO_SEEKING,
    VIDEO_SEEKED,
    VIDEO_RATE_CHANGE,
    VIDEO_VOLUME_CHANGE,
    VIDEO_TOGGLE_LOOP,
} from '../constants/actionTypes';

import initialState from '../initialState';

// Video reducer
export default function video(state = initialState, action) {
  switch (action.type) {
    case VIDEO_INIT: {
      const { duration } = action.payload;
      return Object.assign({}, state, { duration });
    }
    case VIDEO_LOADED_METADATA: {
      const { duration, size } = action.payload;
      return Object.assign({}, state, { duration, size });
    }
    case VIDEO_CAN_PLAY:
      return Object.assign({}, state, { canPlay: true });
    case VIDEO_CAN_PLAY_THROUGH:
      return Object.assign({}, state, { canPlayThrough: true });
    case VIDEO_PROGRESS: {
      const { percentage, ...restState } = state;
      const { bufferedTime } = action.payload;
      const buffered = Math.floor(bufferedTime / Math.max(restState.duration, 1) * 100);
      return Object.assign({}, restState, {
        percentage: Object.assign({}, percentage, { buffered }),
      });
    }
    case VIDEO_RESIZE: {
      const { size } = action.payload;
      return Object.assign({}, state, { size });
    }
    case VIDEO_DURATION_CHANGE: {
      const { duration } = action.payload;
      return Object.assign({}, state, { duration });
    }
    case VIDEO_PLAY:
      return Object.assign({}, state, { paused: false });
    case VIDEO_PAUSE:
      return Object.assign({}, state, { paused: true });
    case VIDEO_SEEKING:
      return Object.assign({}, state, { seeking: true });
    case VIDEO_SEEKED:
      return Object.assign({}, state, { seeking: false });
    case VIDEO_RATE_CHANGE: {
      const { playbackRate } = action.payload;
      return Object.assign({}, state, { playbackRate });
    }
    case VIDEO_VOLUME_CHANGE: {
      const { volume, muted } = action.payload;
      return Object.assign({}, state, { volume, muted });
    }
    case VIDEO_TOGGLE_LOOP: {
      const { loop } = action.payload;
      return Object.assign({}, state, { loop });
    }
    default:
      return state;
  }
}
