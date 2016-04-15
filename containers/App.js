import React, { Component } from 'react';
import css from 'react-css-modules';

import Editor from '../components/Editor';

import { sources } from '../videoSources';
import '../styles/main';
import styles from './styles';

export class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div styleName="root">
          <Editor className={styles.fullscreenEditor}
            source={sources[0]}
            player={{ width: 640, height: 480 }}
          />
          {children}
        </div>
    );
  }
}

export default css(App, styles);
