const UNKNOWN_NETWORK_STATE = {
  title: 'UNKNOWN_NETWORK_STATE',
  body: 'Is this possible at all? Something went wrong.',
};

export const NETWORK_EMPTY = 0;
export const NETWORK_IDLE = 1;
export const NETWORK_LOADING = 2;
export const NETWORK_NO_SOURCE = 3;

export const networkStates = {
  [NETWORK_EMPTY]: {
    title: 'NETWORK_EMPTY',
    body: `The element has not yet been initialized.
      All attributes are in their initial states.`,
  },
  [NETWORK_IDLE]: {
    title: 'NETWORK_IDLE',
    body: `The element's resource selection algorithm is active and
    has selected a resource, but it is not actually using the network at this time.`,
  },
  [NETWORK_LOADING]: {
    title: 'NETWORK_LOADING',
    body: 'The user agent is actively trying to download data.',
  },
  [NETWORK_NO_SOURCE]: {
    title: 'NETWORK_NO_SOURCE',
    body: `The element's resource selection algorithm is active,
but it has not yet found a resource to use.`,
  },
};

export default code => ({ code, ...networkStates[code] }) || ({ code, ...UNKNOWN_NETWORK_STATE });
