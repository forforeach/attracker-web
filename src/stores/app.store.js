import { observable, action } from 'mobx';

class AppStore {
  @observable appName = 'Hello world';
  @observable counter = 0;

  @action increment() {
    this.counter++;
  }

  @action decrement() {
    this.counter--;
  }
}

export default new AppStore();