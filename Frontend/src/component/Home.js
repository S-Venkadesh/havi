import React,{useState,useEffect} from "react";
import "./Home.css";
import axios from 'axios';

export default function Home() {

  const [todo,setTodo] = useState('');
  const [allPost,setAllPost] = useState([]);

  useEffect(()=>{
    let params = {
      content:todo
    }
    axios.post('http://localhost:8080/posts',params)
      .then(res=>console.log(res.json()));
  },[allPost])

  return (
    <div>
      <h3>welcome to home screen</h3>
      <input 
        type="text"
        placeholder="Enter Text"
        value={todo}
        onChange={e=>setTodo(e.target.value)}
      />
      <button onClick={
        ()=>{
          let Value = todo;
          setAllPost(allPost.concat(Value));
        }
      }>Add</button>
      {allPost.map(e=>{
        return <h1 key={e}>{e}</h1>
      })}
    </div>
  );
}
