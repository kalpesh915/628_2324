import { useState } from "react";

function Event6(){
    let [username, setUsername] = useState("");
    return <>
        <h1>Event with Input Filed and State</h1>
        <input type="text" onChange={(event)=>setUsername(event.target.value)}></input>
        <h1>Welcome {username}</h1>
    </>
}

export default Event6;