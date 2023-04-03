import React, {useState} from "react";
import {v4} from "uuid";


function App() {
  const [todo, setTodo] = useState("")
  const [data, setData] = useState([])

  function change(e) {
    setTodo(e.target.value);
  }

  function handlesubmit(){
    let var1 = [...data, { id: v4(), name: todo} ]
    console.log(var1);
    setData(var1);
    setTodo("")
  }

  function handleEdit(id){
    const var1 = prompt("Edit your Todo");
    let var2 = [...data];
    var2.forEach((element, index, a) => {
      if( element.id === id){
        a[index].name = var1;
      }
    });
    setData(var2);
  }

  function handleDelete(id){
    let var2 = [...data];
    let index = -1;
    var2.forEach((element, ind) => {
      if( element.id === id){
        index = ind;
      }
    });
    var2.splice(index,1);
    setData(var2);
  }

  return (
    <>
    <input type="text" value={todo} onChange={change} />
    <button type="submit" onClick={handlesubmit}>ADD</button>

    {data.map( ele => {
      return(
        <div key= {ele.id} >
          <h2>{ele.name}</h2>
        <button onClick={() => handleEdit(ele.id)} >EDIT</button>
        <button onClick={() => handleDelete(ele.id)} >DELETE</button>
        </div>
      )
    })}
    </>
    
  );
};

export default App;
