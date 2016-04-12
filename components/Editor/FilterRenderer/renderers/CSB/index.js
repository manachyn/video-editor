import { PropTypes } from 'react';
import GL from 'gl-react';
import shaders from './shaders';

const { number, any } = PropTypes;

export default GL.createComponent(
   ({
     width,
     height,
     contrast,
     saturation,
     brightness,
     children: t
  }) =>
  <GL.Node
    { ...{ width, height } }
    shader={shaders.csb}
    uniforms={ {
      t,
      contrast,
      saturation,
      brightness
    } }
  />,
  {
    displayName: 'CSB',
    defaultProps: {
      contrast: 1,
      saturation: 1,
      brightness: 1
    },
    propTypes: {
      children: any.isRequired,
      contrast: number.isRequired,
      saturation: number.isRequired,
      brightness: number.isRequired,
      width: number.isRequired,
      height: number.isRequired
    }
  }
);
