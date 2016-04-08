import { resetError } from './error';
import getNetworkState, { NETWORK_NO_SOURCE } from '../constants/networkStates';

const networkStateReducer = (state, { networkState }) =>
    Object.assign({}, state, { networkState: getNetworkState(networkState) });

/**
 * Wrap reducer in additional functionality to reset error in state
 * if networkState differs from NETWORK_NO_SOURCE.
 *
 * @type {Function}
 */
export const updateNetworkState = resetError(
    networkStateReducer,
    ({ networkState }) => networkState !== NETWORK_NO_SOURCE
);
