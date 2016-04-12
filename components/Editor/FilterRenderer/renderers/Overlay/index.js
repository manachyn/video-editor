import { PropTypes } from 'react';
import GL from 'gl-react';
import shaders from './shaders';
import Rectangle from './Rectangle';

const { number, any } = PropTypes;

export default GL.createComponent(props => {
  const {
    width,
    height,
    x1, y1, x2, y2,
    children: video
  } = props;

  const overlay = (
    <Rectangle {...{
      width, height,
      x1, y1, x2, y2
    } } />
  );

  return (
    <GL.Node {...{ width, height }}
      shader={shaders.overlay}
      uniforms={{ video, overlay }}
    />
  );
}, {
  displayName: 'Overlay',
  propTypes: {
    children: any.isRequired,
    x1: number.isRequired,
    y1: number.isRequired,
    x2: number.isRequired,
    y2: number.isRequired,
    width: number.isRequired,
    height: number.isRequired
  }
});
