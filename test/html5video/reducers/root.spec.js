import expect from 'expect';
import root from '../../../modules/html5video/reducers';
import * as types from '../../../modules/html5video/constants/actionTypes';

describe('root reducer', () => {
  it('should handle VIDEO_INIT', () => {
    const action = { type: types.VIDEO_INIT, payload: { duration: 5, networkState: 2, readyState: 3 } };
    expect(root({ error: 'some error' }, action)).toEqual({
      duration: 5,
      error: null,
      networkState: {
        code: 2,
        title: 'NETWORK_LOADING',
        body: 'The user agent is actively trying to download data.',
      },
      readyState: {
        code: 3,
        title: 'HAVE_FUTURE_DATA',
        body: 'Have some data.',
      },
      loading: true,
    });
  });
});

