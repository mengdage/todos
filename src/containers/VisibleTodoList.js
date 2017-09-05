import {connect } from 'react-redux';
import {VisibilityFilters, toggleTodo} from '../actions/action.js';
import { TodoList } from '../components/TodoList';


const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo=>!todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo=>todo.completed);
    default:
      return todos;
  }

};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
});

const VisibileTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibileTodoList;
