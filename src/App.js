import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './components/Cart';
import { ListBuy } from './components/ListBuy';
import CartContextProvider from './Context/CartContext';
import { SeeBuy } from './components/SeeBuy';



const  App = () => {

  const titulo= "Los mejores productos Jordan!!!";
  

  return (
    <>
    <BrowserRouter>
      {/* <AuthCustomProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recover-password' element={<RecoverPassword />}/>
          <Route path='*' element={
            <ProtectedRoute> */}
            <CartContextProvider>
            <NavBar titulo={titulo}/>
              <Routes>
                  <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a nuestra Tienda Online"}/>} />
                  <Route path="categoria/:categoria" element={<ItemListContainer />} />
                  <Route path="producto/:id" element={<ItemDetailContainer />}/>
                  <Route path="categoria/:categoria/producto/:id" element={<ItemDetailContainer />}/> 
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/vercompra" element={<ListBuy/>}/>    
                  <Route path="/vercompra/:find" element={<SeeBuy/>}/>      
              </Routes>
            </CartContextProvider>
            {/* </ProtectedRoute>}/>
        </Routes>    
      </AuthCustomProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
