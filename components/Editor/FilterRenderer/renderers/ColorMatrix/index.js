import { PropTypes } from 'react';
import GL from 'gl-react';
import shaders from './shaders';

const { object, any } = PropTypes;

export default GL.createComponent(
  ({ matrix: m, children: t }) =>
  <GL.Node
    shader={shaders.colorMatrix}
    uniforms={ { t, m } }
  />,
  {
    displayName: 'ColorMatrix',
    propTypes: {
      children: any.isRequired,
      matrix: object.isRequired
    }
  }
);
