import React, { useState } from 'react'
import { Container, Box } from '@mui/material'
import styled from '@emotion/styled';
import ItemCount from '../ItemCount';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCartContext } from '../../Context/CartContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


const MySwal = withReactContent(Swal)

export const ItemDetail = ({ listproduct }) => {

  const medidas = listproduct.talles

  const { addItem } = useCartContext();
  const [enCarrito,setEnCarrito] = useState(false)
  const [size, setSize] = useState("");
  const [stocks, setStocks] = useState("");
  const [show, setShow] = useState(false);
  
  const handleChange = (e) => {
    setSize(e.target.value[0]);
    setStocks(e.target.value[1])
    setShow(true)
  };

  const onAdd = (count) => {
    MySwal.fire({
      title: "Listo!",
      text: `Se agregan ${count} al carrito`,
    });
    addItem(listproduct,count,size);
    setEnCarrito(true)
    
  }


  return (
    // <Container sx={{ padding: 5, display: "flex", textAlign: "center" }}>
    <>
    <H1>Detalle del producto</H1>
    <Stack direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            textAlign="center"
            margin="10px"
            spacing={{ xs: 1, sm: 2, md: 5 }} >       
      <Box sx={{ maxwidth: 600 }}>
      <Grid container spacing={1} justifyContent="space-around" >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Image src={listproduct.imagen1} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Image src={listproduct.imagen2} />
        </Grid>  
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Image src={listproduct.imagen3} />
        </Grid> 
      </Grid>   
      </Box>
      <DataContainer sx={{margin:"200px auto"}}>
            <Title>{listproduct.title}</Title>
            <Desc>
              {listproduct.description2}
            </Desc>
            <Price>Precio: ${listproduct.price}</Price>
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Talle</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={medidas.length ? [size,stocks] : ""}
            label="Talle"
            onChange={handleChange}
          >
            {Object.entries(medidas).map(([variante, value])=> (
            <MenuItem key={variante} value={[variante,value]}>{variante}</MenuItem>))}
          </Select>
        </FormControl>
        </div>
        {!show ? 
        <h2>elija un talle</h2>
        : stocks > 1 ?  
            <Box sx={{ width: "50%", margin: "0 auto" }}>
              <p>Talle: {size}</p>
              <p>Stock: {stocks}</p>
              <ItemCount initial={1} stock={stocks} onAdd={onAdd} enCarrito={enCarrito} />
            </Box>
        : "Sin Stock"}
      </DataContainer>      
    </Stack>
    </>
  )
}

const H1 = styled.h1`
  text-align:center;
  color: white;
`;

const Image = styled.img`
  width: 100%;
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

const DataContainer = styled.div`
margin: 15px;
text-align:center;
`;
