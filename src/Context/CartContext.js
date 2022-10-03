import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find(item => item.id === id);
    
    const addItem = (producto, quantity) => {
        if (isInCart(producto.id)) {
            const  newCart = cart.map(item => {
                if(item.id === producto.id ){
                const newQuantity = item.quantity + quantity;
                return {...item, quantity: newQuantity}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            const newProducto= {...producto, quantity: quantity};
            setCart([...cart, newProducto])

        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    const reset = () => {
        setCart([]);
    };

    const totalQuantity = ()=> {
        return cart.reduce((acc,element) => acc +  element.quantity,0)
    }

    const totalPrice = ()=> {
        return cart.reduce((acc,element) => acc + (element.price * element.quantity),0)
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, reset, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;