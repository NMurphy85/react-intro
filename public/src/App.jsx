import logo from "./logo.svg";
import "./App.css";

import Todo from "./components/Todo.jsx";
import Modal from "./components/Modal.jsx";
import Title from "./components/Title.jsx";
import Counter from "./components/Counter.jsx"
import React,  { useState } from 'react';
function App() {
const [showModal, setModal] = useState(false)

// 1. Create a "Counter.jsx" Component
// 2. Create a default 'count' of 0
// 3. Create a button to increment 'count' by 1
// 4. Create a button to decrement 'count' by 1
// 5.Import your counter in App.jsx and test it

function todoDelete(){
  setModal(true)
}


return (
    <div>
      <div>
      <input type="text" onChange={(event) =>{
        console.log(event.target.value)
      }}
      />
      <button onClick={() =>setModal(true)}>Add todo</button>
      </div>
      <h1 />
      My Todo List
      <div className="todo__wrapper">
        <Todo todoDelete={todoDelete} name="finish frontend"
              para="complete all the tasks"/>
        <Todo todoDelete={todoDelete} name="get a 100k job"
              para="make more munnyyy"/>
        <Todo todoDelete={todoDelete} name="Take over the world!!!"
              para="victory is mine!!!"/>
      </div>
      <Title />
    {showModal && <Modal Name="Be sure!" />}

    </div>
  );
}

export default App;
