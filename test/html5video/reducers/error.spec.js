import expect from 'expect';
import { updateError } from '../../../modules/html5video/reducers/error';

describe('error reducer', () => {
  it('should set error by errorCode', () => {
    expect(updateError({}, { errorCode: 1 })).toEqual({
      error: {
        code: 1,
        title: 'MEDIA_ERR_ABORTED',
        body: `The fetching process for the media resource
    was aborted by the user agent at the users request.`,
      },
    });
  });
});

