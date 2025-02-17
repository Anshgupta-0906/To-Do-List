import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleChange(evt){
    setText(evt.target.value);
  }

  function add(){
    setList(prevItems =>{
      return [...prevItems, text];
    });
    setText("");
  }

  function del(id){
    return(
      setList(prevItems => {
        return prevItems.filter((item, index) => index !== id);
      })
    )
  }

  return (
    <>
      <div className='container'>
        <div className='heading'>
        <h1> To-Do List </h1>
        </div>
        <div className='input'>
          <input onChange={handleChange} type='text' value={text} placeholder='Write a new task' name='task'></input>
          <button className='btn' onClick={add}>Add task</button>
        </div>

        <div className='tasks'>
          {list.map((todoList,index) =>(
            <div key = {index} className='task'>
              <h2>{todoList}</h2>
              <button onClick={() => del(index)}>Delete</button>
            </div>
          ))}
          
        </div>
      </div>
    </>
  )
}

export default App
