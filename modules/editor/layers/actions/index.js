import * as types from '../contans/actionTypes';

export function create(type) {
  return {
    type: types.LAYER_CREATE,
    payload: { type },
  };
}

export function destroy(id) {
  return {
    type: types.LAYER_DESTROY,
    payload: { id },
  };
}

export function move(id, index) {
  return {
    type: types.LAYER_MOVE,
    payload: { id, index },
  };
}

export function addFilter(id, filterId) {
  return {
    type: types.LAYER_ADD_FILTER,
    payload: { id, filterId },
  };
}

export function removeFilter(id, filterId) {
  return {
    type: types.LAYER_REMOVE_FILTER,
    payload: { id, filterId },
  };
}

