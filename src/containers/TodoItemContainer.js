import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { changeDone, deleteItem} from '../actions';

const mapDispatchToProps = dispatch => ({
  changeDone: (id) => { dispatch(changeDone(id)) },
  deleteItem: (id) => { dispatch(deleteItem(id)) }
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;