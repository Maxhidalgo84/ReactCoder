import React, { useState, useEffect } from 'react'
import productos from './Productos/ProducData'
import { ItemDetail } from './Productos/ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';


const promesa = new Promise((res) => {
    res(productos)
})

export const ItemDetailContainer = () => {

    const [listproduct, setListProduct] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(true)
            promesa
                .then((res) => { setListProduct(res.find(item => item.id === 1)) })
        }, 2000);

        return () => clearTimeout(timer)
    }, []);

    return (
        <>
            {show ? <ItemDetail listproduct={listproduct} /> : <CircularProgress sx={{ margin: "10% auto", display: "flex", alignItems: "center", justifyContent: "center" }} />}
        </>

    )
}
