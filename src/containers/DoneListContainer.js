import { connect } from 'react-redux';
import TodoGroup from '../components/TodoGroup';

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => todo.done)
});

const DoneListContainer = connect(mapStateToProps)(TodoGroup);

export default DoneListContainer;