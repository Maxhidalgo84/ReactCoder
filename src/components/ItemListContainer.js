import React,{useState,useEffect} from "react";
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

    const [listproducts, setListProducts] = useState([]);
    const [show, setShow] = useState(false);
   
    useEffect(() => {
        let timer = setTimeout(() => {
                    setShow(true)
                    promesa
                    .then((res)=>{setListProducts(res)})
            },2000);
       
        return () => clearTimeout(timer)
        }, []);
        

    return (
        <> 

            <h1 style={styles.h1}>{greeting}</h1>
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
            {show? <ItemList style={styles.root} listproducts={listproducts}/>: <CircularProgress sx={{ margin: "10% auto", display:"flex", alignItems:"center",  justifyContent:"center"}} />}
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