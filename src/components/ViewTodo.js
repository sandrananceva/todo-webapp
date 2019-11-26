import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';


import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export const ViewTodo = (props) => {
    const classes = useStyles();
    const message = props.description;
    return (
        <div className={classes.root} >

            <Paper className={classes.paper} style={{ marginTop: '15px', height: '85vh', backgroundColor: '#eaebf9' }}>
                {props.showView ?
                    <Grid container spacing={2} style={{ overflow: "hidden" }}>



                        <Grid item zeroMinWidth sm style={{ textOverflow: "ellipsis" }}>
                            <Typography variant="h4" style={{ paddingLeft: '20px', paddingTop: '10px' }} gutterBottom noWrap align="left" >{props.name}</Typography>
                            <Typography variant="subtitle2" align="left" gutterBottom style={{ paddingLeft: '20px' }}>{message}</Typography>

                        </Grid>
                        <Grid item zeroMinWidth sm>
                            <div style={{ display: 'inline-block' ,position:'apsolute'}}>
                                <Checkbox
                                    onClick={props.handleComplete.bind(this, props.id)}
                                    value="checkedB"
                                    color="primary"
                                    inputProps={{
                                        'aria-label': 'secondary checkbox',
                                    }}
                                    style={{ display: 'inline', float: 'left', marginLeft: 270 }}

                                />
                                <Typography variant="h6" align="right" style={{ display: 'inline', float: 'right' ,marginTop: 5, position:'apsolute'}} >Mark as Done</Typography>
                            </div>

                            <Fab color="primary" aria-label="edit" style={{ display: 'block', marginTop: 460, marginLeft: 330 }} >
                                <EditIcon onClick={props.toggleEditPopup.bind(this, props.id)} />
                            </Fab>

                        </Grid>






                    </Grid> : <Typography variant="h4" style={{color:'#bebebe'}}>View To-Do Item</Typography>}



            </Paper>





        </div >


    )
}

export default ViewTodo;