import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };

  currentId = 3;

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((item) => item.id !== id);

    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = this.currentId++;

    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
