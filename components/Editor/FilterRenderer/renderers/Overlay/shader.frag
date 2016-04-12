precision highp float;

varying vec2 uv;
uniform sampler2D video;
uniform sampler2D overlay;

vec4 over (vec4 front, vec4 back) {
  return vec4(mix(back.rgb, front.rgb, front.a) * back.a, mix(back.a, front.a, front.a));
}

void main () {
  vec4 v = texture2D(video, uv);
  vec4 o = texture2D(overlay, uv);

  gl_FragColor = over(o, v);
}
