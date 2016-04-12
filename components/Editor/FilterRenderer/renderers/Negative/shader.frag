precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float factor;

void main () {
  vec4 c = texture2D(t, uv);
  gl_FragColor = vec4(mix(c.rgb, 1.0 - c.rgb, factor), c.a);
}
