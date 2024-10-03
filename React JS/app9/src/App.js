import logo from './logo.svg';
import './App.css';
import ControllerComponent from './Components/ControllerComponent';
import UnControllerComponent from './Components/UnControllerComponent';
import { BlueComponent, GreenComponent, HighOrderComponent, RedComponent } from './Components/HighOrderComponent';

function App() {
  return (
    <div className="App">
      {/* <ControllerComponent></ControllerComponent> */}
      {/* <UnControllerComponent></UnControllerComponent> */}
      <HighOrderComponent data={RedComponent}></HighOrderComponent>
      <HighOrderComponent data={GreenComponent}></HighOrderComponent>
      <HighOrderComponent data={BlueComponent}></HighOrderComponent>
    </div>
  );
}

export default App;
