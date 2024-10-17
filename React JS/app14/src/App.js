import './App.css';
import { CommonData } from './Components/ContentAPI';
import { useState } from 'react';
import Home from './Components/Home';

function App() {
  let [theme, setTheme] = useState({bg:"yellow", fg:"red"});
  return (
    <div className="App">
      <CommonData.Provider value={theme}>
        <Home></Home>
      </CommonData.Provider>
      <hr />
      <button onClick={()=>setTheme({bg:"yellow", fg:"red"})}>Theme 1</button>
      <button onClick={()=>setTheme({bg:"black", fg:"white"})}>Theme 2</button>
      <button onClick={()=>setTheme({bg:"brown", fg:"white"})}>Theme 3</button>
    </div>
  );
}

export default App;
