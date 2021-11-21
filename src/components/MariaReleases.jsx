import React from "react";
import { Grid } from "@material-ui/core";


class MariaReleases extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item xs={12}
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <h3 className="profile-label">ALL RELEASES</h3>
        </Grid>
        <Grid item xs={4}>
          <a href="./music/darkBeat.mp3" download><img id="fake-music2" className="all-releases" src="./imgs/albumCover1.png" alt="blue gummy bears"
          width="80%"></img></a>
        </Grid>
        <Grid item xs={4}>
          <a href="./music/darkBeat.mp3" download><img id="fake-music3" className="all-releases" src="./imgs/albumCover2.png" alt="alternate"
          width="80%"></img></a>
        </Grid>
        <Grid item xs={4}>
          <a href="./music/darkBeat.mp3" download><img id="fake-music4" className="all-releases" src="./imgs/albumCover3.png" alt="alternative"
          width="80%"></img></a>
        </Grid>
        <Grid item xs={4}>
          <iframe width="80%" src="https://www.youtube.com/embed/L53gjP-TtGE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Grid>
        <Grid item xs={4}>
          <iframe width="80%" src="https://www.youtube.com/embed/kzvzwXnggzQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Grid>
        <Grid item xs={4}>
          <iframe width="80%" src="https://www.youtube.com/embed/XArx0ASwyDc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Grid>
      </Grid>
    )
  }
}

export default MariaReleases;