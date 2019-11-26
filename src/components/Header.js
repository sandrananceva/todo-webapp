import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(2),
      },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title1: {
    flexGrow: 0,
  },
}));

export const Header = (props) =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
             To-Do App
          </Typography>
          <Fab size="medium" color="secondary" aria-label="add" className={classes.margin} onClick={props.togglePopup}>
          <AddIcon />
          </Fab>
          <Typography variant="h6" className={classes.margin}>
            Add To-Do Item
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

