
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SitioConstruccion from './componentes/SitioConstruccion/SitioConstruccion';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import Nosotros from './componentes/Nosotros/Nosotros';
import LoginUser from './componentes/LoginUser/LoginUser';






function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        
            <Navbar />
       
            <Routes >
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
              
              <Route path="*" element={<SitioConstruccion />} />
              <Route path="/Nosotros" element={<Nosotros />} />
              
              <Route path="/LoginUser" element={<LoginUser />} />
            </Routes>
           
            <Footer />
          
        </CarritoProvider>
      </BrowserRouter>




    </>

  );
}

export default App;
