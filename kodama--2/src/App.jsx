
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element = {<ItemListContainer />}/>
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer />}/>
          <Route path="/item/:idItem" element = {<ItemDetailContainer />}/>
                   
        </Routes>
        
        <Footer />
      </BrowserRouter>


      
      
    </>

  );
}

export default App;
