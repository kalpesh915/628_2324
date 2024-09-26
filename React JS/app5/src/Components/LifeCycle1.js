import { Component } from "react";

class LifeCycle1 extends Component{
    constructor(){
        super();
        console.log("Constructor Method Called");
    }

    render(){
        console.log("Render Method Called");
        return <>
            <h1>Welcome to Life Cycle Methods</h1>
        </>
    }

    componentDidMount(){
        console.log("ComponentDidMount  Method Called");
    }
}

export default LifeCycle1;