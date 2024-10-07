import './App.css';

function App() {
  const APIURL = "http://localhost:3000/students";

  function getAllData() {
    //console.log("Called");
    fetch(APIURL,{
      method:"GET"
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
      })
    });
  }

  function addNewData() {
    let fname = prompt("Enter First Name");
    let lname = prompt("Enter Last Name");
    let city = prompt("Enter City Name");

    fetch(APIURL,{
      method:"POST",
      headers:{
        "Accept": "Application/json",
        "Conttent-Type": "Application/json"
      },
      body: JSON.stringify({fname, lname, city})
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
      })
    });
  }

  function updateData(){
    let id = prompt("Enter ID for Update Data");
    let fname = prompt("Enter First Name");
    let lname = prompt("Enter Last Name");
    let city = prompt("Enter City Name");

    fetch(APIURL+"/"+id,{
      method: "PUT",
      headers:{
        "Accept":"Application/json",
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({fname, lname, city})
    }).then((response)=>{
      response.json().then((result)=>{
        console.log(result);
      });
    });
  }

  function deleteData(){
    let id = prompt("Enter ID for Update Data");
    fetch(APIURL+"/"+id,{
      method:"DELETE"
    }).then((response)=>{
      response.json().then((result)=>{
        console.log(result);
      });
    })
  }

  return (
    <div className="App">
      <button onClick={getAllData}>Get Data</button>
      <button onClick={addNewData}>Add Data</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>

    </div>
  );
}

export default App;
