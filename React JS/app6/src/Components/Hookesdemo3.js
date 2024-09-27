import { useEffect, useState } from "react";

function Hookesdemo3(){
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("use effect called");
        // never update state or props in use effect 
        // setCount(count+1); 
    });
    return <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
}

export default Hookesdemo3;