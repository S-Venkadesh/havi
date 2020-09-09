import React,{useState,useEffect} from "react";
// import { useState } from 'react';
import "./Sign.css";
import axios from 'axios';

 export default function Signup(){
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [submit, setSubmit] = useState(false);

  useEffect(()=>{
    let params = {
      firstname:fName,
      lastname:lName,
      email:email,
      password:pw,
      country:'india',
      date:date
    }
    axios.post('http://localhost:8080/register',params)
      .then(res=>console.log(res.status));
  },[submit])

   return(
    <div>
    
      
      <input 
        type="text" 
        id="fname" 
        name="firstname" 
        placeholder="Your First name.."
        onChange={e=>setFName(e.target.value)}
      ></input>
       
      <input 
        type="text" 
        id="lname" 
        name="lastname" 
        placeholder="Your last name.."
        onChange={e=>setLName(e.target.value)}
      ></input><br />
       
      <input 
        type="password" 
        id="lname" 
        name="lastname" 
        placeholder="password"
        onChange={e=>setPw(e.target.value)}
      ></input><br />
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="email"
        onChange={e=>setEmail(e.target.value)}
      ></input><br />
      
      <label >Date of birth</label><br />

      <input type="date" id="date" name="trip-start"
       onChange={(e) => { 
         setDate(e.target.value);
         console.log(e.target.value.toString());
         }}
       min="1990-01-01" max="2020-12-31"></input><br />

      <select id="country" name="country" onClick={e=>setCountry(e.target.value)}>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="india">india</option>
      </select><br/>
    
      <input type="submit" value="Submit" onClick={
        ()=>{
          setSubmit(!submit)
          console.log(fName,lName,email,pw,country,date);
        }
      }></input>
    
  </div>
   )
 }