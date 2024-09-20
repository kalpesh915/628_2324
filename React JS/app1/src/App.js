import logo from './logo.svg';
import './App.css';
import Rajkot from './Rajkot';
import Game from './Game';
import { Devarshi, Viraj } from './Students';
import Ahamdabad from './Ahamdabad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          <h1>React 18</h1>
          Welcome to world of React JS
        </p> */}
        {/* <Rajkot></Rajkot> */}

        {/* <Game></Game> */}

        <Viraj></Viraj>
        <Devarshi></Devarshi>
        <Ahamdabad></Ahamdabad>
      </header>
    </div>
  );
}

export default App;
