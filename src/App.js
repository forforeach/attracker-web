import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import routes from './routes';
import logo from './logo.svg';

// modules
import style from './App.module.scss';

@inject('appStore')
@withRouter
@observer
class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.appStore.appName}!</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className={style.logo}>
          <img src={logo} alt="react" />
        </div>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} component={route.component} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
