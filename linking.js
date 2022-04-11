const config = {
  screens: {
    Index: {
      screens: {
        initialRoute: 'Home',
        SubScription: 'SubScription/:order_id',
      },
    },
  },
};

const linking = {
  prefixes: ['marketer://api.tanoplus.com/'],
  config,
};

export default linking;
