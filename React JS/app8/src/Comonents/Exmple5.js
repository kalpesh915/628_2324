import { useMemo, useState } from "react";

function Example5(){

    let [count1, setCount1] = useState(1);
    let [count2, setCount2] = useState(1);

    useMemo(()=>{
        console.log("use Memo Called 1");
    }, [count1]);

    useMemo(()=>{
        console.log("use Memo Called 2");
    }, [count2]);

    return <>
        <h1>Counter 1 is {count1} Counter 2 is {count2}</h1>
        {/* <button onClick={()=>setCount1(Math.ceil(Math.random() * 10))}>Update 1</button>
        <button onClick={()=>setCount2(Math.ceil(Math.random() * 10))}>Update 2</button> */}
        <button onClick={()=>setCount1(10)}>Update 1</button>
        <button onClick={()=>setCount2(10)}>Update 2</button>
    </>
}

export default Example5;