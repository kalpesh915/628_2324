import logo from './logo.svg';
import './App.css';
import StateDemo1 from './Components/StateDemo1';
import StateDemo2 from './Components/StateDemo2';
import PropsDemo1 from './Components/PropsDemo1';
import { useState } from 'react';
import PropsDemo2 from './Components/PropsDemo2';
import PropsDemo3 from './Components/PropsDemo3';
import Input1 from './Components/Input1';
import HideShow1 from './Components/HideShow1';

function App() {
  let [username, setUsername] = useState("Devarshi");
  let [user, setUser] = useState({ fname:"Devarshi", lname:"Thakar"});
  let [status, setStatus] = useState(true);
  return (
    <div className="App">
     {/* <StateDemo1></StateDemo1> */}
     {/* <StateDemo2></StateDemo2> */}
     {/* <PropsDemo1 data={username}></PropsDemo1> */}
     {/* <PropsDemo2 data={username}></PropsDemo2> */}
     {/* <button onClick={()=>setUsername("Viraj")}>Change Name</button> */}
     {/* <PropsDemo3 data={{fname:"Devarshi", lname:"Thakar"}}></PropsDemo3> */}
     {/* <PropsDemo3 data={user}></PropsDemo3> */}
     {/* <button onClick={()=>setUser({fname:"Viraj", lname:"Bhatti"})}>Update User</button> */}
     {/* <Input1></Input1> */}
     {/* <button onClick={()=>setStatus(false)}>Hide</button>
     <button onClick={()=>setStatus(true)}>Show</button> */}
     <button onClick={()=>setStatus(!status)}>Toggle Content</button>
     { status ? <HideShow1></HideShow1> : ""}
    </div>
  );
}

export default App;
