import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import css from 'react-css-modules';

import styles from './styles';

const { number, string } = PropTypes;

export class ErrorBox extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { code, title, body } = this.props;

    return (
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
  }
}

ErrorBox.propTypes = {
  code: number,
  title: string,
  body: string,
};

export default css(ErrorBox, styles);
