import expect from 'expect';
import * as types from '../../../modules/html5video/constants/actionTypes';
import * as actions from '../../../modules/html5video/actions';

const networkState = {
  title: 'VIDEO_PROGRESS',
  body: 'The element has not yet been initialized.',
};

const readyState = {
  title: 'HAVE_CURRENT_DATA',
  body: 'Not enough data.',
};

describe('video actions', () => {
  it('init should create VIDEO_INIT action', () => {
    expect(actions.init({ duration: 5 })).toEqual({
      type: types.VIDEO_INIT,
      payload: { duration: 5 },
    });
  });

  it('loadStart should create VIDEO_LOAD_START action', () => {
    expect(actions.loadStart(networkState)).toEqual({
      type: types.VIDEO_LOAD_START,
      payload: { networkState },
    });
  });

  it('progress should create VIDEO_PROGRESS action', () => {
    expect(actions.progress(networkState, 10)).toEqual({
      type: types.VIDEO_PROGRESS,
      payload: { networkState, bufferedTime: 10 },
    });
  });

  it('suspend should create VIDEO_SUSPEND action', () => {
    expect(actions.suspend(networkState)).toEqual({
      type: types.VIDEO_SUSPEND,
      payload: { networkState },
    });
  });

  it('abort should create VIDEO_ABORT action', () => {
    expect(actions.abort(networkState, 0)).toEqual({
      type: types.VIDEO_ABORT,
      payload: { networkState, errorCode: 0 },
    });
  });

  it('error should create VIDEO_ERROR action', () => {
    expect(actions.error(networkState, 0)).toEqual({
      type: types.VIDEO_ERROR,
      payload: { networkState, errorCode: 0 },
    });
  });

  it('emptied should create VIDEO_EMPTIED action', () => {
    expect(actions.emptied(networkState)).toEqual({
      type: types.VIDEO_EMPTIED,
      payload: { networkState },
    });
  });

  it('stalled should create VIDEO_STALLED action', () => {
    expect(actions.stalled(networkState)).toEqual({
      type: types.VIDEO_STALLED,
      payload: { networkState },
    });
  });

  it('loadedMetadata should create VIDEO_LOADED_METADATA action', () => {
    const metadata = { readyState: 4, duration: 10, size: {
      width: 640,
      height: 480,
      videoWidth: 1920,
      videoHeight: 1080,
    } };
    expect(actions.loadedMetadata(metadata)).toEqual({
      type: types.VIDEO_LOADED_METADATA,
      payload: metadata,
    });
  });

  it('loadedData should create VIDEO_LOADED_DATA action', () => {
    expect(actions.loadedData(readyState)).toEqual({
      type: types.VIDEO_LOADED_DATA,
      payload: { readyState },
    });
  });

  it('canPlay should create VIDEO_CAN_PLAY action', () => {
    expect(actions.canPlay(readyState)).toEqual({
      type: types.VIDEO_CAN_PLAY,
      payload: { readyState },
    });
  });

  it('canPlayThrough should create VIDEO_CAN_PLAY_THROUGH action', () => {
    expect(actions.canPlayThrough(readyState)).toEqual({
      type: types.VIDEO_CAN_PLAY_THROUGH,
      payload: { readyState },
    });
  });

  it('playing should create VIDEO_PLAYING action', () => {
    expect(actions.playing(readyState)).toEqual({
      type: types.VIDEO_PLAYING,
      payload: { readyState },
    });
  });

  it('waiting should create VIDEO_WAITING action', () => {
    expect(actions.waiting(readyState)).toEqual({
      type: types.VIDEO_WAITING,
      payload: { readyState },
    });
  });

  it('seeking should create VIDEO_SEEKING action', () => {
    expect(actions.seeking(10)).toEqual({
      type: types.VIDEO_SEEKING,
      payload: { currentTime: 10 },
    });
  });

  it('seeked should create VIDEO_SEEKED action', () => {
    expect(actions.seeked(10)).toEqual({
      type: types.VIDEO_SEEKED,
      payload: { currentTime: 10 },
    });
  });

  it('ended should create VIDEO_ENDED action', () => {
    expect(actions.ended(10)).toEqual({
      type: types.VIDEO_ENDED,
      payload: { currentTime: 10 },
    });
  });

  it('durationChange should create VIDEO_DURATION_CHANGE action', () => {
    expect(actions.durationChange(10)).toEqual({
      type: types.VIDEO_DURATION_CHANGE,
      payload: { duration: 10 },
    });
  });

  it('timeUpdate should create VIDEO_TIME_UPDATE action', () => {
    expect(actions.timeUpdate(5, 10)).toEqual({
      type: types.VIDEO_TIME_UPDATE,
      payload: { currentTime: 5, duration: 10 },
    });
  });

  it('play should create VIDEO_PLAY action', () => {
    expect(actions.play()).toEqual({ type: types.VIDEO_PLAY });
  });

  it('pause should create VIDEO_PAUSE action', () => {
    expect(actions.pause()).toEqual({ type: types.VIDEO_PAUSE });
  });

  it('rateChange should create VIDEO_RATE_CHANGE action', () => {
    expect(actions.rateChange(1.5)).toEqual({
      type: types.VIDEO_RATE_CHANGE,
      payload: { playbackRate: 1.5 },
    });
  });

  it('resize should create VIDEO_RESIZE action', () => {
    const size = {
      width: 640,
      height: 480,
      videoWidth: 1920,
      videoHeight: 1080,
    };
    expect(actions.resize({ size })).toEqual({
      type: types.VIDEO_RESIZE,
      payload: { size },
    });
  });

  it('volumeChange should create VIDEO_VOLUME_CHANGE action', () => {
    expect(actions.volumeChange(0.5, true)).toEqual({
      type: types.VIDEO_VOLUME_CHANGE,
      payload: { volume: 0.5, muted: true },
    });
  });

  it('toggleLoop should create VIDEO_TOGGLE_LOOP action', () => {
    expect(actions.toggleLoop(false)).toEqual({
      type: types.VIDEO_TOGGLE_LOOP,
      payload: { loop: false },
    });
  });
});
