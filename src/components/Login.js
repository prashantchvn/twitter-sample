import { useState,useEffect } from "react"
import React from 'react'
import {useHistory} from 'react-router-dom'
function Login() {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const history = useHistory();
    useEffect(()=>{
        localStorage.getItem('user-info')?history.push('./home'):console.log(90);
    })
    const login = () =>{
       const user = {email,pass};
       console.warn(user);
    }
    return (
        <div>
            <form>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                <br/>
                <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="password"/>
                <br/>
                <input type="button" onClick={login} value="login"/>
            </form>
        </div>
    )
}

export default Login
