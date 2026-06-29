import { useState } from 'react'
import './App.css'


function App() {
  const [todo , settodo] = useState([]);
  return <div>
    
    Todo: <input name="myInput" placeholder='Add Todo' />
    <br />
    <br />
    Description: <input name="myInput" placeholder='Add Description'/>
    <br />
    <br />
    <button>Add</button>
    
  </div>
  
}

export default App
