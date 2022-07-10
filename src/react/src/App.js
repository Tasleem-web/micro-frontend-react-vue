import React from 'react';
import './App.css';
import SubscribeForm from './app/components/SubscribeForm/SubscribeForm';
import Todo from "../src/app/components/Todo/Todo";
function App() {
  const todo = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
  ]
  return (
    <div className="App">
      {
        todo.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
      {/* <SubscribeForm /> */}
    </div>
  );
}

export default App;
