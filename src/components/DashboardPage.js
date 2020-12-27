import React, { Component } from "react";
import config from "../config"
import TokenService from "../services/token-service"
import { Link } from 'react-router-dom'

export class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemsByUserId: [],

    };
}

  componentDidMount() {

    let currentUser = TokenService.getUserId();
    console.log(currentUser)

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
        window.location = '/'
    }





    // let getItemsByUserIdUrl = `${config.API_ENDPOINT}/items/user/${currentUser}`;

    // fetch(getItemsByUserIdUrl)
    //     .then((itemsInList) => itemsInList.json())
    //     .then((itemsInList) => {
    //         // console.log(itemsInList)
    //         this.setState({
    //             itemsByUserId: itemsInList,
    //         });
    //         // console.log(this.state);
    //     })

    //     .catch((error) => this.setState({ error }));
}

  render() {
    return (
      <div>
        <section className="dashboard-page">
          <h1>Hello Jimmy Smith!</h1>
          <div className="item-wrapper">
            <div className="item-column">
              <img
                src="https://m.media-amazon.com/images/I/51+vl7wfRPL._AC_.jpg"
                className="item-image"
                alt="image of united states map"
              />
            </div>
            <div className="item-column">
              <h3 className="item-title">United States</h3>
              <p className="item-notes">Here are the user's notes</p>
              <ul className="item-details">
                <li className="item-rating">
                  <i className="fas fa-star selected-icon"></i>
                  <i className="fas fa-star selected-icon"></i>
                  <i className="fas fa-star selected-icon"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </li>
                <li className="item-cost">
                  <i className="fas fa-dollar-sign selected-icon"></i>
                  <i className="fas fa-dollar-sign selected-icon"></i>
                  <i className="fas fa-dollar-sign"></i>
                </li>
                <li className="item-currency">
                  America (United States) Dollars - USD
                </li>
                <li className="item-type">
                  <i className="fas fa-futbol selected-icon"></i>
                  <i className="fas fa-praying-hands"></i>
                  <i className="fas fa-graduation-cap"></i>
                  <i className="fas fa-landmark"></i>
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-hiking"></i>
                  <i className="fas fa-business-time"></i>
                  <i className="fas fa-bus"></i>
                </li>
                <li className="item-language">English</li>
                <li className="item-category">
                  Been There Done That!
                  <a href="#" className="myButton">
                    On My List!
                  </a>
                </li>
                <li className="is-public">Public</li>
                <li className="item-actions">
                  <div className="form-item">
                    <a href="#" className="myButton">
                      Edit
                    </a>
                  </div>
                  <div className="form-item">
                    <a href="#" className="myButton">
                      Delete
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DashboardPage;
