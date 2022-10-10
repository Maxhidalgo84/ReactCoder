import React from 'react',
import { useCartContext } from '../Context/CartContext';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


const { cartList, clearCart, montoTotalCart, iva, envio } = useCartContext(CartContext)
const buyer = {
    name: "",
    address: "",
    email: "",
    telephone: "",
  };

  const finalizarCompra = (buyer,items, total)=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection, {
      buyer,
      items: cart,
      date: serverTimestamp(),
      total,
    })
    .then(result=>{
      console.log(result.id);
      resetCart();
    })
  }

export const CartForm = () => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handlerOnChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    

  return (
    <div className="formCompra_container">
    <button
      onClick={handleClickOpen}
      
    >
      Finalizar Compra
    </button>

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle >
        Ingrese los datos para la entrega
      </DialogTitle>
      {alerta ? (
        <Alert  variant="filled" severity="error">
          Nombre, Dirección y Email son datos obligatorios
        </Alert>
      ) : null}
      {idCompra !== ''? (
        <Alert variant="filled" severity="success" >
          Compra realizada con éxito, su ID de compra es: <span>{idCompra}</span>
        </Alert>
      ) : null}
      <DialogContent>
        <TextField
          autoFocus
          onFocus={() => setAlerta(false)}
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
          onFocus={() => setAlerta(false)}
          margin="dense"
          id="address"
          name="address"
          label="Dirección"
          type="text"
          fullWidth
          variant="standard"
          onChange={handlerOnChange}
        />
        <TextField
          autoFocus
          onFocus={() => setAlerta(false)}
          margin="dense"
          id="telephone"
          name="telephone"
          label="Teléfono"
          type="tel"
          fullWidth
          variant="standard"
          onChange={handlerOnChange}
        />
        <TextField
          autoFocus
          onFocus={() => setAlerta(false)}
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          helperText="Este correo será usado para enviarle los datos de la compra"
          onChange={handlerOnChange}
        />
      </DialogContent>


      <DialogActions>
        <button
          onClick={handleClose}
        >
          {idCompra !== '' ? 'CERRAR': 'CANCELAR'}
        </button>
        <button
          onClick={handleConfirmar}
          disabled={cargando}
        >            
          {cargando ? (
            <CircularProgress />
          ) : (
            "CONFIRMAR"
          )}
          
        </button>
      </DialogActions>
    </Dialog>
  </div>
);
  )
}
