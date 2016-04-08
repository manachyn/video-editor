export const layerDefaults = {
  filters: [],
  editable: false,
  disabled: false,
  locked: false,
  single: false,
};

export default {
  main: {
    id: 'main',
    type: 'video',
    order: 1,
    ...layerDefaults,
  },
  layer1: {
    id: 'layer1',
    type: 'effect',
    order: 1,
    ...layerDefaults,
  },
  layer2: {
    id: 'layer2',
    type: 'effect',
    order: 2,
    ...layerDefaults,
  },
  layer3: {
    id: 'layer3',
    type: 'effect',
    order: 3,
    ...layerDefaults,
  },
  layer4: {
    id: 'layer4',
    type: 'effect',
    order: 4,
    ...layerDefaults,
  },
};
