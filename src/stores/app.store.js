import { observable, action, reaction } from 'mobx';

class AppStore {
  @observable appName = 'Attracker';
  @observable token = window.localStorage.getItem('jwt');
  @observable counter = 0;

  constructor() {
    reaction(() => this.token, (token) => {
      if (token) {
        window.localStorage.setItem('jwt', token);
      } else {
        window.localStorage.removeItem('jwt');
      }
    });
  }

  @action setToken(token) {
    this.token = token;
  }

  @action increment() {
    this.counter++;
  }

  @action decrement() {
    this.counter--;
  }

}

export default new AppStore();