import GL from 'gl-react';
import frag from './shader.frag';

export default GL.Shaders.create({
  csb: { frag }
});
