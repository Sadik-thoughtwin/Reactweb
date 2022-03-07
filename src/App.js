import './App.css';
import Header from './Component/Header';
import Services from './Component/Services';
import Register from './Component/Register';
import Login from './Component/Login';
import Career from './Component/Career';
import ProctedRoute from './Component/ProctedRoute';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} ></Route>
      <Route path="/career" element={<ProctedRoute Cmp={Career}/>}></Route>
      <Route path="services" element={<ProctedRoute Cmp={Services}/>}></Route>


      <Route path="/signup" element={<Register />} ></Route>
      <Route path="/login" element={<Login/>}></Route>
      
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
