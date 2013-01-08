settings = {
  scheme: 'http',
  port: process.env.PORT || 5000,
  host: 'polar-fortress-3494.herokuapp.com,
  resource: '/socket.io',
  serviceKey: 'suite101',
  backend: {
    host: 'dev.rafetest.gotpantheon.com',
    port: 80,
    scheme: 'http',
    messagePath: '/nodejs/message'
  },
  transports: ['xhr-polling'],
  debug: true
};

