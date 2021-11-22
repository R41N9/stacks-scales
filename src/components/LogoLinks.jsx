import React from "react";
import { Grid } from "@material-ui/core";

class LogoLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        item xs={12} sm={4}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="logo-links home-content"
      >
        <div id="logo-and-links">
          <Grid item xs={12}>
            <h2 className="logo-title">STACKS &amp; SCALES</h2>
          </Grid>
          <Grid item xs={12}>
            <ul className="links">
              <li>
                <a href="https://www.instagram.com/stacksandscales/">INSTAGRAM @STACKS&amp;SCALES</a>
              </li>
              <li>
                <a href="https://www.facebook.com/stacksandscalesproductions">FACEBOOK STACKS &amp; SCALES</a>
              </li>
            </ul>
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default LogoLinks;
