import React from "react";
import { Grid } from "@material-ui/core";


class DesktopNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item xs={5}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Grid item xs={5}>
          <div className="artist-dropdown dropdown">
            <button className="nav-button">ARTISTS &#x25BE;</button>
            <div className="artist-dropdown-content dropdown-content">
              <button id="youngod-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>YounGod</button>
              <button id="maria-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Maria</button>
              <button id="luke-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Luke</button>
              <button id="darien-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Darien</button>
              <button id="michael-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Michael</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <button id="contact-button" onClick={ () => this.props.handleContactClick() } className="nav-button">CONTACT</button>
        </Grid>
      </Grid>
    )
  }
}

export default DesktopNav;
