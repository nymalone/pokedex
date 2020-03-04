import React, { Component, Fragment } from "react";
import PokemonSearch from "../pokemon/PokemonSearch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value }, () => this.props.search(this.state));
  }

  render() {
    return (
      <div>
        <form className="field">
          <input
          placeholder="Search..."
          style={{
              backgroundColor: 'white transparent',
              height: '1.6em',
              width: '95%',
              borderRadius: '15px',
              opacity: '0.8',
              fontSize: '1.6em'
            }}
            type="search"
            className="form-control mx-auto"
            name="search"
            value={this.state.search}
            onChange={e => this.inputChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default Search;
