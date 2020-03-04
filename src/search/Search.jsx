import React, { Component, Fragment } from "react";
import PokemonSearch from "../pokemon/PokemonSearch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPokemon: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchPokemon: e.target.value });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="search-filter"
          placeholder="Pesquise por um Pokémon..."
          onChange={this.handleChange.bind(this)}
        />
        <ul>
          {this.state.filtered.map(item => (
            <li key={item}>
              {item} 
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
