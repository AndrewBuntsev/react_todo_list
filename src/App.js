import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
//import uuid from 'uuid';
import About from './components/pages/About';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount(){
    /*Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => {
        console.table(res.data)
        this.setState({todos: res.data});
      });*/

      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => this.setState({todos: data}));
  }

  markComplete = (id) => {
    console.log('From App.js');
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    /*Axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
      .then(res => this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      }))*/
      fetch('https://jsonplaceholder.typicode.com/todos/' + id,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      }));
  }

  addTodo = (title) => {
    /*Axios.post('https://jsonplaceholder.typicode.com/todos', 
      {title: title, completed: false})
      .then(res => {this.setState({
        todos: [...this.state.todos, res.data]
      });
    console.log(res.data)});*/

      fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, completed: false})
      })
      .then(res => res.json())
      .then(data => this.setState({
        todos: [...this.state.todos, data]
      }));
    
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
        <Header></Header>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}></AddTodo>
            <Todos todos = {this.state.todos} markComplete = {this.markComplete} 
              delTodo = {this.delTodo}></Todos>
          </React.Fragment>
        )}/>
        
        <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
