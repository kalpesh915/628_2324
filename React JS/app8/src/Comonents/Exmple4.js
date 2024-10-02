import { useMemo, useState } from "react";

function Example4(){

    let [count, setCount] = useState(1);

    useMemo(()=>{
        console.log("use Memo Called");
    }, [count]);

    return <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(Math.ceil(Math.random() * 10))}>Update</button>
    </>
}

export default Example4;