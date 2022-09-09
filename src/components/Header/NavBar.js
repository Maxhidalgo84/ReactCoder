import React from "react";
import logojordan from "../../assets/logojordan.png";
import { AppBar, Link } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CartWidget from "./CartWidget";
import Container from '@mui/material/Container';


const navItems = [
    { id: 0, nombre: 'Home' },
    { id: 1, nombre: 'Quienes somos' },
    { id: 2, nombre: 'Contacto' },
]
//const navItems = ['Home', 'Quienes somos', 'Contacto'];

const styles = {
    root: {
        flexGrow: 1,
    },

    appBar: {

        borderBottom: "1px solid",
        borderBottomColor: "black",
        backgroundColor: "white",
        boxShadow: "none",
        color: "black",
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    banner: {
        fontSize: "1.5rem",
        textAlign: "center",
        marginLeft: "10%",
        marginRight: "10%",
    },
    img: {
        maxWidth: 100,
        height: "2rem",
    },
}

export default function NavBar({ titulo }) {

    return (
        <AppBar position="static" style={styles.appBar}>
           <Container maxWidth="xl"> 
            <Toolbar style={styles.toolbar}>
                <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
                    <img style={styles.img} src={logojordan} alt="jordan" title="HOME" />
                </IconButton>
                <div style={styles.banner}>
                    {titulo}

                </div>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.id}>
                            <Link href="#" underline="none" color="black">{item.nombre}</Link>
                        </Button>
                    ))}
                </Box>
                <CartWidget />
            </Toolbar>
            </Container>
        </AppBar>
       
    )
}

