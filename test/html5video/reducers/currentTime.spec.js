import expect from 'expect';
import { updateCurrentTime } from '../../../modules/html5video/reducers/currentTime';

describe('currentTime reducer', () => {
  it('should set error by errorCode', () => {
    const state = { duration: 20, percentage: { buffered: 10, played: 5 } };
    expect(updateCurrentTime(state, { currentTime: 10 })).toEqual({
      duration: 20,
      percentage: { buffered: 10, played: 50 },
      currentTime: 10,
    });
  });
});

