const config = {
  screens: {
    Home: {
      screens: {
        MoreInfo: '/moreinfo',
        Index: {
          screens: {
            SubScription: {
              path: 'subscription',
            },
          },
        },
      },
    },
  },
};

const linking = {
  prefixes: ['marketer://tanoplus.com'],
  config,
};

export default linking;
