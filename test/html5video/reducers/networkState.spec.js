import expect from 'expect';
import { updateNetworkState } from '../../../modules/html5video/reducers/networkState';

describe('networkState reducer', () => {
  it('should handle any other networkState value than NETWORK_NO_SOURCE', () => {
    expect(updateNetworkState({ networkState: 1, error: 'some error' }, { networkState: 2 })).toEqual({
      error: null,
      networkState: {
        code: 2,
        title: 'NETWORK_LOADING',
        body: 'The user agent is actively trying to download data.',
      },
    });
  });

  it('should handle NETWORK_NO_SOURCE networkState value', () => {
    expect(updateNetworkState({ networkState: 3, error: 'some error' }, { networkState: 2 })).toEqual({
      error: 'some error',
      networkState: {
        code: 2,
        title: 'NETWORK_LOADING',
        body: 'The user agent is actively trying to download data.',
      },
    });
  });
});

