import logo from './logo.svg';
import './App.css';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';
import Form3 from './Components/Form3';
import Form4 from './Components/Form4';
import Form5 from './Components/Form5';
import Form6 from './Components/Form6';
import PassFuctionasProps from './Components/PassFuctionasProps';

function App() {
  function printDate(){
    alert("Today is "+Date());
  }
  return (
    <div className="App">
      {/* <Form1></Form1> */}
      {/* <Form2></Form2> */}
      {/* <Form3></Form3> */}
      {/* <Form4></Form4> */}
      {/* <Form5></Form5> */}
      {/* <Form6></Form6> */}
      <PassFuctionasProps data={printDate}></PassFuctionasProps>
    </div>
  );
}

export default App;
