import React from "react";
import { Grid } from "@material-ui/core";

class Artists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid
          item xs={6}
          container
          spacing={1}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img className="artist-pic" src="./imgs/luke.jpeg" alt="Luke Something" width="100%" height="266px"></img>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic" src="./imgs/maria.jpeg" alt="Maria Somehow" width="100%" height="266px"></img>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic" src="./imgs/michael.png" alt="Michael Someway" width="100%" height="266px"></img>
          </Grid>
        </Grid>
        <Grid
          item xs={6}
          container
          spacing={1}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p className="news">
              News about the company goes here. Hemoglobin chocolate goblins farseek. Eleven fifteen ninety-three bottles of beer on the wall. Waffles are as good as pancakes, no better. Nine past half quarter til.
            </p>
          </Grid>
          <Grid item xs={12}>
            <img className="artist-pic" src="./imgs/darien.jpeg" alt="Darien Someday" width="100%" height="312px"></img>
          </Grid>
          <Grid item xs={12}>
          <img className="artist-pic" src="./imgs/youngod.jpeg" alt="YounGod" width="100%" height="312px"></img>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Artists;