
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
import LinkCondicional from './componentes/LinkCondicional/LinkCondicional';
import Registro from './componentes/Registro/Registro';
import Usuario from './componentes/Usuario/Usuario';
import UsuarioLog from './componentes/UsuarioLog/UsuarioLog';
import { LoginProvider } from './context/LoginContext';





function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <LoginProvider>
            <Navbar />
       
            <Routes >
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
              
              <Route path="*" element={<SitioConstruccion />} />
              <Route path="/Nosotros" element={<Nosotros />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="/LoginUser" element={<LoginUser />} />
            </Routes>
           
            <Footer />
            </LoginProvider>
        </CarritoProvider>
      </BrowserRouter>




    </>

  );
}

export default App;
