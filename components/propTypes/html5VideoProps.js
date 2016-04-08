import { PropTypes } from 'react';

const { bool, number, string } = PropTypes;

export default {
  preload: string,
  autoPlay: bool,
  controls: bool,
  loop: bool,
  muted: bool,
  src: string,
  poster: string,
  width: number,
  height: number,
  crossOrigin: string
};
