import React from "react";
import { Grid } from "@material-ui/core";

class Aesthetic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={4}>
        <div className="aesthetic home-content">Some quip about the industry.</div>
      </Grid>
    )
  }
}

export default Aesthetic;