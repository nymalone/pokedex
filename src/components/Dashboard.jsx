import React, { Component } from "react";

import PokemonList from '../pokemon/PokemonList'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
    <div className="row mt-5">
      <div className="col">
        <PokemonList />
      </div>
    </div>
    )
  }
}

export default Dashboard;
