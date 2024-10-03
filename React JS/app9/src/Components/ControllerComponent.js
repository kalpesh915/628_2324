import { useState } from "react";

function ControllerComponent(){
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");

    function handleForm(evt){
        evt.preventDefault();
        setFname(evt.target.fname.value);
        setLname(evt.target.lname.value);

        console.log(fname, " ",lname);
    }

    return <>
        <form onSubmit={handleForm}>
        <input id="fname" name="fname" type="text" placeholder="Enter First Name"></input><br/>
        <input id="lname" name="lname" type="text" placeholder="Enter Last Name"></input><br/>
        <input type="submit" value="Send Data"></input>
        </form>
    </>
}

export default ControllerComponent;