import { useState } from "react";

function Event7(){
    let [username, setUsername] = useState("Devarshi");
    return <>
        <h1>Event with Input Filed and State</h1>
        <input type="text" onChange={(event)=>setUsername(event.target.value)} defaultValue={username}></input>
        <h1>Welcome {username}</h1>
    </>
}

export default Event7;