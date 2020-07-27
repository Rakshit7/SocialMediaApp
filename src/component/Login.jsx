import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/CounterAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(login(this.state));
  };
  render() {
    return (
      <div>
        <div>
          <div class="left">
            <span>FUN</span>book&#8482;
          </div>
          <div class="right">
            <div class="title">
              <img src="/register.png" width="25px" height="25px"></img>
              &nbsp;&nbsp;Log in to your account
            </div>
            <form class="center-form">
              <div>
                <img
                  src="/usericon.png"
                  class="f-icon"
                  width="25px"
                  height="25px"
                ></img>
                <input
                  type="text"
                  class="floating-input"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={(e) => this.handleChange(e)}
                  id="username"
                  required
                />
              </div>
              <br />
              <div>
                <img
                  src="/password.jpg"
                  class="f-icon"
                  width="25px"
                  height="25px"
                ></img>
                <input
                  type="password"
                  class="floating-input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  id="password"
                />
              </div>
              <br />
              <br />
              <button
                class="register-button"
                onClick={(e) => this.handleSubmit(e)}
              >
                LogIn
              </button>
              <br />
              <br />
              <div class="new-registration">
                <a href="/register">New Registration?</a>
              </div>
              <div class="reset-password">
                <a>Reset Password</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => console.log("login state", state);
export default connect(mapStateToProps)(Login);
