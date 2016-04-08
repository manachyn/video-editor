import omit from 'lodash/omit';
import * as types from '../contans/actionTypes';

import initialState from './../initialState';

export default function filters(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_DESTROY: {
      const { id } = action.payload;

      return omit(state, id);
    }
    case types.FILTER_TOGGLE_LOCKED: {
      const { id } = action.payload;
      const filter = state[id];
      const locked = !filter.locked;

      return Object.assign({}, state, {
        [id]: Object.assign({}, filter, { locked }),
      });
    }
    case types.FILTER_TOGGLE_VISIBILITY: {
      const { id } = action.payload;
      const filter = state[id];
      const visible = !filter.visible;

      return Object.assign({}, state, {
        [id]: Object.assign({}, filter, { visible }),
      });
    }
    case types.FILTER_MOVE: {
      const { id, offset } = action.payload;
      const filter = state[id];
      let timeline = filter.timeline;

      timeline = Object.assign({}, timeline, { offset });

      return Object.assign({}, state, {
        [id]: Object.assign({}, filter, { timeline }),
      });
    }
    case types.FILTER_RESIZE: {
      const { id, offsetDelta, durationDelta, factor } = action.payload;
      const filter = state[id];
      let timeline = filter.timeline;

      const offset = timeline.offset + (factor > 0 ? 0 : offsetDelta);
      const duration = timeline.duration + durationDelta;
      timeline = Object.assign({}, timeline, { offset, duration });

      return Object.assign({}, state, {
        [id]: Object.assign({}, filter, { timeline }),
      });
    }
    default:
      return state;
  }
}
