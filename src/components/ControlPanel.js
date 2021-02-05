import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  container: {
    width: '100%',
  }
}));

export default function ControlPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.container}/>
    </div>
  );
}