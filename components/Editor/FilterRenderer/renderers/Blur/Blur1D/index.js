import React, { PropTypes } from 'react';
import GL from 'gl-react';
import shaders from './shaders';

const { number, array, any } = PropTypes;

export default GL.createComponent(
  ({ width, height, direction, children: t, ...rest }) =>
    <GL.Node { ...{ ...{ width, height }, ...rest } }
      shader={shaders.blur1D}
      uniforms={{
        direction,
        resolution: [width, height],
        t
      }}
    />,
  {
    displayName: 'Blur1D',
    propTypes: {
      width: number.isRequired,
      height: number.isRequired,
      direction: array.isRequired,
      children: any.isRequired
    }
  }
);
