import React from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ItemListContainer = ({greeting}) => {

    const onAdd = (count) =>{
        MySwal.fire({
            title: "Listo!",
            text: `Se agregan ${count} al carrito`,
        });
    } 


    return (
        <> 
            <h1 style={styles.h1}>{greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
        )
}

export default ItemListContainer

const styles = {
    h1: {
        textAlign: "center",

    }
}