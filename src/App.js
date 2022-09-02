import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';
 


const  App = () => {

  const titulo= "Las mejores zapatillas Joordan!!!";
  const greeting = "Bienvenidos a nuestra Tienda"


  return (
    <>
      <NavBar titulo={titulo}/>
      <div className="App">
      <ItemListContainer greeting={greeting}/>
      </div>
    </>
  );
}

export default App;
