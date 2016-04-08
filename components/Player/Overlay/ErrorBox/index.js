import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './styles';

const { number, string } = PropTypes;

export const ErrorBox = ({ code, title, body }) => (
  <div styleName="error-box">
    <dl>
      <dt styleName="title">
        <strong styleName="code">
          {code}
        </strong>
        {title}
      </dt>
      <dd styleName="body">{body}</dd>
    </dl>
  </div>
);

ErrorBox.propTypes = {
  code: number,
  title: string,
  body: string,
};

export default css(ErrorBox, styles);
