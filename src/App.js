import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { FixedContainer } from './components/FixedContainer'
import { AddPopup } from './components/AddPopup'
import { addItem, generateId } from './components/TodoHelper'
import EditPopup from './components/EditPopup'

class App extends React.Component {

  state = {
    todos: [
      { id: 1, name: 'Task 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem  , and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isComplete: false },
      { id: 2, name: 'Task 2', description: '', isComplete: true },
      { id: 3, name: 'Task 3', description: '', isComplete: true }
    ],
    currentTodo: '',
    currentDsrp: '',
    showPopup: false,
    showEditPopup: false,
    todoToBeEdited: {},
    todoView: {},
    filterBy: 'none',
    showView: false
    
  }
  togglePopup = (evt) => {
    evt.preventDefault()
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
 
  handleInput = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }
  handleTextInput = (evt) => {
    this.setState({
      currentDsrp: evt.target.value
    })
  }
  handleSubmin = (evt) => {
    evt.preventDefault();
    if (this.state.currentTodo !== '') {
      const newId = generateId();
      const newItems = { id: newId, name: this.state.currentTodo, description: this.state.currentDsrp, isComplete: false }
      const newArray = addItem(this.state.todos, newItems)
      this.setState({
        todos: newArray,
        currentTodo: '',
        errorMessage: '',
        currentDsrp: ''
      })
    }
  }
  handleFilterChange = (event) => {
    event.preventDefault();
    this.setState({ filterBy: event.target.value });
  }
  toggleView = (index) => {
    const todo = this.state.todos.find(todo => todo.id === index);
    this.setState({
      todoView: todo,
      todoToBeEdited: todo,
      showView: true
     
    })
   
  }
  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
    });
  }
  toggleEditPopup = (index) => {
    this.setState({
      showEditPopup: !this.state.showEditPopup,
      todos: this.state.todos.map(todo => todo.id === index ? this.state.todoToBeEdited : todo),
      todoView: this.state.todoToBeEdited,
    })
  }
 
    handleDelete = (index, evt) => {
      evt.preventDefault();
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== index),
        todoView: {},
        showView: false
        
      })
    }
  

  setNameUpdate = (newName, key) => {
    this.setState({
      todoToBeEdited: {
        ...this.state.todoToBeEdited,
        name: newName
      }
    })
  }
  setDescriptionUpdate = (newDescription, key) => {
    this.setState({
      todoToBeEdited: {
        ...this.state.todoToBeEdited,
        description: newDescription
      }
    })
  }



  render() {
    return (
      <div className="App">
        <Header togglePopup={this.togglePopup} />
        <AddPopup showPopup={this.state.showPopup}
          togglePopup={this.togglePopup}
          handleInput={this.handleInput}
          currentTodo={this.state.currentTodo}
          handleTextInput={this.handleTextInput}
          currentDsrp={this.state.currentDsrp}
          handleSubmin={this.handleSubmin} />
        <FixedContainer handleFilterChange={this.handleFilterChange}
          filterBy={this.state.filterBy}
          todos={this.state.todos}
          toggleView={this.toggleView}
          todoView={this.state.todoView}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
          toggleEditPopup={this.toggleEditPopup}
          showView={this.state.showView}
        />

        <EditPopup
          todoToBeEdited={this.state.todoToBeEdited}
          showEditPopup={this.state.showEditPopup}
          setNameUpdate={this.setNameUpdate}
          setDescriptionUpdate={this.setDescriptionUpdate}
          closePopup={this.toggleEditPopup} />

      </div>
    );
  }

}

export default App;
