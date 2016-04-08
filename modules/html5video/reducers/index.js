import reduceReducers from 'reduce-reducers';
import { reduceAny } from '../../utils/reducers';
import video from './video';
import { updateReadyState } from './readyState';
import { updateNetworkState } from './networkState';
import { updateError } from './error';
import { updateCurrentTime } from './currentTime';
import * as types from '../constants/actionTypes';

export default reduceReducers(
    video,
    reduceAny(updateReadyState, types.readyState),
    reduceAny(updateNetworkState, types.networkState),
    reduceAny(updateError, types.error),
    reduceAny(updateCurrentTime, types.time)
);
