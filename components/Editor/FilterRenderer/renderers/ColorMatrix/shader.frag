precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform mat4 m;

void main () {
  gl_FragColor = m * texture2D(t, uv);
}
