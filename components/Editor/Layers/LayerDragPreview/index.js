import css from 'react-css-modules';

import { filterProps } from '../../../propTypes';
import Layer from '../Layer';
import styles from './styles';

export const LayerDragPreview = props =>
    <div styleName="layer-drag-preview">
      <Layer {...props} />
    </div>
;

LayerDragPreview.propTypes = filterProps;

export default css(LayerDragPreview, styles);
