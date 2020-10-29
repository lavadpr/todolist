import React, { Component } from 'react';
import './TodoItem.css';
import { deleteTodo, updateTodo } from '../apis/todos';
import { CloseCircleTwoTone } from '@ant-design/icons';

class TodoItem extends Component {
    render() {
        const onText = () => {
            //extract the id
            updateTodo(this.props.todo.id, this.props.todo.done).then(() => {
                this.props.changeDone(this.props.todo.id);
            })
        }
        const onDelete = () => {
            //extract the id
            deleteTodo(this.props.todo.id).then(() => {
                this.props.deleteItem(this.props.todo.id);
            })
        }

        const { todo: { done } } = this.props;
        return (
            <div className="row">
                <div className="column">
                    <span className="span-inner">
                        {/* extract the text */}
                        <span onClick={onText} className={done ? "mark-done" : ""}> {this.props.todo.text}</span>
                    </span>
                </div>
                <div className="column2">
                    <span className="icon-hover" onClick={onDelete} ><CloseCircleTwoTone /></span>
                </div>
            </div>
        );
    }
}

export default TodoItem;