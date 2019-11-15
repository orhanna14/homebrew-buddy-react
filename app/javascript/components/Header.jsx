import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      allPages: ["home", "recipes"],
    }
  }

  changePage = () => {
    const { currentPage, allPages } = this.state;
    var nextPage;

    if (currentPage == "home") {
        nextPage = "recipes";
    } else {
        nextPage = "home";
    }

    this.setState({
      currentPage: nextPage
    })
  }

   render() {
    const { currentPage, allPages } = this.state;
    
    return (
      <div className="bg-secondary-color">
        <div className="primary-color">This current page is { currentPage }</div>
        <button onClick={ this.changePage }>Change Page</button>
      </div> 
    )
  }
}
