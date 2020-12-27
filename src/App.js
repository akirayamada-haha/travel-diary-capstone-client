import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import DashboardPage from "./components/DashboardPage";
import AddItemPage from "./components/AddItemPage";
import Footer from "./components/Footer";
import "./normalize.css";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      error: null,
    };
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/sign-in' component={SignIn}/>
            <Route exact path='/registration' component={Registration}/>
            <Route exact path='/dashboard-page' component={DashboardPage}/>
            <Route exact path='/add-item-page' component={AddItemPage}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
