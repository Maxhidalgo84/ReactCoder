import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const  App = () => {

  const titulo= "Los mejores productos Jordan!!!";
  

  return (
    <>
    <BrowserRouter>
      <NavBar titulo={titulo}/>
      <div className="App">
        <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a nuestra Tienda Online"}/>} />
            <Route path="categoria/:categoria" element={<ItemListContainer />} />
            <Route path="producto/:id" element={<ItemDetailContainer />}/>
            <Route path="categoria/:categoria/producto/:id" element={<ItemDetailContainer />}/>             
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
