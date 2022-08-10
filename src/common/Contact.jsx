import React from 'react'
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import emailjs from '@emailjs/browser';
import './Contact.css';

const success = () => {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const name = document.getElementById('name');
    if (email && email.value.length > 0
        && message && message.value.length > 0
        && name && name.value.length > 0) {
        document.getElementById('thankyou').style.opacity = '1';
        setTimeout(function() {
            document.getElementById('thankyou').style.opacity = '0';
        }, 3000)
    }
};

const useStyles = makeStyles((theme) => ({
    TextField: {
        "& .MuiInputBase-root": {
            background: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c5c6c7",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            borderColor: "#c5c6c7",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#c5c6c7",
        },
        width: "100%",
    }
}));

const Contact = () => {
    const contactTitle = 'Contact Me';
    const classes = useStyles();

    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_38rxm4a', 'template_r4nyiad', form.current, 'WUivs6WVJ40mmQxy_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div>
            <span class="anchor" id="contact"></span>
            <div class="contact-container">
                <div class="contact-form-container">
                    <div class="section-title" data-aos="fade-right">
                        <h1>{ contactTitle }</h1>
                        <div class="underline"></div>
                    </div>
                    <div class="contact-form-container" className={classes.root}>
                        <form ref={form} onSubmit={sendEmail}>
                            <Alert severity='success' id='thankyou'>
                                Thanks for reaching out!
                            </Alert>

                            <Grid container spacing={3} className="grid">
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.TextField}
                                        required
                                        id="name"
                                        label="Your Name"
                                        variant="outlined"
                                        name="user_name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.TextField}
                                        required
                                        id="message"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        name="message"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.TextField}
                                        required
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        name="user_email"
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="contained" type="submit" onClick={success}>Send</Button>
                            <Button variant="contained" type="reset">Clear</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;