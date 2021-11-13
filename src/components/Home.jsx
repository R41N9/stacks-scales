import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "@material-ui/core";
import Header from "./Header.jsx";
import Artists from "./Artists.jsx";
import LogoLinks from "./LogoLinks.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Header />
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >
            <Grid item xs={4} className="main-content">
              <div className="secondary-photo-quip">Some quip about the industry.</div>
            </Grid>
            <Grid item xs={4} className="main-content">
              <Artists />
            </Grid>
            <Grid item xs={4} className="main-content">
              <LogoLinks />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));