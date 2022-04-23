import React, {useEffect} from "react";
import {v4 as uuidv4} from 'uuid';

const Form = ({Input,setInput,todos,settodos, edittoto, setEdittodo}) =>{

    const updateTodo = (title, id, completed)=>{
        const newtodo = todos.map((todo)=>{
            if(todo.id === id)
            {
                return {title, id, completed}
            }
            else{
                return todo;
            }
        });
        settodos(newtodo);
        setEdittodo("");
    };

    useEffect(()=>{
        if(edittoto)
        {
            setInput(edittoto.title);
        }
        else{
            setInput("")
        }
    },[setInput,edittoto]);

    const onInputChange = (event) =>{
        setInput(event.target.value);
    }

    const onSubmitHandle = (event) =>{
        event.preventDefault();
        if(!edittoto)
        {
            settodos([...todos,{id:uuidv4(),title:Input,completed:false}]);
            setInput("");
        }
        else{
            updateTodo(Input, edittoto.id, edittoto.completed)
        }
    }

    return (
        <form className="from-container" onSubmit={onSubmitHandle}>
            <input type="text" placeholder="Enter a Note..." value={Input} required onChange={onInputChange}/>
            <button type="submit">{edittoto?"OK":"ADD"}</button>
        </form>
       
    )
}

export default Form;