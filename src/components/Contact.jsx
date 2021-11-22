import React from "react";
import { Grid } from "@material-ui/core";
import ContactForm from "./ContactForm.jsx";
import LogoLinks from "./LogoLinks.jsx";


const Contact = function(props) {



  return (
    <Grid
      item xs={12}
      container
      spacing={4}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <ContactForm />
      <LogoLinks />
    </Grid>
  )
}

export default Contact;
