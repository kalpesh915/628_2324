import { useEffect, useState } from "react";

function Hookesdemo2(){
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("use effect called");
    });
    return <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
}

export default Hookesdemo2;