import React,{useState,useEffect} from "react";
import "./Login.css";
import axios from 'axios';

export default function Login() {
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');
  const [submit,setSubmit] = useState(false);

  useEffect(()=>{
    let params = {
      email:email,
      password:pw
    }
    axios.post('http://localhost:8080/login',params)
      .then(res=>console.log(res.json()));
  },[submit])

  return (
    <div>
      <h2>Welcome to login page</h2>
      <input type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/><br />
      <input type="password" placeholder="password" onChange={e=>setPw(e.target.value)}/><br />
      <button onClick={()=>{
        setSubmit(!submit)
      }}>sumbit</button>
    </div>
  );
}