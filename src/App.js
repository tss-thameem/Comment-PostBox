import React,{useState ,useEffect} from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Todolist from './components/Todolist.js';



const App=() => {
  // const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const[input,setInput] = useState('');
  const[todos,setTodos] = useState([]);// Use () inside initialState
  const[editTodo, setEditTodo] = useState(null);
  // useEffect(()=>{
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // },[todos]);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Form
              input ={input}
              setInput ={setInput}
              todos ={todos}
              setTodos ={setTodos}
              editTodo = {editTodo}
              setEditTodo = {setEditTodo}

              />
      </div>
      <div>
        <Todolist todos={todos}
                  setTodos ={setTodos}
                  setEditTodo ={setEditTodo}
                  />
      </div>
    </>
  );
};

export default App;
