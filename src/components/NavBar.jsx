import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <img  className="navbar-brand fluid" src="./images/logo.png" alt="logo" />
        </nav>
      </div>
    );
  }
}

export default NavBar;
