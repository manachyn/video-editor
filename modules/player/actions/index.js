import * as types from '../constans/actionTypes';

export function toggleDebugMonitor() {
  return { type: types.PLAYER_TOGGLE_DEBUG_MONITOR };
}

export function previous(id) {
  return {
    type: types.PLAYER_PREVIOUS,
    payload: { id },
  };
}

export function next(id) {
  return {
    type: types.PLAYER_NEXT,
    payload: { id },
  };
}
