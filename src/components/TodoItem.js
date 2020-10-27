import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const onClick = () => {
            this.props.changeDone(this.props.todo.id);
        }
        return (
            <div>
                <span onClick={onClick} STYLE={this.props.todo.done ? "text-decoration:line-through" : ""} title={this.props.todo.done ? "Complete" : "Do this"}>
                    {this.props.todo.text}
                </span>
                <span>
                     X
                </span>
            </div>
        );
    }
}

export default TodoItem;