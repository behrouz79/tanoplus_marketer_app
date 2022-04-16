const config = {
  screens: {
    Home: {
      screens: {
        Index: {
          initialRouteName: 'Index',
          screens: {
            SubScription: {
              path: 'subscription/:order_id',
            },
          },
        },
      },
    },
  },
};

const linking = {
  prefixes: ['marketer://api.tanoplus.com/'],
  config,
};

export default linking;
