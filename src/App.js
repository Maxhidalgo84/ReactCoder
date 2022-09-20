import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';


const  App = () => {

  const titulo= "Los mejores productos Jordan!!!";
  

  return (
    <>
      <NavBar titulo={titulo}/>
      <div className="App">
      {/* <ItemListContainer greeting={"Bienvenidos a nuestra Tienda Online"}/> */}
      <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
