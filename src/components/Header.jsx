import React from "react";
import { Grid } from "@material-ui/core";
import { WindowSize } from "react-fns";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";


class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        item xs={12}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        id="header"
      >
        <Grid item xs={4}>
          <h1 className="top-left-title" onClick={ () => this.props.handleHomeClick() }>STACKS &amp; SCALES</h1>
        </Grid>
        <WindowSize
          render={ ({ width }) => {
            if (width < 900) {
              return <MobileNav
                       handleArtistClick={this.props.handleArtistClick}
                       handleContactClick={this.props.handleContactClick}
                     />;
            } else {
              return <DesktopNav
                       handleArtistClick={this.props.handleArtistClick}
                       handleContactClick={this.props.handleContactClick}
                     />;
            }
          }}
        />
      </Grid>
    )
  }
}


export default Header;
