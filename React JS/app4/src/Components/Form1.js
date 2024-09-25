import { useState } from "react";

function Form1(){
    let [fname, setFname] = useState("");
    return <>
        <input type="text" onChange={(e)=>setFname(e.target.value)}></input>
        <h1>Welcome {fname}</h1>
    </>
}

export default Form1;