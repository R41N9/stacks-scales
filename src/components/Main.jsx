import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid } from "@material-ui/core";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import ArtistPage from "./ArtistPage.jsx";


const Main = function(props) {

  const [renderHome, setHome] = useState(true);
  const [renderContact, setContact] = useState(false);
  const [renderArtistPage, setArtistPage] = useState(false);

  const renderAuthentication = function() {
    if (renderHome) {
      return <Home handleArtistClick={handleArtistClick} className="home" />;
    // } else if (renderAbout) {
    //   return <About className="about" />;
    } else if (renderContact) {
      return <Contact className="contact" />;
    } else if (renderArtistPage) {
      return <ArtistPage artistName={renderArtistPage} className="artist-page" />;
    }
  }

  const handleHomeClick = async function() {
    const artistPageSet = await setArtistPage(false);
    const contactSet = await setContact(false);
    setHome(true);
  }

  const handleContactClick = async function() {
    const artistPageSet = await setArtistPage(false);
    const homeSet = await setHome(false);
    setContact(true);
  }

  const handleArtistClick = async function(e) {
    const contactSet = await setContact(false);
    const homeSet = await setHome(false);
    const artistName = (function() {
      if (e.target.id.includes('youngod')) {
        return 'youngod';
      } else if (e.target.id.includes('maria')) {
        return 'maria';
      } else if (e.target.id.includes('luke')) {
        return 'luke';
      } else if (e.target.id.includes('darien')) {
        return 'darien';
      } else if (e.target.id.includes('michael')) {
        return 'michael';
      }
    })();
    setArtistPage(artistName);
  }

  return (
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Header handleHomeClick={handleHomeClick}  handleContactClick={handleContactClick} handleArtistClick={handleArtistClick} id="header" />

        {renderAuthentication()}

        <Footer />
      </Grid>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"));
