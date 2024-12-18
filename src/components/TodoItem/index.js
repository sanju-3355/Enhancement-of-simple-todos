import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    // const {todoDetails} = this.props
    // const {updatedTitle} = this.state
    this.setState({editing: false})
    // Call a function to save updated title (not implemented in this code)
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <div className="text-btn-div">
            <input
              type="text"
              className="edit-input"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button
              className="save-edit-btn"
              onClick={this.handleSave}
              type="button"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="text-btn-div">
            <div className="input-label-div">
              <input
                type="checkbox"
                className="check-box"
                checked={todoDetails.completed}
                onChange={() => toggleComplete(todoDetails.id)}
              />
              <p className="title">{todoDetails.title}</p>
            </div>
            <button
              onClick={this.handleEdit}
              type="button"
              className="save-edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem
