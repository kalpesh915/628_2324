import { useState } from "react";

function Form3() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");

  function handleSubmit(event) {
    //alert("Called");
    event.preventDefault();
    setFname(event.target.fname.value);
    setLname(event.target.fname.value);
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
        Welcome {fname} {lname}
      </h1>
    </>
  );
}

export default Form3;
