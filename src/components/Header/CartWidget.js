import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';



const CartWidget = () => {
    return (
        <div>
            <Button variant="outlined">LogIn
            </Button>
            <IconButton >
                <Badge badgeContent={0} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </div>

    )
}

export default CartWidget