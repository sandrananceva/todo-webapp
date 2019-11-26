import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectFilter = (props) => {
  const classes = useStyles();
  const none ='none';
  const done='done';
  const notDone='notdone';


  const inputLabel = React.useRef(null);
  

  return (
    <div>
     
      <FormControl className={classes.formControl}  >
        <InputLabel ref={inputLabel} id="demo-simple-select-label">View by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          onChange={props.handleFilterChange}
        >
          <MenuItem value={none}>
            <em>Default</em>
          </MenuItem>
          <MenuItem value={done}>Done</MenuItem>
          <MenuItem value={notDone}>Not Done</MenuItem>

        </Select>
      </FormControl>

    </div>
  );
}
