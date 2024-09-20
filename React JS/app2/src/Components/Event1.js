function Event1(){
    function msg(){
        alert("Function Called");
    }
    return <>
        <h1>Simple Event Demo</h1>
        {/* <button onClick="msg()">Click Me</button> */}
        {/* <button onClick={msg()}>Click Me</button> */}
        <button onClick={()=>msg()}>Click Me</button>
        {/* <button onClick={msg}>Click Me</button> */}
    </>
}

export default Event1;