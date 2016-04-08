import expect from 'expect';
import video from '../../../modules/html5video/reducers/video';
import * as types from '../../../modules/html5video/constants/actionTypes';
import initialState from '../../../modules/html5video/initialState';

describe('video reducer', () => {
  it('should handle initial state', () => {
    expect(video(undefined, {})).toEqual(initialState);
  });

  it('should handle VIDEO_INIT', () => {
    expect(video({ duration: 0 }, { type: types.VIDEO_INIT, payload: { duration: 5 } })).toEqual(
        { duration: 5 }
    );
  });

  it('should handle VIDEO_LOADED_METADATA', () => {
    expect(video({ duration: 0 }, { type: types.VIDEO_INIT, payload: { duration: 5 } })).toEqual(
        { duration: 5 }
    );
  });

  it('should handle VIDEO_CAN_PLAY', () => {
    expect(video({}, { type: types.VIDEO_CAN_PLAY })).toEqual({ canPlay: true });
  });

  it('should handle VIDEO_CAN_PLAY_THROUGH', () => {
    expect(video({}, { type: types.VIDEO_CAN_PLAY_THROUGH })).toEqual({ canPlayThrough: true });
  });

  it('should handle VIDEO_PROGRESS', () => {
    expect(video({ duration: 20, percentage: { buffered: 10, played: 5 } }, {
      type: types.VIDEO_PROGRESS,
      payload: { networkState: 2, bufferedTime: 10 },
    })).toEqual({
      duration: 20,
      percentage: { buffered: 50, played: 5 },
    });
  });

  it('should handle VIDEO_RESIZE', () => {
    const size = {
      width: 640,
      height: 480,
      videoWidth: 1920,
      videoHeight: 1080,
    };
    expect(video({}, { type: types.VIDEO_RESIZE, payload: { size } })).toEqual(
        { size }
    );
  });

  it('should handle VIDEO_DURATION_CHANGE', () => {
    expect(video({}, { type: types.VIDEO_DURATION_CHANGE, payload: { duration: 10 } })).toEqual(
        { duration: 10 }
    );
  });

  it('should handle VIDEO_PLAY', () => {
    expect(video({}, { type: types.VIDEO_PLAY })).toEqual({ paused: false });
  });

  it('should handle VIDEO_PAUSE', () => {
    expect(video({}, { type: types.VIDEO_PAUSE })).toEqual({ paused: true });
  });

  it('should handle VIDEO_SEEKING', () => {
    expect(video({}, { type: types.VIDEO_SEEKING })).toEqual({ seeking: true });
  });

  it('should handle VIDEO_SEEKED', () => {
    expect(video({}, { type: types.VIDEO_SEEKED })).toEqual({ seeking: false });
  });

  it('should handle VIDEO_RATE_CHANGE', () => {
    expect(video({}, { type: types.VIDEO_RATE_CHANGE, payload: { playbackRate: 1.5 } })).toEqual(
        { playbackRate: 1.5 }
    );
  });

  it('should handle VIDEO_VOLUME_CHANGE', () => {
    expect(video({}, { type: types.VIDEO_VOLUME_CHANGE, payload: { volume: 0.2, muted: true } })).toEqual(
        { volume: 0.2, muted: true }
    );
  });

  it('should handle VIDEO_TOGGLE_LOOP', () => {
    expect(video({}, { type: types.VIDEO_TOGGLE_LOOP, payload: { loop: true } })).toEqual(
        { loop: true }
    );
  });
});

