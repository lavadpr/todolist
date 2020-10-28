import './App.css';
import TodoGeneratorContainer from './containers/TodoGeneratorContainer';
import TodoGroupContainer from './containers/TodoGroupContainer';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { getTodos } from './apis/todos';
import { connect } from 'react-redux';
import { initTodos } from './actions';
import React from 'react';
import { PlusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import NotFound from './components/NotFound';

class App extends React.Component {
  componentDidMount() {
    getTodos().then(response => {
      this.props.initTodos(response.data);
    })
  }

  const 

  render() {
    return (
      <div className="bodybackground">
        <header className="App-header">
        <span>To-do List</span>
        </header>
        <BrowserRouter>
          <Menu mode="horizontal">
            <Menu.Item icon={<PlusSquareOutlined />}><Link to="/">Add Task</Link></Menu.Item>
            <Menu.Item icon={<CheckSquareOutlined />}><Link to="/done">Finished Task</Link></Menu.Item>
            <Menu.Item icon={<CheckSquareOutlined />}><Link to="/todos">List of Task</Link></Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/" component={TodoGeneratorContainer}></Route>
            <Route exact path="/todos" component={TodoGroupContainer}></Route>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
        <br/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null, mapDispatchToProps)(App);
