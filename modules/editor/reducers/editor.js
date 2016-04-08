import { EDITOR_UPDATE, EDITOR_LOAD, EDITOR_CREATE_FILTER } from '../constans/actionTypes';

import initialState from '../initialState';

export default function editor(state = initialState, action) {
  switch (action.type) {
    case EDITOR_UPDATE:
      return state;
    case EDITOR_CREATE_FILTER:
      return state;
    case EDITOR_LOAD:
      return action.payload;
    default:
      return state;
  }
}

