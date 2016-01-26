const Config = {
  development: {
    apiUrl: 'http://localhost:8000/api'
  },
  test: {
    apiUrl: 'http://localhost:8000/api'
  },
  staging: {
    apiUrl: 'http://localhost:8000/api'
  },
  production: {
    apiUrl: 'http://localhost:8000/api'
  }
};

export default Config[process.env.NODE_ENV];
