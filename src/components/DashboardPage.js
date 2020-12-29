import React, { Component } from "react";
import config from "../config";
import TokenService from "../services/token-service";
import { Link } from "react-router-dom";

export class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsByUserId: [],
    };
  }

  componentDidMount() {
    let currentUser = TokenService.getUserId();
    console.log(currentUser);

    //if the user is not logged in, send him to landing page
    if (!TokenService.hasAuthToken()) {
      window.location = "/";
    }

    let getItemsByUserIdUrl = `${config.API_ENDPOINT}/items/user/${currentUser}`;

    fetch(getItemsByUserIdUrl)
      .then((itemsInList) => itemsInList.json())
      .then((itemsInList) => {
        console.log(itemsInList);
        this.setState({
          itemsByUserId: itemsInList,
        });
        console.log(this.state);
      })

      .catch((error) => this.setState({ error }));
  }

  render() {
    let showItemByUserId = "";

    if (this.state.itemsByUserId.length == 0) {
      showItemByUserId = <p>No Items</p>;
    } else {
      showItemByUserId = this.state.itemsByUserId.map((item, key) => {
        // let iFrameUrl = `https://www.google.com/maps/embed/v1/place?q=${item.keyword}&key=AIzaSyA1FQ7ZcelspXQa-U2c7DGQ4cXA_chfEGw`
        let ratingOutput = "";
        if (item.rating == 1) {
          ratingOutput = (
            <li className="item-rating">
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </li>
          );
        } else if (item.rating == 2) {
          ratingOutput = (
            <li className="item-rating">
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </li>
          );
        } else if (item.rating == 3) {
          ratingOutput = (
            <li className="item-rating">
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </li>
          );
        } else if (item.rating == 4) {
          ratingOutput = (
            <li className="item-rating">
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star"></i>
            </li>
          );
        } else if (item.rating == 5) {
          ratingOutput = (
            <li className="item-rating">
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
              <i className="fas fa-star selected-icon"></i>
            </li>
          );
        }

        let costOutput = "";
        if (item.cost == 1) {
          costOutput = (
            <li className="item-cost">
              <i className="fas fa-dollar-sign selected-icon"></i>
              <i className="fas fa-dollar-sign"></i>
              <i className="fas fa-dollar-sign"></i>
            </li>
          );
        } else if (item.cost == 2) {
          costOutput = (
            <li className="item-cost">
              <i className="fas fa-dollar-sign selected-icon"></i>
              <i className="fas fa-dollar-sign selected-icon"></i>
              <i className="fas fa-dollar-sign"></i>
            </li>
          );
        } else if (item.cost == 3) {
          costOutput = (
            <li className="item-cost">
              <i className="fas fa-dollar-sign selected-icon"></i>
              <i className="fas fa-dollar-sign selected-icon"></i>
              <i className="fas fa-dollar-sign selected-icon"></i>
            </li>
          );
        }

        let privacyOutput = "";
        if (item.is_public == 0) {
          privacyOutput = <li className="is-public">Private</li>;
        } else {
          privacyOutput = <li className="is-public">Public</li>;
        }

        let categoryButtonOutput = "";
        if (item.category == "Been There Done That!") {
          categoryButtonOutput = (
            <a href="#" className="myButton">
              On My List!
            </a>
          );
        } else {
          categoryButtonOutput = (
            <a href="#" className="myButton">
              Been There Done That!
            </a>
          );
        }

        let typeOutput = "";
        if (item.type == "Historical") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark selected-icon"></i> Historical
            </li>
          );
        }
        else if (item.type == "Romantic") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-heart selected-icon"></i> Romantic
            </li>
          );
        }
        else if (item.type == "Outdoor") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-hiking selected-icon"></i> Outdoor
            </li>
          );
        }
        else if (item.type == "Business") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-business-time selected-icon"></i> Business
            </li>
          );
        }
        else if (item.type == "Tourist") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-bus selected-icon"></i> Tourist
            </li>
          );
        }
        else if (item.type == "Religious") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-praying-hands  selected-icon"></i> Religious
            </li>
          );
        }
        else if (item.type == "Sport") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-graduation-cap"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-futbol  selected-icon"></i> Sport
            </li>
          );
        }
        else if (item.type == "Educational") {
          typeOutput = (
            <li className="item-type">
              <i className="type-icon fas fa-futbol"></i>
              <i className="type-icon fas fa-praying-hands"></i>
              <i className="type-icon fas fa-heart"></i>
              <i className="type-icon fas fa-hiking"></i>
              <i className="type-icon fas fa-business-time"></i>
              <i className="type-icon fas fa-bus"></i>
              <i className="type-icon fas fa-landmark"></i>
              <i className="type-icon fas fa-graduation-cap  selected-icon"></i> Educational
            </li>
          );
        }

        return (
          <div className="item-wrapper" key={key}>
            <div className="item-column">
              {/* <iframe
                className="item-image"
                width="100%"
                height="350"
                frameBorder="0"
                style="border:0"
                src={iFrameUrl}
                allowFullScreen
              ></iframe> */}
              <img
                src="https://m.media-amazon.com/images/I/51+vl7wfRPL._AC_.jpg"
                className="item-image"
                alt="image of united states map"
              />
            </div>
            <div className="item-column">
              <h3 className="item-title">{item.keyword}</h3>
              <p className="item-notes">{item.notes}</p>
              <ul className="item-details">
                {ratingOutput}
                {costOutput}
                <li className="item-currency">{item.currency}</li>
                {typeOutput}
                <li className="item-language">{item.language}</li>
                <li className="item-category">
                  {item.category}
                  {categoryButtonOutput}
                </li>
                {privacyOutput}
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
        );
      });
    }

    return (
      <div>
        <section className="dashboard-page">
          <h1>Hello Jimmy Smith!</h1>
          {showItemByUserId}
        </section>
      </div>
    );
  }
}

export default DashboardPage;
