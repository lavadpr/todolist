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

        const mystyle = {
            color: "black",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "right",
          };

        const {todo:{done}} = this.props;
        return (
            <div className="row">
                 <div className="column">
                <span className = "span-inner">
                <span onClick={onText} className={done ? "mark-done" : ""}> {this.props.todo.text}</span>
                </span>
                 </div>
                 <div className= "column2">
                <span onClick={onX} >X</span>
                 </div>
            </div>
        );
    }
}

export default TodoItem;