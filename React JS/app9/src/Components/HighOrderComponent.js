import { useState } from "react"

export function HighOrderComponent(Props){
    return <>
        <div style={{border:"1px solid black", padding:"10px", backgroundColor:"powderblue", "width":"500px"}}>
            <Props.data></Props.data>
        </div>
    </>
}

export function RedComponent(){
    let [count, setCount] = useState(0);
    return <div style={{backgroundColor:"red", color:"white"}}>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </div>
}

export function GreenComponent(){
    let [count, setCount] = useState(0);
    return <div style={{backgroundColor:"green", color:"white"}}>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </div>
}

export function BlueComponent(){
    let [count, setCount] = useState(0);
    return <div style={{backgroundColor:"blue", color:"white"}}>
        <h1>Counter is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </div>
}