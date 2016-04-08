const UNKNOWN_ERROR = {
  title: 'UNKNOWN_ERROR',
  body: 'Something went wrong.',
};

export const MEDIA_ERR_ABORTED = 1;
export const MEDIA_ERR_NETWORK = 2;
export const MEDIA_ERR_DECODE = 3;
export const MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

export const errors = {
  [MEDIA_ERR_ABORTED]: {
    title: 'MEDIA_ERR_ABORTED',
    body: `The fetching process for the media resource
    was aborted by the user agent at the users request.`,
  },
  [MEDIA_ERR_NETWORK]: {
    title: 'MEDIA_ERR_NETWORK',
    body: `A network error of some description
    caused the user agent to stop fetching the media resource,
    after the resource was established to be usable.`,
  },
  [MEDIA_ERR_DECODE]: {
    title: 'MEDIA_ERR_DECODE',
    body: `An error of some description occurred
    while decoding the media resource,
    after the resource was established to be usable.`,
  },
  [MEDIA_ERR_SRC_NOT_SUPPORTED]: {
    title: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
    body: `The media resource indicated by
    the src attribute or assigned media provider object was not suitable.`,
  },
};

export default code => ({ code, ...errors[code] }) || ({ code, ...UNKNOWN_ERROR });
