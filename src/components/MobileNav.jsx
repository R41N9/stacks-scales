import React from "react";
import { Grid } from "@material-ui/core";


class MobileNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={3}>
        <div className="mobile-dropdown dropdown">
          <button id="menu-button" className="nav-button">&#8801;</button>
          <div className="mobile-dropdown-content dropdown-content">
            <button className="nav-button">ARTISTS &#x25BE;</button>
            <button id="youngod-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>YounGod</button>
            <button id="maria-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Maria</button>
            <button id="luke-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Luke</button>
            <button id="darien-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Darien</button>
            <button id="michael-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Michael</button>
            <button onClick={ () => this.props.handleContactClick() } className="nav-button">CONTACT</button>
          </div>
        </div>
      </Grid>
    )
  }
}

export default MobileNav;
