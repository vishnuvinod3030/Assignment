
import './App.css';
import NavMenu from './components/navbar/NavMenu';
import OrderPLaced from './pages/orderplaced/OrderPLaced';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavMenu/>
       <Routes>
       <Route path="/" element={<OrderPLaced/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
