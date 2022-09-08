import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';


const  App = () => {

  const titulo= "Las mejores zapatillas Jordan!!!";
  

  return (
    <>
      <NavBar titulo={titulo}/>
      <div className="App">
      <ItemListContainer greeting={"Bienvenidos a nuestra Tienda Online"}/>
      </div>
    </>
  );
}

export default App;
