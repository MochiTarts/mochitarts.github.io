import React from "react";
import { Grid, Button, Card, CardActionArea, CardMedia, CardContent, CardActions } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from "../common";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import projectsInfo from './projectsInfo.json';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        maxWidth: 1100,
        width: '100%',
        '& img': {
            margin: 'auto',
            display: 'block',
            width: '100%',
            height: 'auto'
        },
        '& #tech': {
            color: '#45a29e', fontSize: '0.75rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
            marginBottom: 5,
        },
        '& .MuiCardContent-root': {
            paddingBottom: 5,
        },
        '& .MuiCard-root': {
            //boxShadow: '0px 3px 3px -2px rgb(197 198 199 / 20%), 0px 3px 4px 0px rgb(197 198 199 / 14%), 0px 1px 8px 0px rgb(197 198 199 / 12%)',
            height: '100%'
        }
    },
}));

const Projects = () => {
    const classes = useStyles();
    const projects = projectsInfo;

    return (
        <div>
            <section class="anchor" id="projects"></section>
            <div class="projects-container">
                <div class="section-title" data-aos="fade-right">
                    <h1>Projects</h1>
                    <div class="underline"></div>
                </div>
                <div class="projects-summary-container">
                    <Grid container spacing={1} className={classes.root} alignItems="stretch">
                        {
                            projects.map((project) => (
                                <Grid item xs={12} sm={6} md={4} style={{ margin: '0 auto' }}>
                                    <Card square={true} style={{ background: 'none' }} data-aos="fade-up" elevation={0}>
                                        <div>
                                            <div>
                                                <img src={project.image} />
                                            </div>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" style={{color: '#66fcf1', textAlign: 'center'}}>
                                                    {project.title}
                                                </Typography>
                                                <Divider style={{ background: '#c5c6c7', marginBottom: 10 }} />
                                                <div id="tech">{project.tech}</div>
                                                <Typography variant="body2" style={{color: '#c5c6c7'}}>
                                                    {project.desc}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <CardActions>
                                            {project.github &&
                                                <a href={project.github} target="_blank">
                                                    <FontAwesomeIcon icon={faGithub} className="icons" />
                                                </a>
                                            }
                                            {project.github2 &&
                                                <a href={project.github2} target="_blank">
                                                    <FontAwesomeIcon icon={faGithub} className="icons" />
                                                </a>
                                            }
                                            {project.github3 &&
                                                <a href={project.github3} target="_blank">
                                                    <FontAwesomeIcon icon={faGithub} className="icons" />
                                                </a>
                                            }
                                            {project.link &&
                                                <a href={project.link} target="_blank">
                                                    <FontAwesomeIcon icon={faExternalLink} className="icons" />
                                                </a>
                                            }
                                        </CardActions>
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

export default Projects;