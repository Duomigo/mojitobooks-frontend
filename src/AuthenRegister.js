import React, { Component } from 'react';
import './App.css';
import './User.css';
import './AuthenLogin.css'

class AuthenLogin extends Component {
    render() {
        return (
          <div className="m-lm-background-signup">
            <div className="m-lm-content rounded">
              <button className="form-control mr-sm-2 m-lm-button" style={{backgroundColor: '#3b5998', color: '#eceff1'}}>Continue with Facebook</button>
              <button className="form-control mr-sm-2 m-lm-button">Continue with Google</button>
              <hr/>
              <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Username" aria-label="username" />
              <input className="form-control mr-sm-2 m-lm-input" type="search" placeholder="Password" aria-label="password" />
              <a href="https://google.com">
                <button className="btn form-control mr-sm-2 m-lm-button" style={{backgroundColor: 'rgb(255,45,85)', color: '#eceff1'}}>
                  Sign up
                </button>
              </a>
              <hr/>
              <t className="m-lm-text">
                Already have an account?
                <t className="m-lm-signup-text">
                  Log in
                </t>
              </t>
            </div>
          </div>
        );
    }
}

export default AuthenLogin;