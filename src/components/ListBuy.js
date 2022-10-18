import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material'
import styled from '@emotion/styled';
import { db } from "../Firebase/Firebase";
import { getDoc, collection, doc } from 'firebase/firestore';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { SeeBuy } from './SeeBuy';
import { async } from '@firebase/util';


export const ListBuy = () => {
    
    const [search, setSearch] = useState("");
    const [ventas, setVentas] = useState({});
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    const [loading , setLoading] = useState(false)
    const [confirmar, setConfirmar] = useState(false);

    const handlerOnChange = (e) => {
        setSearch(e.target.value);
    };

    const limpiar = () => {
        setShow(false)
        setSearch("")
        setVentas({})
        setConfirmar(false)
    }

    const finalizar = ()=> {
            setLoading(true)
            const ventasCollection= collection(db,"ventas");
            const refDoc = doc(ventasCollection, search);
            getDoc(refDoc)
            .then((res) => {
                const product = {
                    id: res.id,
                    ...res.data()
                }
                setVentas(product);
                if(product.items === undefined){
                    setShow(false)
                    setConfirmar(true)
                }else {setShow(true)}
            })
             .catch(()=>{
                    setError(true);
            })
            .finally(()=>{
                setTimeout(() => {
                        setLoading(false)
                         }, 1500) 
            })
        // }catch(error){
        //     setError(true);}    
        // finally{
        //         setTimeout(() => {
        //                     setShow(true)
        //                 }, 1000) 
        //     }
    }

    
    // useEffect(() => {
    //     if(search!= ""){
    //     const productCollection= collection(db,'ventas');
    //     const refDoc = doc(productCollection, search);
    //     getDoc(refDoc)
    //     .then((res) => {
    //         const product = {
    //             id: res.id,
    //             ...res.data()
    //         }
    //         setVentas(product)
    //     })
    //     .catch(()=>{
    //         setError(true);
    //     })
    //     .finally(()=>{
    //         setTimeout(() => {
    //             setShow(true)
    //             SetConfirmar(false)
    //         }, 1500) 
    //     })}else {
    //         setShow(false)
    //     }
    // }, [confirmar])
    

    // const finalizar =()=>{
    //     SetConfirmar(true)
    // }


  return (
    <>
        <H1>Listado de compras</H1>
        <Container sx={{width:"400px"}}>
            <TextField
            autoFocus
            margin="dense"
            id="compra"
            name="compra"
            label="id de compra"
            type="text"
            fullWidth
            value={search}
            variant="standard"
            onChange={handlerOnChange}
            />
            <Stack direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between" >
                <Button onClick={finalizar} variant="contained" color="success">Ver compra</Button>
                <Button onClick={limpiar} variant="contained" color="error">Limpiar</Button>
            </Stack>            
            {loading ? 
            <CircularProgress sx={{ margin: "10% auto", display: "flex", alignItems: "center", justifyContent: "center" }} />
            : show? < SeeBuy ventas={ventas}  />
            // <div>
            //     <Title>Nombre: {ventas.buyer.name}</Title> 
            //     <Title>Email: {ventas.buyer.email}</Title> 
            //     <Title> Detalle de productos:</Title>
            //     {ventas.items.map(prod =>
            //     <Stack direction={{ xs: 'column' }}
            //     alignItems="start"
            //     margin="10px"
            //     spacing={{ xs: 1, sm: 2, md: 2 }} key={prod.id}>
            //         <Text>Producto: {prod.title}</Text>
            //         <Text>Cantidad: {prod.quantity}</Text>
            //     </Stack>
            //     )}
            //     <Price>TOTAL: ${ventas.total}</Price>
            //     <Button onClick={limpiar} variant="contained" color="error">Limpiar</Button>
            // </div>
            :  confirmar && !show? <h2>no se han encontrado ventas para ese id</h2> : <h2>Ingrese id para ver su compra</h2>}
        </Container>        
        {/* <Link to={`${search}`} style={{ textDecoration: 'none', color: "white" }}>
            <Button variant="contained" color="error">Ver compra</Button></Link> */}
    </>
  )
}




const Image = styled.img`
  width: 40%;
  margin: 10px 5px;
`;


const Title = styled.h1`
  font-weight: 200;
  color: white;
`;

const H1 = styled.h1`
  font-weight: 300;
  text-align:center;
  color:white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  text-align:center;
`;

const Text = styled.h3`
  font-weight: 200;
  fontsize: 20px;
`