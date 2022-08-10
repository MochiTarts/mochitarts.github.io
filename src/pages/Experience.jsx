import React from 'react';
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from "../common";
import experienceInfo from './experienceInfo.json';
import './Experience.css';

const goToResume = () => {
    window.open('https://drive.google.com/file/d/1GLzdAAJKPTnYJF0xThWUF2F4cHuxvOK1/view?usp=sharing', '_blank');
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        maxWidth: 1100,
        '& #education': {
            ['@media (max-width: 900px)']: {
                marginLeft: '25px',
                marginRight: '25px',
            },
        },
        '& #experience-title': {
            ['@media (max-width: 900px)']: {
                marginLeft: '25px',
                marginRight: '25px',
            },
        },
        '& .MuiDivider-root': {
            marginBottom: 10,
        },
        '& .MuiPaper-root': {
            background: 'transparent',
            padding: '6px 16px',
        },
        '& .MuiTimelineOppositeContent-root': {
            ['@media (max-width:900px)']: {
                flex: 0.1
            }, 
        },
        ['@media (max-width:550px)']: {
            '& .MuiTypography-body1': {
                fontSize: '14px',
            }
        }
    },
}));

const Experience = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width: 900px)');
    const experiences = experienceInfo;

    return (
        <div>
            <section class="anchor" id="experience"></section>
            <div class="experience-container">
                <div class="section-title" data-aos="fade-right">
                    <h1>Experience</h1>
                    <div class="underline"></div>
                </div>
                <div class="experience-summary-container">
                    <Grid className={classes.root}>
                        <div id="education" style={{ marginBottom: '25px' }}>
                            <Typography variant="h5" style={{ color: '#66fcf1', marginBottom: '5px' }}>
                                Education
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: '#45a29e' }}>
                                University of Toronto
                            </Typography>
                            <Typography variant="overline">
                                Sept 2018 - Apr 2023
                            </Typography>
                            <Divider style={{ background: '#c5c6c7', width: '150px' }} />
                            <Typography variant="body1">Honours Bachelor of Science</Typography>
                            <Typography variant="body1">Computer Science Specialist (Co-op) — Software Engineering Stream, 4th Year</Typography>
                            <Typography variant="body1">CGPA: 3.50 / 4.0 — Dean's List</Typography>
                        </div>
                        <div id="experience-title">
                            <Typography variant="h5" style={{ color: '#66fcf1', marginBottom: '5px' }}>
                                Experiences
                            </Typography>
                            <Button variant="contained" type="submit" onClick={goToResume}>Resume</Button>
                        </div>
                        <Timeline align={ matches ? 'left' : 'alternate' }>
                            {
                                experiences.map((job) => (
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" style={{ color: '#66fcf1' }}>
                                                { job.date }
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot style={{ padding: 10 }}></TimelineDot>
                                            <TimelineConnector style={{ background: '#c5c6c7' }} />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={0}>
                                                <div style={{ textAlign: 'center' }}>
                                                    <Typography variant="h6" component="h1" style={{ color: '#66fcf1' }}>
                                                        { job.title }
                                                    </Typography>
                                                    <Typography variant="overline" style={{ color: '#45a29e' }}>
                                                        { job.company }
                                                    </Typography>
                                                </div>
                                                <Divider style={{ background: '#c5c6c7' }} />
                                                <div style={{ textAlign: 'left' }}>
                                                    <Typography variant="body1" style={{ color: '#c5c6c7' }}>
                                                        { job.desc }
                                                    </Typography>
                                                </div>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }
                        </Timeline>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Experience;