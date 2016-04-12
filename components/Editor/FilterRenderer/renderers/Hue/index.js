import { PropTypes } from 'react';
import GL from 'gl-react';
import shaders from './shaders';

const { number, any } = PropTypes;

export default GL.createComponent(
  ({ width, height, hue, children: t }) =>
  <GL.Node { ...{ width, height } }
    shader={shaders.hue}
    uniforms={{ t, hue }}
  />,
  {
    displayName: 'Hue',
    propTypes: {
      children: any.isRequired,
      hue: number.isRequired,
      width: number.isRequired,
      height: number.isRequired
    }
  }
);
