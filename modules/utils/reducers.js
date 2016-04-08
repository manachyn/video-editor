import transform from 'lodash/transform';

export const combineTransform = (reducers, initialState = {}) =>
    (state = initialState, action) => ({
      ...state,
      ...transform(reducers, (result, reducer, key) => result[key] = reducer(state[key], action), {}),
    });

/**
 * Wrap reducer with functionality to apply it only if predicate returns true.
 *
 * @param {Function} reducer
 * @param {Function} predicate
 * @param {Object} options
 */
export const reduceIf = (reducer, predicate, options = { payload: true }) =>
  (state, action) => (predicate(action) ?
    reducer(state, options.payload ? action && action.payload : action) : state);

/**
 * Wrap reducer with functionality to apply it to list of actions.
 *
 * @param {Function} reducer
 * @param {Array.<Object>} actions
 * @returns {Function} wrapped reducer
 */
export function reduceAny(reducer, actions) {
  return reduceIf(reducer, a => actions.indexOf(a.type) !== -1);
}
