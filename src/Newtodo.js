import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

const NewTodo = () => {
    const [todo, setTodo] = useState("");
    function data (){
        var d =  todo.innerText;
    }
    return(
        <>
        <h1>Enter NEW TODO </h1>
        <input type="text"  value={todo}  onChange={(ev) => setTodo(ev.target.value)}
         />
         <button onClick={data}> Submit </button>
    </>
    )
}

export default NewTodo;