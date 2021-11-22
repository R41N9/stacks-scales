import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import emailjs from "emailjs-com";


const ContactForm = function(props) {

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jsii82d', 'template_v4az0sn', form.current, 'user_eccPS4xJ5YtUyNNZHuRoB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Grid
      item xs={12} sm={8}
      container
      spacing={10}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <form ref={form} onSubmit={sendMail}>
        <Grid item xs={8} sm={4}>
          <div className="first form-group">
            <label>NAME</label>
            <input
              type="text"
              name="name"
            />
          </div>
        </Grid>
        <Grid item xs={8} sm={4}>
          <div className="form-group">
            <label>COMPANY</label>
            <input
              type="text"
              name="company"
            />
          </div>
        </Grid>
        <Grid item xs={8} sm={4}>
          <div className="form-group">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
            />
          </div>
        </Grid>
        <Grid item xs={8} sm={4}>
          <div className="form-group">
            <label>PHONE</label>
            <input
              type="text"
              name="phone"
            />
          </div>
        </Grid>
        <Grid item xs={8} sm={4}>
          <div className="last form-group">
            <label>MESSAGE</label>
            <textarea
              name="message"
            ></textarea>
            <button id="send-button"  value="Send" type="submit">SEND</button>
          </div>
        </Grid>
      </form>
    </Grid>
  )
}

export default ContactForm;