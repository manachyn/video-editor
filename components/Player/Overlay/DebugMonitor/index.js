import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import css from 'react-css-modules';

import { videoStateShape, percentageShape } from '../../../propTypes';
import styles from './styles';

const { number } = PropTypes;

export class DebugMonitor extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      networkState,
      readyState,
      currentTime,
      duration,
      percentage,
    } = this.props;

    const { buffered, played } = percentage;

    return (
      <div styleName="debug-monitor">
        <ul styleName="playback">
          <li><span styleName="label">Current time:</span>{currentTime}</li>
          <li><span styleName="label">Duration:</span>{duration}</li>
          <li><span styleName="label">Buffered:</span>{`${buffered}%`}</li>
          <li><span styleName="label">Played:</span>{`${played}%`}</li>
        </ul>
        {networkState &&
        <dl styleName="network-state">
          <dt styleName="title">
            <strong styleName="code">{networkState.code}</strong>
            {networkState.title}
          </dt>
          <dd styleName="body">{networkState.body}</dd>
        </dl>
        }
        {readyState &&
        <dl styleName="ready-state">
          <dt styleName="title">
            <strong styleName="code">{readyState.code}</strong>
            {readyState.title}
          </dt>
          <dd styleName="body">{readyState.body}</dd>
        </dl>
        }
      </div>
    );
  }
}

DebugMonitor.propTypes = {
  duration: number,
  percentage: percentageShape,
  currentTime: number,
  networkState: videoStateShape,
  readyState: videoStateShape,
};

export default css(DebugMonitor, styles);
