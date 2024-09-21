import { Component } from "react";

class StateDemo2 extends Component{
    constructor(){
        super();

        this.state = {
            counter : 0
        }
    }

    render(){
        return <>
            <h1>State Example in Class Component</h1>
            <h1>Counter is {this.state.counter}</h1>
            <button onClick={()=>this.setState({counter: this.state.counter+1})}>Update</button>
        </>
    }
}

export default StateDemo2;