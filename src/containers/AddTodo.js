import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

let AddTodo = ({submitTodo}) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node=>input=node}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>);
};
const mapDispatchToProps = dispatch => ({
  submitTodo: text => dispatch(addTodo(text))
});

AddTodo = connect(null, mapDispatchToProps)(AddTodo);
export default AddTodo;
