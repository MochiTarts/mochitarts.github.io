import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from "../common";
import Typography from '@material-ui/core/Typography';
import anime from 'animejs';
import aboutInfo from "./about.json";
import './Home.css';

const goToAbout = () => {
  const el = document.getElementById('about');
  el.scrollIntoView({
    behaviour: 'smooth'
  });
};

const deleteSpanml1 = () => {
  const textWrapper = document.querySelector('.ml1');
  textWrapper.innerHTML = textWrapper.textContent.replace("<span class='letter'>", "").replace("</span>", "");
};

const deleteSpanml2 = () => {
  const textWrapper = document.querySelector('.ml2 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace("<span class='letter'>", "").replace("</span>", "");
}

const useStyles = makeStyles((theme) => ({
  aboutRow: {
    margin: 'auto',
    maxWidth: 1100,
  },
  aboutCard: {
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: '#c5c6c7',
    '& ul': {
      paddingLeft: 20,
    },
    '& li:not(:last-child)': {
      marginBottom: '10px',
    },
    ['@media (max-width:550px)']: {
      '& .MuiTypography-body1': {
        fontSize: '14px',
      }
    }
  }
}));

const Home = (props) => {
  const about = aboutInfo;
  const classes = useStyles();
  const smBreakPoint = useMediaQuery('(max-width: 600px)');

  const animation = React.useRef(null);
  React.useEffect(() => {
    const greeting = document.querySelector('.ml1');
    greeting.style.opacity = '1';
    const slogan = document.querySelector('.ml2');
    slogan.style.opacity = '1';
    //Greeting Text
    const textWrapper1 = document.querySelector('.ml1');
    textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    //Slogan Text
    const textWrapper2 = document.querySelector('.ml2 .letters');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    animation.current = anime.timeline({loop: false})
      .add({
        targets: '.ml1 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 70*i,
        complete: deleteSpanml1
      })

    animation.current = anime.timeline({loop: false})
      .add({
        targets: '.ml2 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i,
        complete: deleteSpanml2
      })
  }, []);

  return (
    <div>
      <section class="anchor" id="header"></section>
      <div class="header">
          <div class="overlay-header">
              <div class="title-wrapper">
                  <h1 class="ml1">Hello, I'm Jenny Yu</h1>
                  <h2 class="ml2">
                      <span class="text-wrapper">
                          <span class="letters">
                              Computer Science Student @ UofT
                          </span>
                      </span>
                  </h2>
              </div>

              <div></div>
              <div class="bounce">
                  <a class="fa" onClick={goToAbout}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                  </a>
              </div>
          </div>
      </div>

      <section class="anchor" id="about"></section>
      <div class="about-container">
        <div class="section-title" data-aos="fade-right">
          <h1>About Me</h1>
          <div class="underline"></div>
        </div>
        <div class="portrait">
          <div class="portrait-container"></div>
        </div>
        <div class="about-me-container">
          <Grid container spacing={smBreakPoint ? 0 : 3 } className={classes.aboutRow}>
            {
              about.map(section => (
                <Grid item sm={4}>
                  <Card className={classes.aboutCard} square={true} data-aos="fade-up">
                    <Typography variant="h5" style={{ color: '#66fcf1', textAlign: 'center' }}>
                      { section.title }
                    </Typography>
                    <div className="list-container">
                      <ul>
                        {
                          section.points.map(point => (
                            <li>
                              <Typography variant="body1">
                                {point}
                              </Typography>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;