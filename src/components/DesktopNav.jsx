import React from "react";
import { Grid } from "@material-ui/core";


class DesktopNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item xs={5}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Grid
          item xs={5}
          container
          spacing={1}
          direction="column"
          justifyContent="flex-end"
          align-items="flex-start"
        >
          <div className="artist-dropdown dropdown">
            <Grid item xs={12}>
              <button className="nav-button">ARTISTS &#x25BE;</button>
            </Grid>
            <div className="artist-dropdown-content dropdown-content">
              <Grid item xs={12}>
                <button
                  id="youngod-button"
                  className="artist-button nav-button"
                  onClick={ (e) => this.props.handleArtistClick(e) }>
                    YounGod
                </button>
              </Grid>
              <Grid item xs={12}>
                <button
                  id="maria-button"
                  className="artist-button nav-button"
                  onClick={ (e) => this.props.handleArtistClick(e) }>
                    Maria
                </button>
              </Grid>
              <Grid item xs={12}>
                <button
                  id="luke-button"
                  className="artist-button nav-button"
                  onClick={ (e) => this.props.handleArtistClick(e) }>
                    Luke
                </button>
              </Grid>
              <Grid item xs={12}>
                <button
                  id="darien-button"
                  className="artist-button nav-button"
                  onClick={ (e) => this.props.handleArtistClick(e) }>
                    Darien
                </button>
              </Grid>
              <Grid item xs={12}>
                <button
                  id="michael-button"
                  className="artist-button nav-button"
                  onClick={ (e) => this.props.handleArtistClick(e) }>
                    Michael
                </button>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <button
            id="contact-button"
            onClick={ () => this.props.handleContactClick() }
            className="nav-button">
            CONTACT
          </button>
        </Grid>
      </Grid>
    )
  }
}

export default DesktopNav;
