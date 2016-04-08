import omit from 'lodash/omit';
import * as types from '../contans/actionTypes';

import initialState from './../initialState';

let layerId = 6;

export default function layers(state = initialState, action) {
  switch (action.type) {
    case types.LAYER_CREATE: {
      const { type } = action.payload;
      const nextId = ++layerId;
      const newLayerId = `${type}${nextId}`;

      const newLayer = Object.assign({ id: newLayerId, type, order: nextId }, initialState);

      return Object.assign({}, state, { [newLayerId]: newLayer });
    }
    case types.LAYER_DESTROY: {
      const { id } = action.payload;

      return omit(state, id);
    }
    case types.LAYER_ADD_FILTER: {
      const { id, filterId } = action.payload;
      const layer = state[id];
      const filters = layer.filters;

      return Object.assign({}, state, {
        [id]: Object.assign({}, layer, { filters: [...filters, filterId] }),
      });
    }
    case types.LAYER_REMOVE_FILTER: {
      const { id, filterId } = action.payload;
      const layer = state[id];
      const filters = layer.filters.filter(f => f !== filterId);

      return Object.assign({}, state, {
        [id]: Object.assign({}, layer, { filters }),
      });
    }
    default:
      return state;
  }
}
