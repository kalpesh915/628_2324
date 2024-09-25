import { useState } from "react";

function Form4() {
  let [user, setUser] = useState({ fname: "", lname: "" });

  function handleSubmit(event) {
    //alert("Called");
    event.preventDefault();
    setUser({fname: event.target.fname.value, lname: event.target.lname.value});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="fname" name="fname"></input>
        <br />
        <input type="text" id="lname" name="lname"></input>
        <br />
        <input type="submit" value="Send Data"></input>
        <br />
      </form>
      <h1>
        Welcome {user.fname} {user.lname}
      </h1>
    </>
  );
}

export default Form4;
