import React, { Component } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import Search from '../search/Search'

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
      pokemon: "",  
    };
     this.searchPokemon = this.searchPokemon.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  searchPokemon(searchValue){
      const pokemonSearch = this.state.pokemon.filter((el) => el.name.toLowerCase().includes(searchValue.search.toLowerCase()));
      this.setState({
        pokemon: pokemonSearch
      })
    }

  render() {
    return (
      <>
        
         <Search search={this.searchPokemon}/>
         <br />
         <br />
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
          <>
          <h3 style={{color: "white"}}> Loading... </h3>
          </>
        )}
      </>
    );
  }
}

export default PokemonList;
