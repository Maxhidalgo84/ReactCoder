import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ItemCount = ({initial,stock,onAdd}) =>{

    const [contador, setContador]= useState(initial);

    const Sumar = () => stock > contador ? setContador(contador +1) : MySwal.fire({ text: "No hay mas Stock",});

    const Restar = ()=> contador > initial && setContador(contador - 1);

    const AgregarCarrito =() => {
        onAdd(contador)
    }


    return (
    <>
        <div style={styles.shop}>
        <h2>Carrito</h2>
        <Box style={styles.shop2} sx={{ width:"90%" ,margin:"-15px auto", display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <AddIcon color="primary"  onClick={Sumar}/>
        <p>{contador}</p>
        <RemoveIcon  color="primary" onClick={Restar}/>
        </Box>
        </div>
        <Button variant="outlined" onClick={AgregarCarrito}>Agregar al carrito</Button>
    </>
    )
}

const styles = {
    shop: {
        margin: "auto",
        width: 300,
        height: 100,
        background:"#e7e7e7",
    },

    shop2: {
        background: "white"
        
    
    }
}

export default ItemCount;
