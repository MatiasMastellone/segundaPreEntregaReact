
import './App.css';
import {NavBar} from './Components/Navbar.jsx' 
import {ItemListContainer} from './Components/ItemListContainer.jsx'
import {ItemDetailContainer} from './Components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  
  const lb=0;

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="MATIAS"/>}/>
        <Route path="/category/:id" element={<ItemListContainer greetings="MATIAS"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
