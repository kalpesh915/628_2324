import { forwardRef } from "react"

function ReferenceDemo3(Props, ref){
    return <>
        <h1>Example of Forward Ref</h1>
        <input type="text" ref={ref}></input>
    </>
}

export default forwardRef(ReferenceDemo3);