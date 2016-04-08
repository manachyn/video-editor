import * as types from '../contans/actionTypes';

export function destroy(id) {
  return {
    type: types.FILTER_DESTROY,
    payload: { id },
  };
}

export function move(id, offset) {
  return {
    type: types.FILTER_MOVE,
    payload: { id, offset },
  };
}

export function resize(id, offsetDelta, durationDelta, factor) {
  return {
    type: types.FILTER_RESIZE,
    payload: {
      id,
      offsetDelta,
      durationDelta,
      factor,
    },
  };
}

export function toggleLocked(id) {
  return {
    type: types.FILTER_TOGGLE_LOCKED,
    payload: { id },
  };
}

export function toggleVisibility(id) {
  return {
    type: types.FILTER_TOGGLE_VISIBILITY,
    payload: { id },
  };
}
