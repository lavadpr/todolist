import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../apis/todos'
import { Input, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './todoGenerator.css';

const { Sider, Content } = Layout;

class TodoGenerator extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        addTodo(event.target.todoInput.value).then(() => {
            const id = uuidv4();
            const text = event.target.todoInput.value;
            const todo = { id, text, done: false };
            this.props.addTodo(todo);
            event.target.todoInput.value = "";
        })
    }


    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <Layout>
                        <Sider><input className="button-box" type="submit" value="Add Item" id="todoSubmit" /></Sider>
                        <Content><Input prefix={<UserOutlined />} type="text" name="todoInput" id="todoInput" /></Content>
                    </Layout>

                </form>
            </div>
        );
    }
}

export default TodoGenerator;