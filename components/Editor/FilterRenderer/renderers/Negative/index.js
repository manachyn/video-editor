import { PropTypes } from 'react';
import GL from 'gl-react';
import shaders from './shaders';

const { number, any } = PropTypes;

export default GL.createComponent(
  ({ children: t, factor }) =>
  <GL.Node
    shader={shaders.negative}
    uniforms={ { t, factor } }
  />,
  {
    displayName: 'Negative',
    defaultProps: {
      factor: 1
    },
    propTypes: {
      children: any.isRequired,
      factor: number
    }
  }
);
