import { useState } from "react";

function StateDemo1(){
    let [counter, setCounter] = useState(0);
    return <>
        <h1>Example of State in function Component</h1>
        <h1>Counter is {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Update</button>
    </>
}

export default StateDemo1;