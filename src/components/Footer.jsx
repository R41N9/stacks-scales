import React from "react";
import { Grid } from "@material-ui/core";


class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12}>
        <footer>
          <small>&copy; COPYRIGHT 2021 STACKS &amp; SCALES<br />SITE BY IAIN FURSTENWERTH</small>
        </footer>
      </Grid>
    )
  }
}

export default Footer;
