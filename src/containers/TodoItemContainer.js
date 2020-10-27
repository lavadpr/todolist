import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { changeDone } from '../actions';

const mapDispatchToProps = dispatch => ({
  changeDone: (id) => { dispatch(changeDone(id)) }
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;