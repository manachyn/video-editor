import getError from '../constants/errors';

const truePredicate = () => true;

/**
 * Get reducer and wrap it with functionality which reset error in state
 * if predicate return true.
 *
 * @param {Function} reducer
 * @param {Function} predicate
 * @return {Function} wrapped reducer
 */
export const resetError = (reducer, predicate = truePredicate) =>
    ({ error, ...state }, payload) =>
        reducer({ ...state, error: predicate(state, payload) ? null : error }, payload);

export const updateError = (state, { errorCode }) =>
    Object.assign({}, state, { error: getError(errorCode) });

