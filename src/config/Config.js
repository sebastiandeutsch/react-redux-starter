const Config = {
  development: {
    apiUrl: 'http://localhost:4730'
  },
  test: {
    apiUrl: 'http://localhost:4730'
  },
  staging: {
    apiUrl: 'http://localhost:4730'
  },
  production: {
    apiUrl: 'http://localhost:4730'
  }
};

export default Config[process.env.NODE_ENV];
