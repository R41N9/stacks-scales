import React from "react";
import { Grid } from "@material-ui/core";
import LogoLinks from "./LogoLinks.jsx";
import YounGodProfile from "./YounGodProfile.jsx";
import MariaProfile from "./MariaProfile.jsx";
import LukeProfile from "./LukeProfile.jsx";
import DarienProfile from "./DarienProfile.jsx";
import MichaelProfile from "./MichaelProfile.jsx";


class ArtistPage extends React.Component {

  constructor(props) {
    super(props);
  }

  renderArtistProfile() {
    if (this.props.artistName === 'youngod') {
      return <YounGodProfile className="artist-profile" />
    } else if (this.props.artistName === 'maria') {
      return <MariaProfile className="artist-profile" />
    } else if (this.props.artistName === 'luke') {
      return <LukeProfile className="artist-profile" />
    } else if (this.props.artistName === 'darien') {
      return <DarienProfile className="artist-profile" />
    } else if (this.props.artistName === 'michael') {
      return <MichaelProfile className="artist-profile" />
    }
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
        {this.renderArtistProfile()}
        <LogoLinks />
      </Grid>
    )
  }
}

export default ArtistPage;
