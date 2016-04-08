import React, { Component, PropTypes } from 'react';
import { sources } from '../videoSources';
import Html5Video from '../components/Html5Video';
import Player from '../components/Player';
import Editor from '../components/Editor';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div>
          <Editor source={sources[0]}
                  player={{ width: 432, height: 244 }}
          />
          {children}
        </div>
    );
  }
}