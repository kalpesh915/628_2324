function Event3(){
    let ip1 = 100;
    return <>
        <h1>Simple Event Demo</h1>
        <p>{ip1}</p>
        <button onClick={()=>{
            ip1++;
            console.log(ip1);
        }}>Increment</button>
    </>
}

export default Event3;