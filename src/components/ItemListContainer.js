import React, { useState, useEffect } from "react";
import productos from "./Productos/ProducData";
import { ItemList } from "./Productos/ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import {useParams} from 'react-router-dom';


const promesa = new Promise((res) => {
    res(productos)
})


const ItemListContainer = ({ greeting }) => {

    const [listproducts, setListProducts] = useState([]);
    const [show, setShow] = useState(false);

    const {categoria} = useParams()

    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(true)
            promesa
                .then((res) => { categoria? setListProducts(res.filter(producto => producto.categoria === categoria)) : setListProducts(res)})
        }, 1000);

        return () => clearTimeout(timer)
    }, [categoria]);


    return (
        <>
            <h1 style={styles.h1}>{greeting}</h1>
            <h2 style={styles.h1}>{categoria}</h2>
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
            {show ? 
            <ItemList style={styles.root} listproducts={listproducts} /> : <CircularProgress sx={{ margin: "10% auto", display: "flex", alignItems: "center", justifyContent: "center" }} />}
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
        margin: "auto"

    }
}