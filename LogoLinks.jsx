import React from "react";
import Grid from "@material-ui/core";

class LogoLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="logo-links">
        <Grid item xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="baseline"
        >
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Grid item xs={3}>
                <h2>STACKS {'&'} SCALES</h2>
              </Grid>
              <Grid item xs={3}>
                <a href="https://www.instagram.com/stacksandscales/">INSTAGRAM @STACKS{'&'}SCALES</a>
              </Grid>
              <Grid item xs={3}>
                <a href="https://www.facebook.com/stacksandscalesproductions">FACEBOOK STACKS {'&'} SCALES</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default LogoLinks;