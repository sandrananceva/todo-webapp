import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


 class EditPopup extends React.Component{
   
   constructor(props){
       super(props);
       console.log(props);
       this.state={editedTodo: {}}
      
    }
   
   
  render() {
      console.log(this.props);
    return (
        <div>
    
          <Dialog open={this.props.showEditPopup} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit To-Do Task</DialogTitle>
            <DialogContent>
             
              <TextField
                autoFocus
                margin="dense"
                label="Name Task"
                type="input"
                onChange={(e) => {this.props.setNameUpdate(e.target.value, this.props.todoToBeEdited.id)}}
                value={this.props.todoToBeEdited.name}
                style={{width:300}}
                // fullWidth 
    
                />
             
              <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rowsMax="4"
                value={this.props.todoToBeEdited.description}
                onChange={(e) => {this.props.setDescriptionUpdate(e.target.value, this.props.todoToBeEdited.id)}}
                style={{width:300}}
                margin="normal"
                
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.props.closePopup(this.props.todoToBeEdited.id)} color="primary">
                Done
              </Button>
             
            </DialogActions>
          </Dialog>
        </div>
      )
  }
}


export default EditPopup;


