import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SelectFilter } from './SelectFilter'
import { TodoList } from './TodoList'
import { ViewTodo } from './ViewTodo'


export const FixedContainer = (props) => {
   
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" style={{ backgroundColor: '#fffff1', height: '89vh' }}>


                <Grid container spacing={1} >
                    <Grid item xs={4} style={{  height: '89vh' }}>
                        <Paper  style={{ height: '76vh', marginTop:'15px'  }} align="right" >
                       
                        <SelectFilter handleFilterChange={props.handleFilterChange}  />
                        
                        
                            <TodoList filterBy={props.filterBy}
                                todos={props.todos}
                                toggleView={props.toggleView} 
                                handleDelete={props.handleDelete}
                                
                                />
                        </Paper>
                    </Grid>
                    <Grid item xs={8} style={{ backgroundColor: '#fffff1'}}  >
                        <ViewTodo id={props.todoView.id}
                            name={props.todoView.name}
                            description={props.todoView.description}
                            isComplete={props.todoView.isComplete}
                            handleComplete={props.handleComplete.bind(this, props.todoView.id)}
                            toggleEditPopup={props.toggleEditPopup}
                            showView={props.showView}
                            
                        />
                    </Grid>

                </Grid>

            </Container>
        </React.Fragment>
    );
}
