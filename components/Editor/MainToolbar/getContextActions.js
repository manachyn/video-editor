// modal contexts:
// ??

export default ({ common, layer, filter }) => [
  {
    name: 'layer',
    actions: [
      {
        title: 'create',
        description: 'new layer',
        icon: 'add',
        handler: layer.create,
        disabled: false,
        tooltipTop: true,
        tooltipDelay: 1000,
      },
    ],
  },
  {
    name: 'filter',
    actions: [
      {
        title: 'split',
        description: 'split',
        icon: 'content_cut',
        handler: filter.split,
        tooltipTop: true,
        tooltipDelay: 400,
        disabled: true,
        small: true,
      },
    ],
  },
  {
    name: 'common',
    actions: [
      {
        title: 'undo',
        description: 'undo',
        icon: 'undo',
        small: true,
        handler: common.undo,
        tooltipTop: true,
        tooltipDelay: 800,
        disabled: true,
      },
      {
        title: 'redo',
        description: 'redo',
        icon: 'redo',
        small: true,
        handler: common.redo,
        tooltipTop: true,
        tooltipDelay: 800,
        disabled: true,
      },
    ],
  },
];
