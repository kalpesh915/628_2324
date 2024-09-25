import { useState } from "react";

function Form6() {
  let [user, setUser] = useState({ fname: "Raj", lname: "Makwana", city: "Rajkot" });

  function handleSubmit(event) {
    //alert("Called");
    event.preventDefault();
    setUser({fname: event.target.fname.value, lname: event.target.lname.value,
        city: event.target.city.value});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="fname" name="fname" defaultValue={user.fname}></input>
        <br />
        <input type="text" id="lname" name="lname" defaultValue={user.lname}></input>
        <br />
        <input type="text" id="city" name="city" defaultValue={user.city}></input>
        <br />
        <input type="submit" value="Send Data"></input>
        <br />
      </form>
      <h1>
        Welcome {user.fname} {user.lname} to {user.city}
      </h1>
    </>
  );
}

export default Form6;
