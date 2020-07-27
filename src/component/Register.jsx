import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/CounterAction";
import cryptoJs from "crypto-js";
import ".././App.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mname: "",
      lname: "",
      handlename: "",
      email: "",
      password: "",
      rpassword: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(register(this.state));
  };
  render() {
    return (
      <div>
        <div class="left">
          <span>FUN</span>book&#8482;
        </div>
        <div class="right">
          <div class="title">
            <img src="/register.png" width="25px" height="25px"></img>
            &nbsp;&nbsp;New Registration
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
                placeholder="First Name"
                id="fname"
                value={this.state.fname}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <br />
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
                placeholder="Middle Name"
                id="mname"
                value={this.state.mname}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <br />
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
                placeholder="Last Name"
                id="lname"
                value={this.state.lname}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <br />
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
                id="handlename"
                placeholder="Handle Name"
                value={this.state.handlename}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <br />
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
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
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
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
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
                id="rpassword"
                placeholder="Re-Enter Password"
                value={this.state.rpassword}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <br />
            <button
              onClick={(e) => this.handleSubmit(e)}
              class="register-button"
            >
              Sign up
            </button>
            <br />
            <br />
            <button onClick={(e) => this.handleSubmit(e)} class="cancel-button">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter,
});
export default connect(mapStateToProps)(Register);
