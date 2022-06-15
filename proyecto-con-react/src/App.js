import Nav from './componentes/Nav/Nav';
import Header from "./componentes/Header/Header";
import Articulo from './componentes/Articulo/Articulo';
import Tarjetas from './componentes/Tarjetas/Tarjetas';
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <Nav/>
      <Header/>
      <Articulo/>
      <Tarjetas/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
