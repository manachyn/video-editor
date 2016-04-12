import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Panel from '../../Panel';
import styles from './styles';

const { string, node } = PropTypes;

export const MainPanel = props => {
  const { className, children } = props;

  return (
      <Panel vertical className={cn(className, styles.mainPanel)}>
        {children}
      </Panel>
  );
};

MainPanel.propTypes = {
  className: string,
  children: node,
};

export default css(MainPanel, styles, { allowMultiple: true });
