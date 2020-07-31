import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      todos: [
          {
              id:1,
              content: 'Water plants',
              priority: 'Urgent!!!'
          },
          {
              id:2,
              content: 'Make Tea',
              priority: 'Not super urgent'
          },
          {
              id:3,
              content: 'Watch Youtube',
              priority: 'Whenever'
          }
      ]
    }
  }

  addTodo = (data)=> {
    var newTodo = {
      id: Date.now(),
      ...data
    }

    var newList = [newTodo, ...this.state.todos]
    this.setState({
      todos: newList
    })
  }
  removeTodo = ()=> {

  }
  updateTodo = ()=> {

  }

  render(){
    return(

      <div className="wrap">
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((item)=>{
                var todoProps = {
                  key: item.id,
                  content: item.content,
                  priority: item.priority
                }

                return(
                  <Todo {...todoProps}/>
                )
              })
            }
            <NewTodoForm addTodo={this.addTodo}/>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
