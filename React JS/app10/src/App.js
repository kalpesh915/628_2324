import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Products from "./Components/Products";
import Feedback from "./Components/Feedback";
import Login from "./Components/Login";
import Contact from "./Components/Contact";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Errors from "./Components/Errors";
import UserPrinter from "./Components/UserPrinter";

function App() {
  let users = [
    {id:1, fname:"Devarsi", lname:"Thakar", city:"Rajkot", phone:"9998887770"},
    {id:2, fname:"Viraj", lname:"Bhatti", city:"Rajkot", phone:"9998887770"},
    {id:3, fname:"Nisarg", lname:"Kapupara", city:"Rajkot", phone:"9998887770"},
    {id:4, fname:"Rakhi", lname:"Vishvakarma", city:"Rajkot", phone:"9998887770"},
  ];
  return (
    <div className="App">
      {/* <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/feedback" element={<Feedback/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<Errors/>}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            {
              users.map((user) => <li className="nav-item">
                <Link className="nav-link" to={"/printuser/"+user.id+"/"+user.fname+"/"+user.lname+"/"+user.city}>{user.fname}</Link>
              </li>)
            }
          </ul>
        </nav>

        <Routes>
          <Route path="/printuser/:id/:fname/:lname/:city" element={<UserPrinter></UserPrinter>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
