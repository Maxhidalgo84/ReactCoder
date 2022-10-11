import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { db } from '../Firebase/Firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Alert, CircularProgress } from "@mui/material";
import styled from '@emotion/styled'



const initialState = {
    name: "",
    address: "",
    email: "",
    telephone: "",
};


export const CartForm = () => {

    const { cart, totalPrice, reset } = useCartContext()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [finish, setFinish] = useState(false);
    const [complete, setComplete] = useState(false)
    const [buyer, setBuyer] = useState(initialState);
    const [idVenta, setIdVenta] = useState("");
    const [alert, setAlert] = useState(false);


    const finalizarCompra = (buyer, items) => {
        setBuyer(buyer);
        setComplete(true)
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            buyer,
            items: items,
            date: serverTimestamp(),
            total: totalPrice()
        })
            .then((result) => setIdVenta(result.id))
        reset();

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
        if (idVenta !== "") {
            reset();
        }
    };

    const handleConfirm = () => {
        if (buyer.address === "" || buyer.name === "" || buyer.email === "") {
            setAlert(true);
            return;
        } setLoading(true)
        finalizarCompra(buyer, cart)

    }

    return (
        <div>
            <button
                onClick={handleClickOpen}

            >
                Finalizar Compra
            </button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle >
                    Ingrese los datos para la entrega
                </DialogTitle>
                {alert ? (
                    <Alert variant="filled" severity="error">
                        Nombre, Dirección y Email son datos obligatorios
                    </Alert>
                ) : null}
                {complete && finish ? (
                    <Alert variant="filled" severity="success" >
                        Compra realizada con éxito su id es: <p>{idVenta}</p>
                    </Alert>
                ) : null}
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
                    <button onClick={handleClose}>
                        {finish ? 'CERRAR' : 'CANCELAR'}
                    </button>
                    {finish ? null : <button onClick={handleConfirm} disabled={loading}>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            "CONFIRMAR"
                        )}

                    </button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}





