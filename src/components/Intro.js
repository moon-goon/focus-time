import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      paddingTop: theme.spacing(1)
    },
    introSection: {
      margin: theme.spacing(3, 2),
    },
  }));

export default function Intro() {
const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.introSection}>
                <Typography color="textSecondary" variant="body2">
                    <strong>Focus Time</strong><br/>
                    A minimalist time tracking app that uses local storage in the browser, start typing your <b>Task</b> name and <b>Note(optional)</b> to begin. <br/>
                </Typography>
            </div>
            <Divider variant="middle" />
        </div>
    );
}