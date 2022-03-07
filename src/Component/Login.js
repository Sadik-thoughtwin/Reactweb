import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap';
import Header from './Header';
function Login() {

  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  return (
    useEffect(() => {
      if (localStorage.getItem("data")) {
        navigate("/");
      }
    }, []);

    async function LoginData() {
      let item = {
        email,
        password,
      };
  
      await fetch("https://slimy-mouse-25.loca.lt/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((result) => {
          // result.json(),
          console.log("result", result);
          // console.log("result---", result.message);
          dispatch(itemData(result.data));
          localStorage.setItem("itemName", result.token);
        })
        .catch((error) => {
          console.log("ggg", error);
        });
      localStorage.setItem("user-info", JSON.stringify(item));
      navigate("/add");
    }
    <div>
         <Header />
       <h2> Login</h2>
       <input type="text" value={name} placeholder="enter email" className="input_value" /><br /><br />
       <input type="password" value={name} placeholder="enter password" className="input_value"  /><br /><br />
        <Button>Login</Button>
        </div>
  )
}

export default Login