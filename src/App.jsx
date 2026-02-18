import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo.jsx'
import Modal from './components/Modal.jsx'
import Title from './components/Title.jsx'
function App() {
  return (
    <div>
      <h1/>My Todo List
      <div className="todo__wrapper">
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
      <Title/>
      <Modal/>
      </div>
  );
}

export default App;
