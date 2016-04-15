import * as types from '../constans/actionTypes';

export function load(state) {
  return {
    type: types.EDITOR_LOAD,
    payload: state,
  };
}

export function update(currentTime) {
  return {
    type: types.EDITOR_UPDATE,
    payload: { currentTime },
  };
}

export function createFilter(layerId, type) {
  return {
    type: types.EDITOR_CREATE_FILTER,
    payload: { layerId, type },
  };
}
