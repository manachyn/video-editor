import { EDITOR_UPDATE, EDITOR_LOAD, EDITOR_CREATE_FILTER } from '../constans/actionTypes';

import initialState from '../initialState';

const filterDefaults = {
  visible: true,
  locked: false,
};

let filterId = 100;

export function createFilter(state, action) {
  const { filterTypes, layers, filters } = state;
  const { layerId, type } = action.payload;

  const filterType = filterTypes[type];
  const layer = layers[layerId];

  const nextId = ++filterId;
  const newFilterId = `${type}${nextId}`;

  const { timeline, appearance } = filterType;

  const newFilter = {
    type,
    layerId,
    id: newFilterId,
    timeline,
    appearance,
    ...filterDefaults,
    attributes: { ...filterType.defaults },
  };

  return {
    ...state,
    filters: {
      ...filters,
      [newFilterId]: newFilter,
    },
    layers: {
      ...layers,
      [layerId]: {
        ...layer,
        filters: [...layer.filters, newFilterId],
      },
    },
  };
}

function update({ filters, ...state }, action) {
  const { currentTime } = action.payload;
  const activeFilters = Object.values(filters).filter(filter => {
    const { offset, duration } = filter.timeline;
    return currentTime >= offset && currentTime < (offset + duration);
  }).map(f => f.id);

  return {
    ...state,
    filters,
    activeFilters,
  };
}

export default function editor(state = initialState, action) {
  switch (action.type) {
    case EDITOR_UPDATE:
      return update(state, action);
    case EDITOR_CREATE_FILTER:
      return createFilter(state, action);
    case EDITOR_LOAD:
      return action.payload;
    default:
      return state;
  }
}

