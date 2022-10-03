import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './components/Cart';
import CartContextProvider from './Context/CartContext';



const  App = () => {

  const titulo= "Los mejores productos Jordan!!!";
  

  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
      <NavBar titulo={titulo}/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a nuestra Tienda Online"}/>} />
            <Route path="categoria/:categoria" element={<ItemListContainer />} />
            <Route path="producto/:id" element={<ItemDetailContainer />}/>
            <Route path="categoria/:categoria/producto/:id" element={<ItemDetailContainer />}/> 
            <Route path="/cart" element={<Cart/>}/>           
        </Routes>
      </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
