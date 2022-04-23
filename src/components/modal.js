import React from "react";

const Modal = ({settodos,todos,setModal,myid}) =>{
    
    const cancelHandle = ()=>{
        setModal(false);
    }

    const confirmHandle = (myid)=>{
        settodos(todos.filter((todo)=>todo.id!==myid));
        console.log(myid);
    }
    return (
        <div className="modal_Wrapper">
            <div className="modal_container">
                <h3>Are You Sure?</h3>
                <div className="modal_buttons">
                    <button onClick={()=>cancelHandle()}>Cancel</button>
                    <button onClick={()=>confirmHandle(myid)}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal