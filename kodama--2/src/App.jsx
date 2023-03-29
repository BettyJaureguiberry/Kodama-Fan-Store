
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import FormContacto from './componentes/FormContacto/FormContacto';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'いらっしゃい みなさん！。Bienvenid@s Amig@s!.'}/>
      <FormContacto/>
    </div>
  );
}

export default App;
