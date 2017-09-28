import { observable, action } from 'mobx';
import agent from '../agent';
import appStore from './app.store';

class AuthStore {

  @observable authUser = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  };

  @action setFirstName(userName) {
    this.authUser.userName = userName;
  }

  @action setLastName(userName) {
    this.authUser.userName = userName;
  }

  @action setUserName(userName) {
    this.authUser.userName = userName;
  }

  @action setEmail(email) {
    this.authUser.email = email;
  }

  @action setPassword(password) {
    this.authUser.password = password;
  }

  @action reset() {
    this.authUser.firstName = '';
    this.authUser.lastName = '';
    this.authUser.userName = '';
    this.authUser.email = '';
    this.authUser.password = '';
  }

  @action authenticate() {
    return agent.Auth.authenticate(this.authUser.email, this.authUser.password)
      .then(({ token }) => appStore.setToken(token))
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }));
  }

  @action register() {
    return agent.Auth.register(this.authUser.userName, this.authUser.email, this.authUser.password)
      .then(({ user }) => appStore.setToken(user.token))
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }));
  }

  @action logout() {
    appStore.setToken(undefined);
    return new Promise((res) => res());
  }
}

export default new AuthStore();
