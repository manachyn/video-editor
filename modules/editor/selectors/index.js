import merge from 'lodash/merge';
import sortBy from 'lodash/sortBy';
import pick from 'lodash/pick';
import { createSelector } from 'reselect';

// layerType  [1] - [*] layers  [1] - [*] filters
// filterType [1] - [*] filters [1] - [1] layer

/*
 * terms:
 * ---------------------------------------
 * layerType - where filter can be dropped
 * ---------------------------------------
 */

/*
 * layerTypes
 * ├─ name
 * └─ description
 *
 * filterTypes
 * ├─ layerTypes: ['layerType1', ..., 'layerTypeN']
 * ├─ description
 * ├─ defaults
 * ├─ attributes
 * └─ appearance
 *
 * layers
 * ├─ id
 * ├─ type
 * ├─ filters(object)
 * │  ├─ filter1
 * │  │  ├─ type
 * │  │  ├─ timeline
 * │  │  ├─ attributes
 * │  │  └─ appearance
 * │  │
 * │  │  ...
 * │  │
 * │  └─ filterN
 * │     ├─ type
 * │     ├─ timeline
 * │     ├─ attributes
 * │     └─ appearance
 * └─ order
 */

export const layersSelector = createSelector(
    s => Object.values(s.editor.layers),
    s => s.editor.layerTypes,
    s => s.editor.filters,
    (layers, layerTypes, filtersSource) =>
        sortBy(layers, layer => layer.order)
            .map(({ filters, ...layer }) => ({
              ...layer,
              ...layerTypes[layer.type],
              filters: pick(filtersSource, filters)
            }))
);

export default createSelector(
    (s, props) => merge(s.editor, props),
    layersSelector,
    ({ layerTypes, ...editor }, layers) => ({
      ...editor,
      layerTypes,
      layers
    })
);
