import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

class TodoGroup extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <TodoItemContainer key={todo.id} todo={todo} />
    ));
    return (
      <div className="App">
        {todos}
      </div>
    );
  }
}

export default TodoGroup;