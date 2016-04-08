import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import { videoStateShape, percentageShape } from '../../propTypes';
import Spinner from './Spinner';
import DebugMonitor from './DebugMonitor';
import ErrorBox from './ErrorBox';
import Controls from './Controls';
import styles from './styles';

const { bool, number, string, func, node } = PropTypes;

export const Overlay = (props) => {
  const {
    className,
    children,
    debug,
    loading,
    paused,
    error,
    currentTime,
    duration,
    percentage,
    networkState,
    readyState,
    onTogglePlay,
  } = props;

  const styleName = error ? 'error' : paused ? 'faded' : 'transparent';

  return (
    <div { ...{ styleName, className } }
      onClick={!error && onTogglePlay}>
      {loading && !paused && <Spinner />}
      {debug && <DebugMonitor { ...{
        currentTime,
        duration,
        percentage,
        networkState,
        readyState,
      } } /> }
      {error && <ErrorBox { ...error } />}
      {!error && paused && onTogglePlay ? <Controls { ...{ paused, onTogglePlay } } /> : null}
      {children}
    </div>
  );
};


Overlay.propTypes = {
  className: string,
  children: node,
  loading: bool,
  paused: bool,
  debug: bool,
  currentTime: number,
  duration: number,
  percentage: percentageShape,
  error: videoStateShape,
  readyState: videoStateShape,
  networkState: videoStateShape,
  onTogglePlay: func,
};

export default css(Overlay, styles, { allowMultiple: true });
