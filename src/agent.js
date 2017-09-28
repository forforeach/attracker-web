import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import appStore from './stores/app.store';
import authStore from './stores/auth.store';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/api';

const handleErrors = (err) => {
  if (err && err.response && err.response.status === 401) {
    authStore.logout();
  }
  return err;
};

const responseBody = (res) => res.body;

const tokenPlugin = (req) => {
  if (appStore.token) {
    req.set('authorization', `Bearer ${appStore.token}`);
  }
};

const requests = {
  del: (url) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: (url) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Auth = {
  authenticate: (email, password) =>
    requests.post('/users/authenticate', { email, password }),
  register: (username, email, password) =>
    requests.post('/users/register', { user: { username, email, password } }),
};


export default {
  Auth,
};
