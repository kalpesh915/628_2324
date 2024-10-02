import { useState } from "react";

function Example3(){

    let [count, setCount] = useState(1);
    return <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </>
}

export default Example3;