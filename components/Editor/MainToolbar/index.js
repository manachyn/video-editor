import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import ContextToolbar from '../ContextToolbar';

import getContextActions from './getContextActions';
import styles from './styles';

const { func } = PropTypes;

export const MainToolbar = props => {
  const { onCreateLayer } = props;

  const contextActions = getContextActions({
    common: {
      undo: () => console.log('undo'),
      redo: () => console.log('redo'),
    },
    layer: {
      create: onCreateLayer,
    },
    filter: {
      split: () => console.log('split'),
    },
  });

  return (
      <ContextToolbar filled contextActions={contextActions} />
  );
};

MainToolbar.propTypes = {
  onCreateLayer: func.isRequired,
};

export default css(MainToolbar, styles);
