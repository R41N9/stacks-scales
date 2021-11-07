import React from "react";
import Grid from "@material-ui/core";
import Header from "./Header.jsx";
import Artists from "./Artists.jsx";
import LogoLinks from "./LogoLinks.jsx";

class Home extends React.Component {
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
        <Grid item xs={1}>
          <Header />
        </Grid>
        <Grid item xs={11}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="baseline"
            >
            <Grid item xs={4} sm={12}>
              <div class="secondary-photo">Some quip about the industry.</div>
            </Grid>
            <Grid item xs={4} sm={12}>
              <Artists />
            </Grid>
            <Grid item xs={4} sm={12}>
              <LogoLinks />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));