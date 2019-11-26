import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 300,
  },
}));

export const AddPopup = (props) => {
  const classes = useStyles();



  return (
    <div>

      <Dialog open={props.showPopup} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add To-Do</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            label="Name Task"
            type="input"
            onChange={props.handleInput}
            value={props.currentTodo}
            className={classes.textField}
            // fullWidth 

            />
         
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            value={props.currentDsrp}
            onChange={props.handleTextInput}
            className={classes.textField}
            margin="normal"
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.togglePopup} color="primary">
            Close
          </Button>
          <Button onClick={props.handleSubmin} color="primary">
            Add ToDo Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
