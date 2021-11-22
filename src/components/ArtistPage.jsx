import React from "react";
import { Grid } from "@material-ui/core";
import { WindowSize } from "react-fns";
import LogoLinks from "./LogoLinks.jsx";
import YounGodProfile from "./YounGodProfile.jsx";
import YounGodReleases from "./YounGodReleases.jsx";
import MariaProfile from "./MariaProfile.jsx";
import MariaReleases from "./MariaReleases.jsx";
import LukeProfile from "./LukeProfile.jsx";
import LukeReleases from "./LukeReleases.jsx";
import DarienProfile from "./DarienProfile.jsx";
import DarienReleases from "./DarienReleases.jsx";
import MichaelProfile from "./MichaelProfile.jsx";
import MichaelReleases from "./MichaelReleases.jsx";


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

  renderArtistReleases() {
    if (this.props.artistName === 'youngod') {
      return <YounGodReleases className="artist-releases" />
    } else if (this.props.artistName === 'maria') {
      return <MariaReleases className="artist-releases" />
    } else if (this.props.artistName === 'luke') {
      return <LukeReleases className="artist-releases" />
    } else if (this.props.artistName === 'darien') {
      return <DarienReleases className="artist-releases" />
    } else if (this.props.artistName === 'michael') {
      return <MichaelReleases className="artist-releases" />
    }
  }

  render() {
    return (
      <Grid
        item xs={12}
        container
        spacing={2}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          item xs={12}
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          {this.renderArtistProfile()}
          <WindowSize
            render={ ({ width }) => {
              if (width < 600) {
                return this.renderArtistReleases();
              }
            }}
          />
          <LogoLinks />
        </Grid>
        <WindowSize
            render={ ({ width }) => {
              if (width >= 600) {
                return this.renderArtistReleases();
              }
            }}
          />
      </Grid>
    )
  }
}

export default ArtistPage;
