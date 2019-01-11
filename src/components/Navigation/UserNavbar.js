import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/mojito.svg';
import '../../styles/Home.css';
import axios from 'axios';

import SignOutButton from '../Authentication/SignOut';

import * as routes from '../../constants/routes';
import newB from '../../images/m-new.svg'
import profileB from '../../images/m-user.svg'
import searchB from '../../images/m-search.svg'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class UserNavbar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  async componentDidMount() {

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": bearer
    }

    const res = await axios.get('http://40.83.75.170:5000/profile', { headers: header });
    await this.setState({ currentUser: res.data.user.username })
  }

  render() {

    const profilePath = "/u/" + this.state.currentUser;

    return (
      <nav className="navbar navbar-expand-lg navbar-style">
        <a className="navbar-brand" href="/">
          <img src={logo} width="150" height="30" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
          <div className="row">
            <Link className="navbar-button" to={routes.SEARCH}>
              <img src={searchB} width="25" height="25" alt="New"/>
            </Link>
            {/* <Link className="navbar-button" to={routes.NEW}>
              <img src={newB} width="25" height="25" alt="New"/>
            </Link> */}
            <Link className="navbar-button" to={routes.PROFILE}>
              <img src={profileB} width="25" height="25" alt="Profile"/>
            </Link>
            <SignOutButton />          
          </div>
        </div>
      </nav>
    )
  }
}

export default UserNavbar;