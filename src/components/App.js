import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';
import './App.css';

const App = ()=>(
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );

export default App;
