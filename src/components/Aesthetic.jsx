import React from "react";
import { Grid } from "@material-ui/core";

class Aesthetic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item xs={12} sm={4}
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="aesthetic home-content"
      >
        <img id="aesthetic-background" src="./imgs/brokenrecord.jpeg"/>
        <div>Some quip about the industry.</div>
      </Grid>
    )
  }
}

export default Aesthetic;