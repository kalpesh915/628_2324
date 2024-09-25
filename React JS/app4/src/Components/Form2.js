import { useState } from "react";

function Form2(){
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    return <>
        <input type="text" onChange={(e)=>setFname(e.target.value)}></input><br/>
        <input type="text" onChange={(e)=>setLname(e.target.value)}></input><br/>
        <h1>Welcome {fname} {lname}</h1>
    </>
}

export default Form2;