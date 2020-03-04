import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import spinner from "../components/spinner.gif";

const Sprite = styled.img`
  width: 6em;
  height: 6em;
`;

const Card = styled.div`
  box-shadow: 0 1px 2px rgba(255, 222, 0);
  transition: all 0.3s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(255, 222, 0);
    transition: opacity 0.3s ease-in-out;
  }
  &:hover {
    transform: scale(1.15, 1.15);
  }
  &:hover::after {
    opacity: 1;
  }
  color: rgb(249, 202, 51);
  -webkit-text-stroke: 1.3px #3a5e97;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class PokemonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      imageUrl: "",
      pokemonIndex: "",
      imageLoading: true
    };
  }
  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="card">
            <h5 className="card-header"># {this.state.pokemonIndex} </h5>
            {this.state.imageLoading ? (
              <img
                src={spinner}
                style={{ width: "3em", height: "3em" }}
                className="card-img-top rounded mx-auto d-block mt-3"
              />
            ) : null}
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              src={this.state.imageUrl}
            />
            <div className="card-body mx-auto">
              <h3 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(
                    letter =>
                      letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(" ")}
              </h3>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}

export default PokemonCard;
