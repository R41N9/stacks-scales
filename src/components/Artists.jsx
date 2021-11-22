import React from "react";
import { Grid } from "@material-ui/core";

class Artists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        item xs={12} sm={4}
        container
        spacing={1}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid
          item xs={12} sm={6}
          container
          spacing={1}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p id="news">
              News about the company goes here. Hemoglobin chocolate goblins farseek. Eleven fifteen ninety-three bottles of beer on the wall. Waffles are as good as pancakes, no better. Nine past half quarter til.
            </p>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic under-news" id="darien" src="./imgs/darien.jpeg" alt="Darien Someday" onClick={this.props.handleArtistClick}></img>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic under-news" id="youngod" src="./imgs/youngod.jpeg" alt="YounGod" onClick={this.props.handleArtistClick}></img>
          </Grid>
        </Grid>
        <Grid
          item xs={12} sm={6}
          container
          spacing={1}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img className="artist-pic beside-news" id="luke" src="./imgs/luke.jpeg" alt="Luke Something" onClick={this.props.handleArtistClick}></img>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic beside-news" id="maria" src="./imgs/maria.jpeg" alt="Maria Somehow" onClick={this.props.handleArtistClick}></img>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic beside-news" id="michael" src="./imgs/michael.png" alt="Michael Someway" onClick={this.props.handleArtistClick}></img>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Artists;