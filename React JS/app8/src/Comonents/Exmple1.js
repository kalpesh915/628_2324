import { Component } from "react";

class Example1 extends Component{
    constructor(){
        super();

        this.state = {
            count : 1
        }
    }

    render(){
        console.log("render Called");
        return <>
            <h1>Value of Counter is {this.state.count}</h1>
            {/* <button onClick={()=>this.setState({count: this.state.count + 1})}>Update</button> */}
            <button onClick={()=>this.setState({count: 1})}>Update</button>
        </>
    }
}

export default Example1;