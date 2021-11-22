import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "@material-ui/core";
import Header from "./Header.jsx";
import Aesthetic from "./Aesthetic.jsx";
import Artists from "./Artists.jsx";
import LogoLinks from "./LogoLinks.jsx";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item xs={12}
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Aesthetic />
        <Artists handleArtistClick={this.props.handleArtistClick}/>
        <LogoLinks />
      </Grid>
    )
  }
}

export default Home;
