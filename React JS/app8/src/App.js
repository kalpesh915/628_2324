import logo from './logo.svg';
import './App.css';
import Example1 from './Comonents/Exmple1';
import Example2 from './Comonents/Exmple2';
import Example3 from './Comonents/Exmple3';
import Example4 from './Comonents/Exmple4';
import Example5 from './Comonents/Exmple5';
import ReferenceDemo1 from './Comonents/ReferenceDemo1';
import ReferenceDemo2 from './Comonents/ReferenceDemo2';
import { useRef } from 'react';
import ReferenceDemo3 from './Comonents/ReferenceDemo3';

function App() {
  let inputRef = useRef();
  return (
    <div className="App">
      {/* <Example1></Example1> */}
      {/* <Example2></Example2> */}
      {/* <Example3></Example3> */}
      {/* <Example4></Example4> */}
      {/* <Example5></Example5> */}
      {/* <ReferenceDemo1></ReferenceDemo1> */}
      {/* <ReferenceDemo2></ReferenceDemo2> */}
      <ReferenceDemo3 ref={inputRef}></ReferenceDemo3>
      <button onClick={()=>{
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "yellow";
      }}>Update</button>
    </div>
  );
}

export default App;
