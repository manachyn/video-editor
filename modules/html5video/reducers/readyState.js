import { resetError } from './error';
import getReadyState, { HAVE_ENOUGH_DATA } from '../constants/readyStates';

const readyStateReducer = (state, { readyState }) =>
    Object.assign({}, state, {
      readyState: getReadyState(readyState),
      loading: readyState !== HAVE_ENOUGH_DATA,
    });

/**
 * Wrap reducer in additional functionality to reset error in state.
 *
 * @type {Function}
 */
export const updateReadyState = resetError(readyStateReducer);
