import {
    VIDEO_INIT,
    VIDEO_LOAD_START,
    VIDEO_PROGRESS,
    VIDEO_SUSPEND,
    VIDEO_ABORT,
    VIDEO_ERROR,
    VIDEO_EMPTIED,
    VIDEO_STALLED,
    VIDEO_LOADED_METADATA,
    VIDEO_LOADED_DATA,
    VIDEO_CAN_PLAY,
    VIDEO_CAN_PLAY_THROUGH,
    VIDEO_PLAYING,
    VIDEO_WAITING,
    VIDEO_SEEKING,
    VIDEO_SEEKED,
    VIDEO_ENDED,
    VIDEO_DURATION_CHANGE,
    VIDEO_TIME_UPDATE,
    VIDEO_PLAY,
    VIDEO_PAUSE,
    VIDEO_RATE_CHANGE,
    VIDEO_RESIZE,
    VIDEO_VOLUME_CHANGE,
    VIDEO_TOGGLE_LOOP,
} from '../constants/actionTypes';

export function init(state) {
  return {
    type: VIDEO_INIT,
    payload: state,
  };
}

export function loadStart(networkState) {
  return {
    type: VIDEO_LOAD_START,
    payload: { networkState },
  };
}

export function progress(networkState, bufferedTime) {
  return {
    type: VIDEO_PROGRESS,
    payload: { networkState, bufferedTime },
  };
}

export function suspend(networkState) {
  return {
    type: VIDEO_SUSPEND,
    payload: { networkState },
  };
}

export function abort(networkState, errorCode) {
  return {
    type: VIDEO_ABORT,
    payload: { networkState, errorCode },
  };
}

export function error(networkState, errorCode) {
  return {
    type: VIDEO_ERROR,
    payload: { networkState, errorCode },
  };
}

export function emptied(networkState) {
  return {
    type: VIDEO_EMPTIED,
    payload: { networkState },
  };
}

export function stalled(networkState) {
  return {
    type: VIDEO_STALLED,
    payload: { networkState },
  };
}

export function loadedMetadata(metadata) {
  return {
    type: VIDEO_LOADED_METADATA,
    payload: metadata,
  };
}

export function loadedData(readyState) {
  return {
    type: VIDEO_LOADED_DATA,
    payload: { readyState },
  };
}

export function canPlay(readyState) {
  return {
    type: VIDEO_CAN_PLAY,
    payload: { readyState },
  };
}

export function canPlayThrough(readyState) {
  return {
    type: VIDEO_CAN_PLAY_THROUGH,
    payload: { readyState },
  };
}

export function playing(readyState) {
  return {
    type: VIDEO_PLAYING,
    payload: { readyState },
  };
}

export function waiting(readyState) {
  return {
    type: VIDEO_WAITING,
    payload: { readyState },
  };
}

export function seeking(currentTime) {
  return {
    type: VIDEO_SEEKING,
    payload: { currentTime },
  };
}

export function seeked(currentTime) {
  return {
    type: VIDEO_SEEKED,
    payload: { currentTime },
  };
}

export function ended(currentTime) {
  return {
    type: VIDEO_ENDED,
    payload: { currentTime },
  };
}

export function durationChange(duration) {
  return {
    type: VIDEO_DURATION_CHANGE,
    payload: { duration },
  };
}

export function timeUpdate(currentTime, duration) {
  return {
    type: VIDEO_TIME_UPDATE,
    payload: { currentTime, duration },
  };
}

export function play() {
  return { type: VIDEO_PLAY };
}

export function pause() {
  return { type: VIDEO_PAUSE };
}

export function rateChange(playbackRate) {
  return {
    type: VIDEO_RATE_CHANGE,
    payload: { playbackRate },
  };
}

export function resize(metadata) {
  return {
    type: VIDEO_RESIZE,
    payload: metadata,
  };
}

export function volumeChange(volume, muted) {
  return { type: VIDEO_VOLUME_CHANGE,
    payload: { volume, muted },
  };
}

export function toggleLoop(loop) {
  return {
    type: VIDEO_TOGGLE_LOOP,
    payload: { loop },
  };
}
