import { useRef } from "react";

function ReferenceDemo2(){
    let inputRef = useRef();
    return <>
        <h1>useRef Example</h1>
        <input type="text" ref={inputRef}></input>
        <button onClick={()=>{
            inputRef.current.style.color = "red";
            inputRef.current.style.backgroundColor = "yellow";
        }}>Update</button>
    </>
}

export default ReferenceDemo2;