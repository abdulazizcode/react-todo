import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: ""
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createnewTodo({...this.state, id:Date.now().toLocaleString(), completed:false});
    this.setState({ task: ""});
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Add new Todo</label>
        <input
          type="text"
          name="task"
          id="todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
