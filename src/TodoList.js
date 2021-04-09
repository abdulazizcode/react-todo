import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  create = (newTodo,id) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id)
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = (id) =>{
    const updatedTodos = this.state.todos.map((todo) => { 
      if (todo.id === id) {
        return { ...todo,  completed:!todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    let listofTodos = this.state.todos.map((tasks) => {
      return (
        <Todo
          key={tasks.id}
          task={tasks.task}
          id={tasks.id}
          remove={this.remove}
          update={this.update}
          completed={tasks.completed}
          toggleCompletion={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="todos">
      	<h1>Todo List!<span>A Simple React Todo List App.</span></h1>
        <ul>
          <li>{listofTodos}</li>
        </ul>
        <NewTodoForm createnewTodo={this.create} />
      </div>
    );
  }
}
