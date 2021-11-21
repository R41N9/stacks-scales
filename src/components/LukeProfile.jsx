import React from "react";
import { Grid } from "@material-ui/core";

class LukeProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item xs={8}
        container
        spacing={2}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          item xs={12}
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
          <img className="profile-pic" id="luke" src="./imgs/luke.jpeg" alt="Luke Something" width="100%"></img>
          </Grid>
          <Grid item xs={6}>
            <h1 className="artist-name">LUKE SOMETHING</h1>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget. Vulputate ut pharetra sit amet aliquam id diam. Id cursus metus aliquam eleifend mi in nulla.</p>
          </Grid>
        </Grid>
        <Grid
          item xs={12}
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <h3 className="profile-label">LATEST RELEASE</h3>
            <a href="./music/darkBeat.mp3" download><img id="fake-music1" className="latest" src="./imgs/albumCover5.png" alt="fresh glue and toe jam" width="100%"></img></a>
          </Grid>
          <Grid item xs={6}>
            <h3 className="profile-label">LINKS</h3>
            <ul className="profile-links">
              <li><a className="profile-link" href="https://twitter.com/">TWITTER</a></li>
              <li><a className="profile-link" href="https://facebook.com/">FACEBOOK</a></li>
              <li><a className="profile-link" href="https://instagram.com/">INSTA</a></li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default LukeProfile;