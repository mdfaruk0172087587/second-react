
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import User from './User';
import Friends from './Firneds';
import Posts from './Posts';


const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())

const fetchFriends = async () =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json()
}

const fetchPosts = async() =>{
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
return response.json();
}

function App() {
  const postsPromise = fetchPosts();
  const friendsProser = fetchFriends();
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
      <Suspense fallback={<h4>Loading Posts...</h4>}>
      <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h2>Friends Comming...</h2>}>
      <Friends friendsProser={friendsProser}></Friends>
      </Suspense>
     <Suspense fallback={<h3>Lodding...</h3>}>
      <User fetchUser={fetchUser}></User>
     </Suspense>
      <Batsman></Batsman>
      <button onClick={handleClick}>click me</button>
      <button onClick={function handleClick2() {alert("Ok2")}}>Click Me 2</button>
     <button onClick={() =>{handleAdd5(20)}}>handle add </button>
    </>
  )
}

export default App
