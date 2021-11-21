import React from "react";
import { Grid } from "@material-ui/core";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  isMobile() {
    return window.innerWidth < 900;
  }

  renderNav() {
    return isMobile() ? ( <MobileNav /> ) : ( <DesktopNav /> );
  }

  render() {
    return (
      <Grid
        item xs={12}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Grid item xs={4}>
          <h1 className="top-left-title" onClick={ () => this.props.handleHomeClick() }>STACKS &amp; SCALES</h1>
        </Grid>
        {renderNav()}
      </Grid>
    )
  }
}

export default Header;
