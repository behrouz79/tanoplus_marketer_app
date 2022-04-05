const config = {
  screens: {
    SubScription: {
      path: 'SubScription/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['marketer://api.tanoplus.com'],
  config,
};

export default linking;
