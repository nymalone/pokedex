import React, { Component } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import Search from '../search/Search'

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
      pokemon: null,    
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <>
        
        {this.state.pokemon ? (
          <div className="row">
         
            {this.state.pokemon.map(pokemon => (
              <PokemonCard 
               key={pokemon.name}
               name={pokemon.name}
               url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1> Loading Pokémons...</h1>
        )}
      </>
    );
  }
}

export default PokemonList;
