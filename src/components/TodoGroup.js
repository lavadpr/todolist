import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoGroup extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <TodoItem todo={todo} />
    ));
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoGroup;