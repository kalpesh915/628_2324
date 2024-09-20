import { useState } from "react";

function Event4(){

    let [ip1, setIp1] = useState(0);
    return <>
        <h1>{ip1}</h1>
        {/* <button onClick={()=>setIp1(100)}>Increment</button> */}
        <button onClick={()=>setIp1(++ip1)}>Increment</button>
        <button onClick={()=>setIp1(--ip1)}>Decrement</button>
    </>
}

export default Event4;