import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  inputContainer: {
    display: 'flex',
  },
  container: {
    width: '100%',
  },
  timer: {
    fontSize: '36px'
  },
  inputEl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  startButton: {
    width: '45px'
  }
}));

export default function Timer() {
  const classes = useStyles();

  const [isTicking, setIsTicking] = useState(false)
  const [timeSec, setTimeSec] = useState(0)
  const [timeMin, setTimeMin] = useState(0)
  const defaultTaskValues = {
    taskName: '',
    taskNote: '',
  };
  const [ taskValues, setTaskValues] = useState(defaultTaskValues);

  const formatTime = (val) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  const handleStart = () => {
    setIsTicking(!isTicking)
  };

  const handleStop = () => {
    setIsTicking(false)
  }

  const reset = () => {
    setTimeSec(0)
    setTimeMin(0)
    setIsTicking(false)
    setTaskValues({ taskName: '', taskNote: '' });
  }

  const handleSave = () => {

    let duration = `${formatTime(timeMin)}:${formatTime(timeSec)}`;

    let createdAt = moment().format( "LLL" )

    const newEntry = {
      task: taskValues.taskName,
      note: taskValues.taskNote,
      duration: duration,
      createdAt, createdAt
    }

    const entries = []
    if (localStorage.getItem('entries') !== null) {
      let entriesSoFar = JSON.parse(localStorage.getItem('entries'));
      entries.push(entriesSoFar);
    }
    entries.push(newEntry);
    localStorage.setItem('entries',JSON.stringify(entries));

    reset();
  }

  const onChangeHandler = (e) => {

    const { name, value } = e.target;

    setTaskValues({
      ...taskValues,
      [name]: value,
    });
    
  }

  useEffect(() => {

    if (isTicking) {
      const interval = setInterval(() => {
        setTimeSec(timeSec + 1)
        if (timeSec >= 60) {
          setTimeSec(0)
          setTimeMin(timeMin + 1)
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    
  }, [isTicking, timeSec, timeMin]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          <Grid item xs className={classes.inputContainer}>
            <span className={classes.inputEl}>
              <TextField id="task" label="Task" name="taskName" onChange={onChangeHandler} value={taskValues.taskName} />
            </span>
            <span className={classes.inputEl}>
              <TextField id="note" label="Note" name="taskNote" onChange={onChangeHandler} value={taskValues.taskNote} />
            </span>
          </Grid>
          <Grid item xs={6}>

            <span>
              <div className={classes.timer}>
                <span>{formatTime(timeMin)} : {formatTime(timeSec)}</span>
              </div>
            </span>

          </Grid>
          <Grid item xs className={classes.inputContainer}>
            <Button className={classes.startButton} onClick={handleStart} variant="outlined" color={isTicking ? 'secondary' : 'primary'}>
              {isTicking ? 'Stop': 'Start'}
            </Button>
            <Button onClick={reset} size="small" variant="filled" color="primary">
              Reset
            </Button>
            <IconButton color="primary" onClick={handleSave} aria-label="Save" component="span" disabled={timeSec > 0 && isTicking == false ? false:true}>
              <SaveIcon />
            </IconButton>
          </Grid>
      </Grid>
    </div>
  );
}
