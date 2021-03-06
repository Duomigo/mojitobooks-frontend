import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css';

import EmojiTags from '../Emoji/EmojiTags';

import { goToCard, convertJoinDate } from '../Authentication/AuthenStatus.js'

class UserScreen extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        user: props.userData.user,
        cards: props.userData.cards,
        sumclap: props.userData.sumclap
      }
    }

    formatReview(cards) {
      if (cards == 1) {
        return '1 review'
      } else if (cards == 0) {
        return 'No reviews yet'
      } else {
        return cards + ' reviews'
      }
    }
    
    render() {
      const { user, cards, sumclap } = this.state;
      const baseUrl = 'https://mojitobooks.pythonanywhere.com'

      const sumClap = (sum) => {
        if (sum > 1) {
          return "Clapped " + sum + " times."
        }
      }
  
      return (
  
        <div className=" container-fluid">
  
          <div className="row text-align-center justify-content-center">
            <div className="col-12">
              <div className="row m-profile-info col-lg-6 col-md-8 col-sm-8 col-xs-*">
                <div className="m-profile-left">
                  <img className="rounded-circle m-profile-avatar" src={baseUrl + "/static/ProfileImage/" + user.profile_image} alt="" />     
                </div>
                
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-*" style={{marginLeft: '-17px'}}>
                  <t className="m-profile-name">{user.name}</t>

                  <t className="m-profile-username">
                    @{user.username}
                  </t>
                  <t className="m-profile-description">
                    {this.formatReview(cards.length)}.{' '}
                  </t>
                  <t className="m-profile-description">
                    Joined {convertJoinDate(user.date_joined)}. 
                  </t>
                  <br />
                  <t className="m-profile-description">
                    {sumClap(sumclap)}
                  </t>
                  <t className="m-profile-bio">{user.bio}</t>
                </div>

              </div>

              <div className="m-profile-filter" style={{marginBottom: '20px'}}>
                {/* <button className="btn m-profile-button" type="submit">
                  {cards.length} Books
                </button>
                <button className="btn m-profile-button" type="submit">10 Following</button>
                <button className="btn m-profile-button" type="submit">88 Followers</button> */}
              </div> 
            </div>
  
            <div className="m-profile-card-container col-lg-6 col-md-8 col-sm-8 col-xs-*">              
              {cards.slice(0).reverse().map(function (card, i) { // map function with server data
                return (
                  <div className="m-profile-whole-card-cover rounded" key={i}>
                    <img onClick={() => goToCard(card.id)} className="card-img-top m-profile-card-cover rounded" src={baseUrl + "/static/CardPicture/" + card.picture} alt="" />
                    <p onClick={() => goToCard(card.id)} className="m-user-card-text" style={{marginBottom: '4px'}}>{card.title}</p>
                    <EmojiTags emojis={card.emoji} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      );
    }
  }

export default UserScreen;