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


export const SeeBuy = ({ventas}) => {

    // const [ventas, setVentas] = useState({});
    // const [error, setError] = useState(false);
    // const [show, setShow] = useState(false)

    // const {find} = useParams()

    // useEffect(() => {
    //     const ventasCollection= collection(db,"ventas");
    //     const refDoc = doc(ventasCollection, "4XQpcpg0bzag2as5KFze");
    //     getDoc(refDoc)
    //     .then((res) => {
    //         const product = {
    //             id: res.id,
    //             ...res.data()
    //         }
    //         setVentas(product)
    //         console.log(ventas);
    //     })
    //     .catch(()=>{
    //         setError(true);
    //     })
    //     .finally(()=>{
    //         setTimeout(() => {
    //             setShow(true)
    //         }, 1500) 
    //     })
    // }, [find])
    
    // console.log(ventas.total);
    return (
        <Container sx={{ padding: 5, display: "flex", textAlign: "center" }}>
            {/* {ventas.total>100? */}
            <div>
                <Title>Nombre: {ventas.buyer.name}</Title> 
                <Title>Email: {ventas.buyer.email}</Title> 
                <Title> Detalle de productos:</Title>
                {ventas.items.map(prod =>
                <Stack direction={{ xs: 'column' }}
                alignItems="start"
                margin="10px"
                spacing={{ xs: 1, sm: 2, md: 2 }} key={prod.id}>
                    <Text>Producto: {prod.title}</Text>
                    <Text>Cantidad: {prod.quantity}</Text>
                </Stack>
                )}
                <Price>TOTAL: ${ventas.total}</Price>
            </div>
            {/* : "no se han encontrado ventas"} */}
        </Container>
                

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

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const Price = styled.span`
  font-weight: 100;
  color:white;
  font-size: 40px;
`;

const Text = styled.h3`
  font-weight: 200;
  color:white;
  fontsize: 20px;
`