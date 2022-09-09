import React,{useState,useEffect} from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import productos from "./Productos/ProducData";
import { ItemList } from "./Productos/ItemList";
import CircularProgress from '@mui/material/CircularProgress';


const promesa = new Promise((res) => {
    res(productos)
})

const MySwal = withReactContent(Swal)

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
   
    useEffect(() => {
        let timer = setTimeout(() => {
                    setShow(true)
                    promesa
                    .then((res)=>{setProducts(res)})
                    .catch(()=>console.log("no cargo"));
            },2000);
       
        return () => clearTimeout(timer)
        }, []);
        

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
            {show? <ItemList style={styles.root} products={products}/>: <CircularProgress sx={{ margin: "10% auto", display:"flex", alignItems:"center",  justifyContent:"center"}} />}
        </>
        )
}

export default ItemListContainer

const styles = {
    h1: {
        textAlign: "center",
        color:"white"
    },

    root: {
        margin:"auto"
        
    }
}