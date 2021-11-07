import React from "react";
import Grid from "@material-ui/core";

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="header">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <h1>STACKS {'&'} SCALES</h1>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={4}>
                <div class="dropdown">
                  <button id="artists">ARTISTS</button>
                  <div class="dropdown-content">
                    <a href="./ArtistPage.jsx">YounGod</a>
                    <a href="./ArtistPage.jsx">Maria</a>
                    <a href="./ArtistPage.jsx">Luke</a>
                    <a href="./ArtistPage.jsx">Darien</a>
                    <a href="./ArtistPage.jsx">Michael</a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <a href="./About.jsx">ABOUT</a>
              </Grid>
              <Grid item xs={4}>
                <a href="./Contact.jsx">CONTACT</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Header;