import React, { useState, useEffect } from "react";
//import productos from "./Productos/ProducData";
import { ItemList } from "./Productos/ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { db } from "../Firebase/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


// const promesa = new Promise((res) => {
//     res(productos)
// })


const ItemListContainer = ({ greeting }) => {

    const [listproducts, setListProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const { categoria } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "products");
        const q = categoria ? query(productsCollection, where("categoria", "==", `${categoria}`)) :
        query(productsCollection, where("destacados", "==", true)) 

        getDocs(q)
        .then((data)=> {
            const lista =data.docs.map((product) =>{
                return {
                    ...product.data(),
                    id: product.id, 
                }
            })
            setListProducts(lista)
        })
        .catch(()=>{
            setError(true)
        })
        .finally(()=>{
            setTimeout(() => {
                setShow(true)
            }, 1500) 
        })
    }, [categoria])
    

    return (
        <>
            <h1 style={styles.h1}>{greeting}</h1>
            <h2 style={styles.h1}>{categoria}</h2>
            {show ? <ItemList style={styles.root} listproducts={listproducts} /> 
            : error? <p>error</p> 
            : <CircularProgress sx={{ margin: "10% auto", display: "flex", alignItems: "center", justifyContent: "center" }} />}
        </>
    )
}

export default ItemListContainer

const styles = {
    h1: {
        textAlign: "center",
        color: "white"
    },

    root: {
        margin: "auto",

    }
}