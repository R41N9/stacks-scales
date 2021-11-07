import React from "react";
import Grid from "@material-ui/core";

class Artists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="artists">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Grid item xs={4}>
              <div class="luke"></div>
            </Grid>
            <Grid item xs={4}>
              <div class="maria"></div>
            </Grid>
            <Grid item xs={4}>
              <div class="michael"></div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Grid item xs={2}>
              <p class="news">
                News about the company goes here. Hemoglobin chocolate goblins farseek. Eleven fifteen ninety-three bottles of beer on the wall. Waffles are as good as pancakes, no better. Nine past half quarter til.
              </p>
            </Grid>
            <Grid item xs={5}>
              <div class="darien"></div>
            </Grid>
            <Grid item xs={5}>
              <div class="youngod"></div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Artists;