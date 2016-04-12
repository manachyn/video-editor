import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { string, node } = PropTypes;

export const Content = props => {
  const { className, children } = props;
  return (
    <div styleName="content" className={className}>
      {children}
    </div>
  );
};

Content.propTypes = {
  className: string,
  children: node,
};

export default css(Content, styles, { allowMultiple: true });
