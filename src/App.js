import React, { Component } from 'react';
import './App.css';

const TodoItem = ({ text, onDelete }) => (
  <li>
    {text}
    <button onClick={onDelete}>Delete</button>
  </li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  }

  handleDelete(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    const { newTodo } = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} onDelete={() => this.handleDelete(i)} />
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <button type="submit" className="save-button">
            SAVE
          </button>
        </form>
        <div className="todo-content">
          <ol>{todos}</ol>
        </div>
      </div>
    );
  }
}

export default App;
