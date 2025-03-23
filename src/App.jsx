
import './App.css'
import Batsman from './Batsman';
function App() {
  const handleClick = () =>{
    alert("ls")
  }
const handleAdd5 = (num) =>{
const result =num + 5;
alert(result)
}
  return (
    <>
      
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <button onClick={handleClick}>click me</button>
      <button onClick={function handleClick2() {alert("Ok2")}}>Click Me 2</button>
     <button onClick={() =>{handleAdd5(20)}}>handle add </button>
    </>
  )
}

export default App
