import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="clearfix">
          <h4>Travel Bucket</h4>
          <nav className="nav">
            <ul className="link">
              {/* <!-- navigation for visitors --> */}
              <li>
                <a className="nav-link-item" href="/sign-in">
                  <i className="fas fa-edit"></i>
                  <span className="navlink-text">Sign-In</span>
                </a>
              </li>
              <li>
                <a className="nav-link-item" href="/registration">
                  <i className="fas fa-sign-out-alt"></i>
                  <span className="navlink-text">Registration</span>
                </a>
              </li>
              {/* <!-- navigation for logged in users --> */}
              <li>
                <a className="nav-link-item" href="/dashboard-page">
                  <i className="fas fa-question-circle"></i>
                  <span className="navlink-text">Dashboard</span>
                </a>
              </li>
              <li>
                <a className="nav-link-item" href="/add-item-page">
                  <i className="fas fa-plus-circle"></i>
                  <span className="navlink-text">New Item</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link-item"
                  href="/"
                  onClick={this.logOutClick}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <span className="navlink-text">Log-Out</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
