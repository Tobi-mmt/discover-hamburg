import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '../src/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({ title, backLink }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {backLink && <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>}
          <Typography variant="h6" className={classes.title} align="center">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar