import { useEffect, useState } from "react";

function Hookesdemo5(){
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    useEffect(()=>{
        console.log("use effect 1 called");
    }, [count1]);

    useEffect(()=>{
        console.log("use effect 2 called");
    }, [count2]);

    return <>
        <h1>count 1 is {count1} count 2 is {count2}</h1>
        <button onClick={()=>setCount1(count1+1)}>Increment 1</button>
        <button onClick={()=>setCount2(count2+1)}>Increment 2</button>
    </>
}

export default Hookesdemo5;