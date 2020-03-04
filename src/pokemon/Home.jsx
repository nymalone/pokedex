import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="pokedex">
        <div id="left">
          <div id="logo"></div>
          <div id="bg_curve1_left"></div>
          <div id="bg_curve2_left"></div>
          <div id="curve1_left">
            <div id="buttonGlass">
              <div id="reflect"> </div>
            </div>
            <div id="miniButtonGlass1"></div>
            <div id="miniButtonGlass2"></div>
            <div id="miniButtonGlass3"></div>
          </div>
          <div id="curve2_left">
            <div id="junction">
              <div id="junction1"></div>
              <div id="junction2"></div>
            </div>
          </div>
          <div id="screen">
            <div id="topPicture">
              <div id="buttontopPicture1"></div>
              <div id="buttontopPicture2"></div>
            </div>
            <div id="picture">
               <Link to={"Dashboard"}>
              <img
                className="start"
                src="https://fontmeme.com/permalink/200303/5d8239416aa5778180072a46a31c57ba.png"
                alt="pokemon-font"
                border="0"
                 width="170"
              />
            </Link>
            </div>
            <div id="buttonbottomPicture"></div>
            <div id="speakers">
              <div className="sp"></div>
              <div className="sp"></div>
              <div className="sp"></div>
              <div className="sp"></div>
            </div>
          </div>
          <div id="bigbluebutton"></div>
          <div id="barbutton1"></div>
          <div id="barbutton2"></div>
          <div id="cross">
            <div id="leftcross">
              <div id="leftT"></div>
            </div>
            <div id="topcross">
              <div id="upT"></div>
            </div>
            <div id="rightcross">
              <div id="rightT"></div>
            </div>
            <div id="midcross">
              <div id="midCircle"></div>
            </div>
            <div id="botcross">
              <div id="downT"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
