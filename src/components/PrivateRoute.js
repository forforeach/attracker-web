import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('appStore')
class PrivateRoute extends Component {
  get isAuthenticated() {
    return !!this.props.appStore.token;
  }
  render() {
    const { component: Component } = this.props;
    let result;
    if (this.isAuthenticated) {
      result = <Component { ...this.props } />;
    } else {
      result = <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
      }} />;
    }
    return result;
  }
}

export default PrivateRoute;