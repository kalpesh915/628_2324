import { useState } from "react";

function Input1(){
    let [user, setUser] = useState({fname:"", lname:""});
    return <>
        <input type="text" placeholder="Enter First Name" defaultValue={user.fname} onChange={(e)=>setUser({...user, fname:e.target.value})}></input><br />
        <input type="text" placeholder="Enter Last Name" defaultValue={user.lname} onChange={(e)=>setUser({...user, lname:e.target.value})}></input><br />
        <h1>Welcome <br/>{user.fname} <br /> {user.lname}</h1>
    </>
}

export default Input1;