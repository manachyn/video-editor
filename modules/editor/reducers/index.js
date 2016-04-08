import reduceReducers from 'reduce-reducers';
import { combineTransform } from '../../utils/reducers';

import editor from './editor';
import video from '../../html5video/reducers';
import player from '../../player/reducers';
import filters from '../filters/reducers';
import layers from '../layers/reducers';

const partial = combineTransform({
  video,
  player,
  layers,
  filters,
});

export default reduceReducers(editor, partial);
