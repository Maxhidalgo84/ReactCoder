import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { AddShoppingCart } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


export default function Item({ producto: { id, title, imagen1, price, description1, categoria } }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <Typography
                        variant="h5"
                        color="textSecondary"
                    >
                        ${price}

                    </Typography>
                }
                title={categoria}
            />
            <CardMedia
                component="img"
                height="194"
                image={imagen1}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description1}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton title="Añadir al carrito">
                    <AddShoppingCart />
                </IconButton>
                
                    <Link to={`producto/${id}`} style={{ textDecoration: 'none', color: "white" }}><Button variant="contained" color="error">Mas detalles</Button></Link>
              
            </CardActions>
        </Card>
    );
}
