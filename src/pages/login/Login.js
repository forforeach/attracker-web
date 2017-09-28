import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
          <div>
            <TextField
              type="email"
              floatingLabelText="Email"
              hintText="joe@mail.com"
              value={authUser.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <TextField
              type="password"
              floatingLabelText="Password"
              value={authUser.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <RaisedButton label="Primary" primary={true} type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;