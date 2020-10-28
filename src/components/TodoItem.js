import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const onText = () => {
            this.props.changeDone(this.props.todo.id);
        }
        const onX = () => {
            this.props.deleteItem(this.props.todo.id);
        }
        const {todo:{done}} = this.props;
        return (
            <div>
                <span onClick={onText} className={done ? "mark-done" : ""}> {this.props.todo.text}</span>
                {/*<span onClick={onText} className={done ? "mark-done" : ""} style={{'textDecoration' : done  ? "line-through" : ""}}> {this.props.todo.text}</span>*/}
                <span onClick={onX}> X</span>
            </div>
        );
    }
}

export default TodoItem;