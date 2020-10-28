import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroupContainer from '../containers/TodoGroupContainer';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoGroupContainer/>
        <TodoGeneratorContainer/>
      </div>
    );
  }
}

export default TodoList;