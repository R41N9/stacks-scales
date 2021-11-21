import React from "react";
import { Grid } from "@material-ui/core";

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        item xs={12}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Grid item xs={4}>
          <h1 className="top-left-title" onClick={ () => this.props.handleHomeClick() }>STACKS &amp; SCALES</h1>
        </Grid>
        <Grid
          item xs={3}
          className="mobile-only"
        >
          <div className="dropdown">
            <button id="menu-button" className="nav-button">&#8801;</button>
            <div className="dropdown-content">
              <div className="dropdown">
                <button className="nav-button">ARTISTS &#x25BE;</button>
                <div className="artist-dropdown-content">
                  <button id="youngod-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>YounGod</button>
                  <button id="maria-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Maria</button>
                  <button id="luke-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Luke</button>
                  <button id="darien-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Darien</button>
                  <button id="michael-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Michael</button>
                </div>
              </div>
              <button onClick={ () => this.props.handleContactClick() } className="nav-button">CONTACT</button>
            </div>
          </div>
        </Grid>
        <Grid
          item xs={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-end"
          className="desktop-only"
        >
          <Grid item xs={4}>
            <div className="dropdown">
              <button className="nav-button">ARTISTS &#x25BE;</button>
              <div className="dropdown-content">
                <button id="youngod-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>YounGod</button>
                <button id="maria-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Maria</button>
                <button id="luke-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Luke</button>
                <button id="darien-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Darien</button>
                <button id="michael-button" className="artist-button nav-button" onClick={ (e) => this.props.handleArtistClick(e) }>Michael</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <button onClick={ () => this.props.handleContactClick() } className="nav-button">CONTACT</button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Header;
