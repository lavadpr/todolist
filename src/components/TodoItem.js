import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const onText = () => {
            this.props.changeDone(this.props.todo.id);
        }
        const onX = () => {
            this.props.deleteItem(this.props.todo.id);
        }
        return (
            <div>
                <span onClick={onText} STYLE={this.props.todo.done ? "text-decoration:line-through" : ""}>{this.props.todo.text}</span>
                <span onClick={onX}> X</span>
            </div>
        );
    }
}

export default TodoItem;