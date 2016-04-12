import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';

import Icon from '../../../Icon';
import Input from '../../../Input';

import styles from './styles';

const { string } = PropTypes;

export class SearchBar extends Component {
  render() {
    return (
      <div styleName="search-bar">
        <Icon value="search" />
        <Input />
      </div>
    );
  }
}

SearchBar.propTypes = {
  query: string,
};

export default css(SearchBar, styles, { allowMultiple: true });
