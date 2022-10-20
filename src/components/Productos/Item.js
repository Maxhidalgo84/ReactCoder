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
import { useCartContext } from '../../Context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Item({ producto: { id, title, imagen1, price, description1, categoria,stock,talles } }) {

    // const { addItem } = useCartContext();

    // const shopItem = () => {
    //     MySwal.fire({
    //         title: "Listo!",
    //         text: `Se agrego ${description1} al carrito`,
    //     });
    //     addItem({ id, title, imagen1, price, description1, categoria, stock,talles },1);        
    // }

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
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                {/* <IconButton onClick={()=>shopItem()} title="Añadir al carrito">
                    <AddShoppingCart  />
                </IconButton> */}
                
                    <Link to={`producto/${id}`} style={{ textDecoration: 'none', color: "white" }}><Button variant="contained" color="error">Mas detalles</Button></Link>
              
            </CardActions>
        </Card>
    );
}
