import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import { Button, Container } from "@mui/material";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ItemCount = ({ initial, stock, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => stock > contador ? setContador(contador + 1) : MySwal.fire({ text: "No hay mas Stock", });

    const restar = () => contador > initial && setContador(contador - 1);

    const agregarCarrito = () => {
        onAdd(contador)
    }


    return (
        <Container sx={{textAlign:"center"}}>
            <div style={styles.shop}>
                <Box style={styles.shop2} sx={{ width: "90%", margin: "20px auto", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <RemoveIcon color="primary" onClick={restar} />
                    <p>{contador}</p>
                    <AddIcon color="primary" onClick={sumar} />
                </Box>
            </div>
            <Button variant="contained" color="primary" onClick={agregarCarrito}>Agregar al carrito</Button>
        </Container>
    )
}

const styles = {
    shop: {
        textAlign:"center",
        margin: "0 auto",
        background: "#e7e7e7",
    },

    shop2: {
        background: "white"
    }

}

export default ItemCount;
