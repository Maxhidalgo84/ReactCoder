import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { Button } from '@mui/material';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { db } from '../Firebase/Firebase';
import { addDoc, collection, serverTimestamp, updateDoc, doc, ref } from "firebase/firestore";
import { Alert } from "@mui/material";
import { Link } from 'react-router-dom';
import DialogContentText from '@mui/material/DialogContentText';
import { SafetyCheckOutlined } from '@mui/icons-material';


const initialState = {
    name: "",
    address: "",
    email: "",
    telephone: "",
};


export const CartForm = () => {

    const { cart, totalPrice, reset } = useCartContext()

    const [open, setOpen] = useState(false);
    const [finish, setFinish] = useState(false);
    const [complete, setComplete] = useState(false)
    const [buyer, setBuyer] = useState(initialState);
    const [idVenta, setIdVenta] = useState("");
    const [alert, setAlert] = useState(false);


    const finalizarCompra = (buyer, items) => {
        setComplete(true);
        setFinish(false);
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            buyer,
            items: items,
            date: serverTimestamp(),
            total: totalPrice()
        })
            .then(res=>{ setIdVenta(res.id);
                items.forEach(producto =>{ 
                    actStock(producto,producto.size)
                });
            })

    }

    

    const actStock = (producto,talle) =>{
        const updateStock = doc(db,"products", producto.id);
        let tallesupd= updateStock.talles2;
        console.log(tallesupd[talle]);
        tallesupd[talle] = tallesupd[talle] - producto.quantity;
        console.log();

        updateDoc(updateStock,{talles2:(tallesupd)});
    }

    const handleClickOpen = () => {
        setOpen(true);
        setFinish(true)
    };

    const handlerOnChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setOpen(false);
        if (complete) {
            reset();
        }
    };

    const handleConfirm = () => {
        if (buyer.address === "" || buyer.name === "" || buyer.email === "") {
            setAlert(true);
            return;
        } else {
        finalizarCompra(buyer, cart)}

    }

    return (
        <div>
            <Button 
                sx={{margin:"15px"}}
                variant="contained" color="success"
                onClick={handleClickOpen}

            >
                Finalizar Compra
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{textAlign:"center"}}>
                    Formulario de Compra
                </DialogTitle>
                {alert ? (
                    <Alert variant="filled" severity="error">
                        Nombre, Dirección y Email son datos obligatorios
                    </Alert>
                ) : 
                complete ? (
                    <Alert variant="filled" severity="success">
                        Compra realizada con exito su id es: <p>{idVenta}</p>
                    </Alert>
                ):<DialogContentText sx={{textAlign:"center"}}>Por favor ingrese los datos para confirmar la compra</DialogContentText>}
                <DialogContent>
                    <TextField
                        autoFocus
                        onFocus={() => setAlert(false)}
                        margin="dense"
                        id="name"
                        name="name"
                        label="Nombre y apellido"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handlerOnChange}
                    />
                    <TextField
                        autoFocus
                        onFocus={() => setAlert(false)}
                        margin="dense"
                        id="address"
                        name="address"
                        label="Direccion"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handlerOnChange}
                    />
                    <TextField
                        autoFocus
                        onFocus={() => setAlert(false)}
                        margin="dense"
                        id="telephone"
                        name="telephone"
                        label="Telefono"
                        type="tel"
                        fullWidth
                        variant="standard"
                        onChange={handlerOnChange}
                    />
                    <TextField
                        autoFocus
                        onFocus={() => setAlert(false)}
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        helperText="Se enviara la informacion a este correo"
                        onChange={handlerOnChange}
                    />
                </DialogContent>


                <DialogActions>
                    <Button  variant="contained" color="error" onClick={handleClose}>
                        {complete ? 'CERRAR' : 'CANCELAR'}
                    </Button>
                    {finish ? <Button variant="contained" color="success" onClick={handleConfirm}>CONFIRMAR
                       
                    </Button>: 
                    <Link to={`/`} style={{ textDecoration: 'none', margin:"0px 10px" }}>
                        <Button onClick={handleClose} variant="contained" color="primary"> Seguir Comprando</Button>
                    </Link>}
                </DialogActions>
            </Dialog>
        </div>
    );
}





