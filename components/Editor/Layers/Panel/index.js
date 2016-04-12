import pick from 'lodash/pick';
import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import cn from 'classnames';

import {
  layerShape,
  layerActionsShape,
  filterActionsShape,
} from '../../../propTypes';

import List from '../../../List';

import Panel from '../../Panel';

import ZoomSlider from '../ZoomSlider';
import Layer from '../Layer';

import styles from './styles';

const {
  bool,
  number,
  string,
  object,
  node,
  arrayOf,
  shape,
} = PropTypes;

export class LayersPanel extends Component {

  constructor(props) {
    super(props);

    this.handleZoom = this.handleZoom.bind(this);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.renderLayer = this.renderLayer.bind(this);
  }

  handleZoom(level) {
    console.log('zoom to: ', level);
  }

  handleZoomIn() {
    console.log('zoom in');
  }

  handleZoomOut() {
    console.log('zoom out');
  }

  renderFooter() {
    return (
        <ZoomSlider
          zoom={50}
          onZoom={this.handleZoom}
          onZoomIn={this.handleZoomIn}
          onZoomOut={this.handleZoomOut}
        />
    );
  }

  renderLayer(layer) {
    const layerProps = pick(
      this.props,
      'snapToGrid',
      'cellSize',
      'filterTypes',
      'actions',
      'duration'
    );

    return (
      <List.Item key={layer.id}>
        <Layer {...{ ...layer, ...layerProps } } />
      </List.Item>
    );
  }

  render() {
    const { className, children, layers } = this.props;

    return (
      <Panel className={cn(className, styles.panel)}
        contentClassName={styles.content}
        footerClassName={styles.footer}
        footer={this.renderFooter()}
      >
        {children}
        {layers.length > 0 ?
          <List>{layers.map(this.renderLayer)}</List> :
          <p>{'No layers'}</p>
        }
      </Panel>
    );
  }
}

LayersPanel.propTypes = {
  className: string,
  children: node,

  layers: arrayOf(layerShape).isRequired,
  filterTypes: object.isRequired,

  snapToGrid: bool,
  cellSize: number,

  actions: shape({
    layer: layerActionsShape.isRequired,
    filter: filterActionsShape.isRequired,
  }),

  duration: number.isRequired,
};

export default css(LayersPanel, styles, { allowMultiple: true });
