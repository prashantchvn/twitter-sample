import React,{useState} from 'react'
import '../style/App.css'
import {useHistory} from 'react-router-dom'
function Signup() {
    const[email,setEmail] = useState("");
    const[pass,setPass]=useState("");
    const[cpass,setCpass]=useState("");
    const history = useHistory();
    const submitBtn = () =>{
        pass===cpass ? submit():alert("Password does not match");
    }
    const submit = async () =>{
        const item = {email,pass};
        const result = await fetch('http://localhost:8000/users',{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        let result2 = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result2));
        history.push("/login")
    }
    return (
        <div>
            <form className="signup form">
                <header className="heading">Sign-up</header>
                <input type="text" className="input" value={email} id="txt"  onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                <input type="password" className="input" value={pass}  onChange={(e)=>setPass(e.target.value)} placeholder="password" />
                <input type="password" className="input"value={cpass}  onChange={(e)=>setCpass(e.target.value)} placeholder="confirm password" />
                <button type="button" className="submit" onClick={submitBtn}>Signup</button>
            </form>
        </div>
    )
}

export default Signup
