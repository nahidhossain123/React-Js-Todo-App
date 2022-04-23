import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './components/header';
import From from './components/form';
import Todolist from './components/todolist';


const App = () =>{
  const initail_value = JSON.parse(localStorage.getItem('todos')) || []
  const [Input,setInput] = useState("");
  const [todos,settodos] = useState(initail_value);
  const [edittoto,setEdittodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  return (
    <div className='wrapper'>
        <div className='container'>
          <Header />
          <From Input={Input} setInput = {setInput} todos = {todos} settodos = {settodos} edittoto={edittoto} setEdittodo={setEdittodo} />
          <Todolist todos={todos} settodos={settodos} edittoto={edittoto} setEdittodo={setEdittodo}/>
        </div>
    </div>
  );
}

export default App;
