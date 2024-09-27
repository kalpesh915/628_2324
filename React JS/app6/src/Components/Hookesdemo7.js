import { useEffect, useMemo, useState } from "react";

function Hookesdemo7(){
    let [count1, setCount1] = useState(0);
    
    useEffect(()=>{
        console.log("Component Rendered");
    }, [count1]);

    useMemo(()=>{
        console.log("Use Memo Executed");
    }, [count1]);

    return <>
        <h1>count 1 is {count1}</h1>
        <button onClick={()=>setCount1(Math.ceil(Math.random() * 10))}>Increment 1</button>
    </>
}

export default Hookesdemo7;