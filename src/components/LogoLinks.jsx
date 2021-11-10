import React from "react";
import { Grid } from "@material-ui/core";

class LogoLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="logo-links">
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs>
            <h2 className="logo-title">STACKS &amp; SCALES</h2>
          </Grid>
          <Grid item xs>
            <ul className="links">
              <li>
                <a href="https://www.instagram.com/stacksandscales/">INSTAGRAM @STACKS&amp;SCALES</a>
              </li>
              <li>
                <a href="https://www.facebook.com/stacksandscalesproductions">FACEBOOK STACKS &amp; SCALES</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default LogoLinks;