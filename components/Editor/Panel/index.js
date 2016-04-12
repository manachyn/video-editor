import isFunction from 'lodash/isFunction';
import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import tooltip from '../../Tooltip';
import Button from '../../Button';
import Panel from '../../Panel';

import styles from './styles';

const TooltipButton = tooltip(Button);
const {
  bool,
  string,
  element,
  func,
  node,
  oneOfType,
} = PropTypes;

export class EditorPanel extends Component {

  constructor(props) {
    super(props);
    this.state = { expanded: this.props.expanded };
    this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
  }

  handleToggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      className,
      headerClassName,
      contentClassName,
      footerClassName,
      children,
      title,
      header,
      footer,
      collapsible,
    } = this.props;

    const { expanded } = this.state;

    const state = expanded ? styles.expanded : styles.collapsed;
    const panelClass = cn(className, styles.panel, state);
    const headerClass = cn(headerClassName, styles.header, state);
    const contentClass = cn(contentClassName, styles.content, state);
    const footerClass = cn(footerClassName, styles.footer, state);

    const hasHeader = title || header || collapsible;

    return (
      <Panel className={panelClass}>
        {hasHeader &&
          <Panel.Header className={headerClass}>
            {title && <h4 styleName="title">{title}</h4>}
            {header}
            {collapsible &&
              <TooltipButton small
                icon={expanded ? 'format_indent_decrease' : 'format_indent_increase'}
                tooltipDelay={1200}
                tooltipText={expanded ? 'collapse' : 'expand' }
                onClick={this.handleToggleExpanded}
              />
            }
          </Panel.Header>
        }
        <Panel.Content className={contentClass}>
          {isFunction(children) ? children(expanded) : children}
        </Panel.Content>
        {footer &&
          <Panel.Footer className={footerClass}>
            {footer}
          </Panel.Footer>
        }
      </Panel>
    );
  }
}

EditorPanel.propTypes = {
  className: string,
  headerClassName: string,
  contentClassName: string,
  footerClassName: string,
  children: oneOfType([node, func]),
  title: string,
  header: element,
  footer: element,
  collapsible: bool,
  expanded: bool,
};

EditorPanel.defaultProps = {
  collapsible: false,
  expanded: true,
};

export default css(EditorPanel, styles, { allowMultiple: true });
