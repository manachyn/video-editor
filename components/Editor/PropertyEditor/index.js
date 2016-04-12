import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Panel from '../Panel';
import styles from './styles';

const { string } = PropTypes;

export const PropertyEditor = props => {
  const { className } = props;

  return (
      <Panel className={cn(className, styles.panel)}
        headerClassName={styles.panelHeader}
        title="properties"
      />
  );
};

PropertyEditor.propTypes = {
  className: string,
};

export default css(PropertyEditor, styles, { allowMultiple: true });
