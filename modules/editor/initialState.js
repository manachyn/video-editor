// layerType  [1] - [*] layers [1]  - [*] filters
// filterType [1] - [*] filters [1] - [1] layer

const layerTypes = {
  video: {
    name: 'video',
    description: 'video timeline layer',
    behavioral: true,
    presentational: false,
  },
  effect: {
    name: 'effect',
    description: 'effects layer',
    behavioral: false,
    presentational: true,
  },
};

const filterTypeDefaults = {
  timeline: {
    offset: 0,
    duration: 40,
  },
};

const filterTypes = {
  cut: {
    id: 'cut',
    layerTypes: ['video'],
    name: 'cut',
    description: 'lets you cut a part of the video',
    appearance: {
      color: '#232c32',
    },
    ...filterTypeDefaults,
  },
  overlay: {
    id: 'overlay',
    layerTypes: ['effect'],
    name: 'overlay',
    description: 'Use the power of rectangle!',
    appearance: {
      color: '#993333',
    },
    defaults: {
      color: '#111111',
      x1: 200,
      y1: 240,
      x2: 100,
      y2: 120,
    },
    editor: {
      x1: { type: 'number' },
      y1: { type: 'number' },
      x2: { type: 'number' },
      y2: { type: 'number' },
    },
    ...filterTypeDefaults,
  },
  blur: {
    id: 'blur',
    layerTypes: ['effect'],
    name: 'blur',
    description: '',
    appearance: {
      color: '#ad8e00',
    },
    defaults: {
      factor: 2,
      passes: 4,
    },
    ...filterTypeDefaults,
  },
  hue: {
    id: 'hue',
    layerTypes: ['effect'],
    name: 'hue',
    description: '',
    appearance: {
      color: '#277686',
    },
    defaults: {
      hue: 140,
    },
    ...filterTypeDefaults,
  },
  negative: {
    id: 'negative',
    layerTypes: ['effect'],
    name: 'negative',
    description: '',
    appearance: {
      color: '#277686',
    },
    defaults: {
      factor: 1,
    },
    ...filterTypeDefaults,
  },
  csb: {
    id: 'csb',
    layerTypes: ['effect'],
    name: 'csb',
    description: 'Contrast, saturation, brightness',
    appearance: {
      color: '#993333',
    },
    defaults: {
      contrast: 0.8,
      saturation: 0.2,
      brightness: 0.7,
    },
    ...filterTypeDefaults,
  },
  colorMatrix: {
    id: 'colorMatrix',
    layerTypes: ['effect'],
    name: 'colorMatrix',
    description: 'Color matrix',
    appearance: {
      color: '#ad8e00',
    },
    defaults: {
      matrix: [
        // red

        1, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 1,

        // grayscale (approximative)

        // 0.3, 0.3, 0.3, 0,
        // 0.6, 0.6, 0.6, 0,
        // 0.1, 0.1, 0.1, 0,
        // 0, 0, 0, 1
      ],
    },
    ...filterTypeDefaults,
  },
};

export default {
  activeFilters: [],

  snapToGrid: true,
  cellSize: 10,

  layerTypes,
  filterTypes,
};

