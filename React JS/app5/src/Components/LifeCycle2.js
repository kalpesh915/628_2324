import { Component } from "react";

class LifeCycle2 extends Component{
    constructor(){
        super();
        console.log("Constructor Method Called");
        
        this.state = {
            count : 1
        }
    }

    render(){
        console.log("Render Method Called");
        return <>
            <h1>Welcome to Life Cycle Methods</h1>
            <h1>Count is {this.state.count}</h1>
            <button onClick={()=>this.setState({count: this.state.count+1})}>Update</button>
        </>
    }

    componentDidMount(){
        console.log("ComponentDidMount Method Called");
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate Method Called");
    }
}

export default LifeCycle2;