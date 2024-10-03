import { useState } from "react";

function UnControllerComponent(){
    
    function handleForm(evt){
        evt.preventDefault();

        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
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

export default UnControllerComponent;