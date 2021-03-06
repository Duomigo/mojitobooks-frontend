import React, { Component } from 'react';

import axios from 'axios';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import { NotificationLists } from '../Authentication/AuthenStatus.js'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.profileData.username,
      name: props.profileData.name,
      email: props.profileData.email,
      bio: props.profileData.bio,
      notification: null,
    };
  }

  onSubmit = (event) => {
    const {
      username,
      name,
      email,
      bio
    } = this.state;

    const updateData = {
      username: username,
      name: name,
      email: email,
      bio: bio
    }

    const bearer = 'Bearer ' + localStorage.getItem("accessToken")

    var header = {
        "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
        "Authorization": bearer
    }

    axios.post('https://mojitobooks.pythonanywhere.com/profile', updateData, { headers: header })
    .then(res => {
      window.location.href = '/u/' + username;
    })
    .catch(err => {
      this.setState({ notification: err.response.data.msg })
    });

    event.preventDefault();
  }

  render() {

    const {
      username,
      name,
      email,
      bio,
      notification,
    } = this.state;

    const isInvalid =
      username === '' ||
      name === '' ||
      email === '';

    return (
      <div className="">
        <div className="m-lm-content rounded">
          <h3 className="m-lm-header-text">Update your profile</h3>
          <h4 className="m-lm-sub-text">Refresh yourself!</h4>

          { notification && <NotificationLists noti={notification} /> }

          <form onSubmit={this.onSubmit}>
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={username}
              onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
              type="text"
              placeholder="Username"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={name}
              onChange={event => this.setState(updateByPropertyName('name', event.target.value))}
              type="text"
              placeholder="Name"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={bio}
              onChange={event => this.setState(updateByPropertyName('bio', event.target.value))}
              type="text"
              placeholder="Bio"
            />
            <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
              Update Profile
            </button>

          </form>
        </div>
      </div>
    );
  }
}


export default Account;