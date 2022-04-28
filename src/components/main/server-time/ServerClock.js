import Clock from 'react-live-clock';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  timeServer: {
    alignItems: 'flex-start'
  }
});

export default function ServerClock({ time }) {
  const classes = useStyles();
  return (
    <div>
      {time ? <Clock className={classes.timeServer} format={'HH:mm:ss'} ticking={true} date={time} /> : <div />}
    </div>
  );
}
