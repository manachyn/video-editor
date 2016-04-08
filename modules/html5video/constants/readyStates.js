const UNKNOWN_READY_STATE = {
  title: 'UNKNOWN_READY_STATE',
  body: 'This can\'t be real. What browser is that?',
};

export const HAVE_NOTHING = 0;
export const HAVE_METADATA = 1;
export const HAVE_CURRENT_DATA = 2;
export const HAVE_FUTURE_DATA = 3;
export const HAVE_ENOUGH_DATA = 4;

export const readyStates = {
  [HAVE_NOTHING]: {
    title: 'HAVE_NOTHING',
    body: 'No information regarding the media resource is available.',
  },
  [HAVE_METADATA]: {
    title: 'HAVE_METADATA',
    body: `Enough of the resource has been obtained that the duration
    of the resource is available.`,
  },
  [HAVE_CURRENT_DATA]: {
    title: 'HAVE_CURRENT_DATA',
    body: 'Not enough data.',
  },
  [HAVE_FUTURE_DATA]: {
    title: 'HAVE_FUTURE_DATA',
    body: 'Have some data.',
  },
  [HAVE_ENOUGH_DATA]: {
    title: 'HAVE_ENOUGH_DATA',
    body: 'Have enought data to start the playback.',
  },
};

export default code => ({ code, ...readyStates[code] }) || ({ code, ...UNKNOWN_READY_STATE });
