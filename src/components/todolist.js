import React from "react";



const Todolist = ({todos, settodos, edittodo, setEdittodo})=>{

    

    const handleComplete = (todo) =>
    {
        settodos(todos.map((item)=>{
            if(todo.id===item.id)
            {
                return {...item, completed:!item.completed}
            }
            return item;
        }))
    }

    const handleEdit = ({id}) =>{
       const findTodos = todos.find((todo) => todo.id===id);
       setEdittodo(findTodos);
    }
    
    const handleDelete = ({id}) =>
    {
       
        settodos(todos.filter((todo)=>todo.id!==id));
    }
    const t=todos.reverse()
    return (
        <div className="list">
           {t.map((todo)=>( 
               <li key={todo.id}>
                   <input
                    type="text"
                    value={todo.title}
                    onChange={(event)=>event.preventDefault()}
                    className={`list ${todo.completed ? "completed" : "" }`}
                   />
                   <div className="buttons">
                       <button onClick={ () => handleComplete(todo)}><i class="fa-solid fa-circle-check fa-2x"></i></button>
                       <button onClick={()=>handleEdit(todo)}><i class="fa-solid fa-square-pen fa-2x"></i></button>
                       <button onClick={()=>handleDelete(todo)}><i class="fa-solid fa-trash-can fa-2x"></i></button>
                   </div>
               </li>
           ))}
          
            
           
        </div>
    )
}

export default Todolist