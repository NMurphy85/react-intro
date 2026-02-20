import logo from "./logo.svg";
import "./App.css";

import Todo from "./components/Todo.jsx";
import Modal from "./components/Modal.jsx";
import Title from "./components/Title.jsx";
function App() {
  return (
    <div>
      <h1 />
      My Todo List
      <div className="todo__wrapper">
        <Todo name="finish frontend"
              para="complete all the tasks"/>
        <Todo name="get a 100k job"
              para="make more munnyyy"/>
        <Todo name="Take over the world!!!"
              para="victory is mine!!!"/>
      </div>
      <Title />
      <Modal ModalName="Be sure!" />
    </div>
  );
}

export default App;
