import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import Item from './Item';
import Subheader from './Subheader';
import Divider from './Divider';

import styles from './styles';

const { bool, string, node } = PropTypes;

export const List = props => {
  const {
    className,
    children,
    vertical,
    selectable,
    ...other,
  } = props;

  const orientation = vertical ? 'vertical' : 'horizontal';
  const styleName = cn('list', orientation);
  const known = { styleName, className };

  return (
    <ul { ...{ ...known, ...other } } styles={undefined}>
      {React.Children.map(children, item => (
        item.type === Item ?
          React.cloneElement(item, {
            selectable: selectable || item.props.selectable,
          }) :
          React.cloneElement(item)
      ))}
    </ul>
  );
};

List.propTypes = {
  className: string,
  children: node,
  vertical: bool,
  selectable: bool,
};

List.defaultProps = {
  vertical: true,
  selectable: false,
};

List.Subheader = Subheader;
List.Item = Item;
List.Divider = Divider;

export default css(List, styles, { allowMultiple: true });
