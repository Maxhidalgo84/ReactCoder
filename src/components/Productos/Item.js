import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { AddShoppingCart } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Item({ producto: { id, title, imagen, price, description1, description2 } }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                title="Zapatillas"
                subheader="En Stock"
            />
            <CardMedia
                component="img"
                height="194"
                image={imagen}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description1}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton title="Añadir al carrito">

                    <AddShoppingCart />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Descripcion:</Typography>
                    <Typography paragraph>
                        {description2}

                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
