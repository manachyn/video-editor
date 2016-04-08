import { PLAYER_TOGGLE_DEBUG_MONITOR } from '../constans/actionTypes';

export const initialState = {
  debug: Boolean(process.env.NODE_ENV === 'development'),
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case PLAYER_TOGGLE_DEBUG_MONITOR: {
      const { debug, ...restState } = state;
      return Object.assign({}, restState, { debug: !debug });
    }
    default:
      return state;
  }
}
