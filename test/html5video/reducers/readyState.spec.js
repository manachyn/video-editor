import expect from 'expect';
import { updateReadyState } from '../../../modules/html5video/reducers/readyState';

describe('readyState reducer', () => {
  it('should handle any other readyState value than HAVE_ENOUGH_DATA', () => {
    expect(updateReadyState({}, { readyState: 3 })).toEqual({
      error: null,
      readyState: {
        code: 3,
        title: 'HAVE_FUTURE_DATA',
        body: 'Have some data.',
      },
      loading: true,
    });
  });

  it('should handle any other HAVE_ENOUGH_DATA readyState value', () => {
    expect(updateReadyState({}, { readyState: 4 })).toEqual({
      error: null,
      readyState: {
        code: 4,
        title: 'HAVE_ENOUGH_DATA',
        body: 'Have enought data to start the playback.',
      },
      loading: false,
    });
  });
});

