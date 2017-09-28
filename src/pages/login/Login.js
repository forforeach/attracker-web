import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('authStore')
@withRouter
@observer
class Login extends Component {
  componentWillUnmount() {
    this.props.authStore.reset();
  }

  handleEmailChange = (e) => this.props.authStore.setEmail(e.target.value);
  handlePasswordChange = (e) => this.props.authStore.setPassword(e.target.value);
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.authStore.authenticate()
      .then(() => this.props.history.replace('/'));
  };

  render() {
    const { authUser } = this.props.authStore;
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.handleSubmitForm}>
          <fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                value={authUser.email}
                onChange={this.handleEmailChange}
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={authUser.password}
                onChange={this.handlePasswordChange}
              />
            </fieldset>

            <button
              className="btn btn-lg btn-primary pull-xs-right"
              type="submit"
            > Sign in</button>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;