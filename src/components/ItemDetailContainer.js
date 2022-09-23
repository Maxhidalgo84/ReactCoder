import React, { useState, useEffect } from 'react'
import productos from './Productos/ProducData'
import { ItemDetail } from './Productos/ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';


const promesa = new Promise((res) => {
    res(productos)
})

export const ItemDetailContainer = () => {

    const [listproduct, setListProduct] = useState({});
    const [show, setShow] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(true)
            promesa
                .then((res) => { setListProduct(res.find(item => item.id === parseInt(id))) })
        }, 1000);

        return () => clearTimeout(timer)
    }, [id]);

    return (
        <>
            {show ? <ItemDetail listproduct={listproduct} /> : <CircularProgress sx={{ margin: "10% auto", display: "flex", alignItems: "center", justifyContent: "center" }} />}
        </>

    )
}
