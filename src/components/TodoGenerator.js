import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../apis/todos'

class TodoGenerator extends Component {
    onSubmit = (event) => {
        var todoText = event.target.todoInput.value;
        event.preventDefault();
        addTodo(todoText).then(() => {
            const id = uuidv4();
            const text = todoText;
            const todo = { id, text, done: false };
            this.props.addTodo(todo);
            todoText = "";
        })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <span>
                        <input type="text" name="todoInput" id="todoInput" />
                        <input type="submit" value="Add Item" id="todoSubmit" />
                    </span>
                </form>
            </div>
        );
    }
}

export default TodoGenerator;