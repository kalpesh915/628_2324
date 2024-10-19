import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import ListProducts from './Components/ListProducts';
import ViewProduct from './Components/ViewProduct';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Menu></Menu>
      <Routes>
        <Route path='/' element={<ListProducts></ListProducts>}></Route>
        <Route path='/viewproduct/:id' element={<ViewProduct></ViewProduct>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
