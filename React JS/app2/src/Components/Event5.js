import { Component } from "react";

class Event5 extends Component{
    constructor(){
        super();

        // declare state
        this.state = {
            ip1: 1
        }
    }

    render(){
        return <>
            <h1>State with Class Component</h1>
            <h1>{this.state.ip1}</h1>
            <button onClick={()=>{this.setState({ip1: this.state.ip1 + 1})}}>Increment</button>
        </>
    }
}

export default Event5;