import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import skillsInfo from './skillsInfo.json';
import './Skills.css';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        maxWidth: 1100,
        '& h2': {
            color: '#66fcf1',
        },
        '& span': {
            display: 'inline-flex',
            background: '#c5c6c7',
            borderRadius: 10,
            padding: 8,
            color: '#0b0c10',
            marginBottom: 10,
        },
        '& span:not(:last-child)': {
            marginRight: 5,
        }
    },
}));

const Skills = () => {
    const classes = useStyles();
    const skills = skillsInfo;

    return (
        <div>
            <section class="anchor" id="skills"></section>
            <div class="skills-container">
                <div class="section-title" data-aos="fade-right">
                    <h1>Skills</h1>
                    <div class="underline"></div>
                </div>
                <div class="skills-summary-container">
                    <Grid container spacing={3} className={classes.root}>
                        {
                            skills.map((section) => (
                                <Grid item xs={12}>
                                    <Typography variant="h5" style={{ color: '#66fcf1', marginBottom: '5px' }}>
                                        { section.title }
                                    </Typography>
                                    {
                                        section.data.map((point) => (
                                            <span>{point.name}</span>
                                        ))
                                    }
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Skills;