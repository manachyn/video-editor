import flow from 'lodash/flow';
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import css from 'react-css-modules';

import tooltip from '../../Tooltip';
import Input from '../../Input';
import Button from '../../Button';
import Panel from '../Panel';

import { load } from '../../../modules/editor/actions';

import styles from './styles';

const TooltipButton = tooltip(Button);
const { func, object } = PropTypes;

export class Inspector extends Component {

  constructor(props) {
    super(props);
    this.state = { text: JSON.stringify(this.props.state) };
    this.handleToggleExpanded = this.handleChange.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const text = JSON.stringify(nextProps.state);
    if (text !== this.state.text) {
      this.setState({ text });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleChange(text) {
    this.setState({ text });
  }

  handleLoad() {
    this.props.load(JSON.parse(this.state.text));
  }

  renderControls() {
    return (
      <TooltipButton icon="done"
        rounded
        raised
        className={styles.button}
        tooltipTop
        tooltipDelay={200}
        tooltipText="load state"
        onClick={this.handleLoad}
      />
    );
  }

  render() {
    const { text } = this.state;

    return (
      <Panel title="inspector"
        className={styles.panel}
        headerClassName={styles.panelHeader}
        contentClassName={styles.content}
        footerClassName={styles.footer}
        footer={this.renderControls()}
      >
        <Input multiline
          ref={r => (this.input = r)}
          className={styles.container}
          inputClassName={styles.input}
          value={text}
          onChange={this.handleChange}
        />
      </Panel>
    );
  }
}

Inspector.propTypes = {
  state: object.isRequired,
  load: func.isRequired,
};

export default flow(
  css(styles),
  connect(s => ({ state: s.editor }), { load })
)(Inspector);
