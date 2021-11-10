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
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <div className="header">
          <Grid item xs={12}>
            <Header />
          </Grid>
        </div>
        <div className="main-content">
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="baseline"
            >
              <Grid item xs={4}>
                <div className="secondary-photo">Some quip about the industry.</div>
              </Grid>
              <Grid item xs={4}>
                <Artists />
              </Grid>
              <Grid item xs={4}>
                <LogoLinks />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));