import './App.css';
import TodoGeneratorContainer from './containers/TodoGeneratorContainer';
import TodoGroupContainer from './containers/TodoGroupContainer';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { PlusSquareOutlined , CheckSquareOutlined } from '@ant-design/icons';

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <Menu mode="horizontal">
            <Menu.Item icon={<PlusSquareOutlined />}><Link to="/">add todo</Link></Menu.Item>
            <Menu.Item icon ={<CheckSquareOutlined />}><Link to="/done">go to done list</Link></Menu.Item>
            <Menu.Item icon ={<CheckSquareOutlined />}><Link to="/todos">go to list</Link></Menu.Item>
          </Menu >
          <Switch>
            <Route exact path="/" component={TodoGeneratorContainer}></Route>
            <Route path="/todos" component={TodoGroupContainer}></Route>
            <Route path="/done" component={DoneListContainer}></Route>
          </Switch>
        </BrowserRouter>
        {/* <TodoList/> */}
      </header>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null, mapDispatchToProps)(App);
