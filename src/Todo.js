import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
  }
  handleRemove = () => {
    this.props.remove(this.props.id);
  };
  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    //takenew task data and pass up to parent
    this.setState({ isEditing: false });
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleToggle = (evt) =>{
  	this.props.toggleCompletion(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="todo">
          <form className="todo-edit-form" onSubmit={this.handleUpdate}>
          	<label htmlFor="task">Edit the task</label>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todo">
        	<div className="todo-btns">
        		<button onClick={this.toggleForm}><i className="fas fa-pen"></i></button>
               <button onClick={this.handleRemove}><i className="fas fa-trash"></i></button>
        	</div>
          <ul>
          	<li className={this.props.completed ? 'todo-task completed': 'todo-task'} onClick={this.handleToggle}>{this.props.task}</li>
          </ul>
        </div>
      );
    }

    return result;
  }
}
