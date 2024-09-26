import logo from './logo.svg';
import './App.css';
import LifeCycle1 from './Components/LifeCycle1';
import LifeCycle2 from './Components/LifeCycle2';
import LifeCycle3 from './Components/LifeCycle3';
import { useState } from 'react';
import LifeCycle4 from './Components/LifeCycle4';

function App() {
  let [status, setStatus] = useState(true);
  return (
    <div className="App">
      {/* <LifeCycle1></LifeCycle1> */}
      {/* <LifeCycle2></LifeCycle2> */}
      {/* <LifeCycle3></LifeCycle3> */}
      {
        status ? <LifeCycle4></LifeCycle4> : "Unmounted Component"
      }
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
