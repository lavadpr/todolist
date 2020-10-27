import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.todo.text} X
                </span>
            </div>
        );
    }
}

export default TodoItem;