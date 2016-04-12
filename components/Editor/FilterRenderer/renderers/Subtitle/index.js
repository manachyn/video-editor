import GL from 'gl-react';
import shaders from './shaders';

export default GL.createComponent(
  ({ children, ...rest }) => {
    const [video, text] = children;
    return (
      <GL.Node
        {...rest}
        shader={shaders.subtitle}
        uniforms={ { video, text } }
      />
    );
  },
  {
    displayName: 'Subtitle'
  }
);
