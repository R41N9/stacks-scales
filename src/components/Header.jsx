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
        <Grid item xs={3}>
          <h1 className="top-left-title">STACKS &amp; SCALES</h1>
        </Grid>
        <Grid
          item xs={4}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-end"
        >
          <Grid item xs={3}>
            <div className="dropdown">
              <button className="artists-button">ARTISTS</button>
              <div className="dropdown-content">
                <a href="./ArtistPage.jsx">YounGod</a>
                <a href="./ArtistPage.jsx">Maria</a>
                <a href="./ArtistPage.jsx">Luke</a>
                <a href="./ArtistPage.jsx">Darien</a>
                <a href="./ArtistPage.jsx">Michael</a>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <a href="./About.jsx" className="top-links">ABOUT</a>
          </Grid>
          <Grid item xs={3}>
            <a href="./Contact.jsx" className="top-links">CONTACT</a>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Header;