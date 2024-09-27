import { useState } from "react";

function Hookesdemo1(){
    let [count, setCount] = useState(0);
    return <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
}

export default Hookesdemo1;