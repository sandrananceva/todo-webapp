import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



export const TodoList = (props) => {
  const classes = useStyles();
 
 
  console.log(props.filterBy);
  let showDoneTodos;
  if (props.filterBy === 'done') {
    showDoneTodos = true;
  } else if (props.filterBy === 'notdone') {
    showDoneTodos = false;
  }
  return (
    <div className={classes.root}>

      <Typography variant="h5" align="left" style={{ marginTop: '-35px', marginLeft: '30px' }}>
        To-Do List
          </Typography>

      <div className={classes.demo}>
        <List style={{ overflow: 'scroll', height: '78vh', widht: '40vw' }}>
          {props.filterBy === 'none' && props.todos.map((todo, index) =>
            <ListItem key={todo.id}  divider button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.isComplete}
                  tabIndex={-1}
                  disableRipple

                />
              </ListItemIcon>
              <ListItemText
                primary={todo.name}
                onClick={props.toggleView.bind(this, todo.id)}
              />
              <IconButton edge="end" aria-label="delete" onClick={props.handleDelete.bind(this, todo.id)}>
                <DeleteIcon />
              </IconButton>

            </ListItem>

          )}
          {props.filterBy !== 'none' && props.todos.filter(todo => todo.isComplete === showDoneTodos).map((todo, index) =>
            <ListItem key={todo.id}  divider button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.isComplete}
                  tabIndex={-1}
                  disableRipple

                />
              </ListItemIcon>
              <ListItemText
                primary={todo.name}
                onClick={props.toggleView.bind(this, todo.id)}
              />
              <IconButton edge="end" aria-label="delete" onClick={props.handleDelete.bind(this, todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>

          )}
        </List>

      </div>

    </div>
  );
}
