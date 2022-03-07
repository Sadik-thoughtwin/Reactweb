import React, { useEffect,useState } from 'react'
import Header from './Header';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Register() {
  const [name,setName] = useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')
const navigate = useNavigate()

useEffect(()=>{
  if(localStorage.getItem("data"))
  {
    navigate("/services")
  }
},[])

async  function Signup() {
 let userData = {
  name,
  email,
  password,
 }

  const response = await fetch('https://mighty-goose-40.loca.lt/create', {
    method: 'POST', 
  headers: {
      'Content-Type': 'application/json',
       Accept: "application/json",
       },

    body: JSON.stringify(userData)
  });
  console.log("response>>",response)
const result =await response.json();
console.log("result",result)
localStorage.setItem("data",JSON.stringify(result))
navigate("/")
setName('')
setEmail('')
setPassword('')
}
  return (
    <div>
      <Header />
      <h2 style={{color:"blue"}}>User Registration</h2>
      <input type="text" className="input_value" value={name} placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/><br /><br />
      <input type="email" className="input_value" value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/><br /><br />
      <input type="password" className="input_value" value={password} placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/><br /><br />
       <Button onClick={Signup}>Sign_Up</Button>
       
    </div>
  )
}

export default Register