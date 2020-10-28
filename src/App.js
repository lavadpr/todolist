import './App.css';
import TodoGeneratorContainer from './containers/TodoGeneratorContainer';
import TodoGroupContainer from './containers/TodoGroupContainer';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { getTodos } from './apis/todos';
import { connect } from 'react-redux';
import { initTodos } from './actions';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    getTodos().then(response => {
      this.props.initTodos(response.data);
    })
  }


  render() {
    return (
      <div>
        <header>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">add todo</Link>
              </li>
              <li>
                <Link to="/todos">go to list</Link>
              </li>
              <li>
                <Link to="/done">go to done list</Link>
              </li>
            </ul>
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
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null, mapDispatchToProps)(App);
