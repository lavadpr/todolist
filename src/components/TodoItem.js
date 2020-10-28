import React, { Component } from 'react';
import './TodoItem.css';
import { deleteTodo, updateTodo } from '../apis/todos';

class TodoItem extends Component {
    render() {
        const onText = (event) => {
            event.preventDefault()
            updateTodo(this.props.todo.id, this.props.todo.done).then(() => {
                this.props.changeDone(this.props.todo.id);
            })
        }
        const onX = () => {
            deleteTodo(this.props.todo.id).then(() => {
                this.props.deleteItem(this.props.todo.id);
            })
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