import React, { PropTypes } from 'react';
import GL from 'gl-react';

import Blur1D from './Blur1D';

const { number, any } = PropTypes;
const NORM = Math.sqrt(2) / 2;

function directionForPass(pass, factor, total) {
  const f = factor * pass / total;

  switch (pass % 4) {
    case 0: return [f, 0];
    case 1: return [0, f];
    case 2: return [f * NORM, f * NORM];
    case 3: return [f * NORM, -f * NORM];
    default:
      return pass % 2 ? [f, 0] : [0, f];
  }
}

/** Usages:
  - Small blur:
  <Blur factor={0.5} passes={2} width={w} height={h}>{url}</Blur>
  - Medium blur:
  <Blur factor={2} passes={4} width={w} height={h}>{url}</Blur>
  - Powerful blur:
  <Blur factor={20} passes={6} width={w} height={h}>{url}</Blur>
  */

export default GL.createComponent(
  ({ width, height, factor, children, passes, ...rest }) => {
    const rec = pass => pass <= 0 ? children :
      <Blur1D { ...{ ...{ width, height }, ...rest } }
        direction={directionForPass(pass, factor, passes)}>
        {rec(pass - 1)}
      </Blur1D>;
    return rec(passes);
  },
  {
    displayName: 'Blur',
    defaultProps: {
      passes: 2
    },
    propTypes: {
      width: number.isRequired,
      height: number.isRequired,
      factor: number.isRequired,
      children: any.isRequired,
      passes: number
    }
  });
