import Axios from 'axios';
import Config from 'config/Config';

export default class API {
  constructor(session, axios = Axios, config = Config) {
    this.session = session;
    this.axios = axios;
    this.apiUrl = config.apiUrl;
  }

  _url(url) {
    return `${this.apiUrl}${url}`;
  }

  _get(url) {
    return this.axios(
      { method: 'GET', url: this._url(url) }
    );
  }

  _post(url, data) {
    return this.axios(
      { method: 'POST', url: this._url(url), data }
    );
  }

  _put(url, data) {
    return this.axios(
      { method: 'PUT', url: this._url(url), data }
    );
  }

  _patch(url, data) {
    return this.axios(
      { method: 'PATCH', url: this._url(url), data }
    );
  }

  _delete(url, data) {
    return this.axios(
      { method: 'DELETE', url: this._url(url), data }
    );
  }

  getSomething(something) {
    return this._get(
      '/something',
      { something }
    );
  }
}
