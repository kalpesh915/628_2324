import { Component } from "react";

class PropsDemo2 extends Component{
    constructor(){
        super();
    }

    render(){
        return <>
            <h1>Example of Props with Class Component</h1>
            <h1>Welcome {this.props.data}</h1>
        </>
    }
}

export default PropsDemo2;