import React from 'react';
import Grid from '@mui/material/Grid';
import Item from './Item';
import { Container } from '@mui/material';


export const ItemList = ({products}) => {
    return (
        <Container sx={{mx:"auto"}}>
            <Grid container spacing={2}>
                {products.map((producto) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={producto.id}>
                        <Item key={producto.id} producto={producto} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}




