import { Component, createRef } from "react";

class ReferenceDemo1 extends Component{
    constructor(){
        super();
        this.inputref = createRef();
    }

    render(){
        return <>
            <h1>Example of Reference in React JS</h1>
            <input type="text" ref={this.inputref}></input>
            <button onClick={()=>{
                this.inputref.current.style.color="red";
                this.inputref.current.style.backgroundColor="yellow";
            }}>Update</button>
        </>
    }
}

export default ReferenceDemo1;