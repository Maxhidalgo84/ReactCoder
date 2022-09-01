import React from "react";
import logojordan from "../assets/logojordan.png";
import { AppBar, Badge } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from "@mui/icons-material";
import Box from '@mui/material/Box';

const navItems = ['Home', 'Quienes somos', 'Contacto'];

const styles = {
    root: {
        flexGrow: 1,
        marginBottom: "10rem",

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

export default function NavBar() {

    return (
        <div style={styles.root}>
            <AppBar position="fixed" style={styles.appBar}>
                <Toolbar style={styles.toolbar}>
                    <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
                        <img style={styles.img} src={logojordan} alt="jordan" title="HOME" />
                    </IconButton>
                    <div style={styles.banner}>
                        Las mejores Zapatillas de Jordan!!!

                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'black' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <div>
                        <Button variant="outlined">LogIn
                        </Button>
                        <IconButton >
                            <Badge color="secondary">
                                <ShoppingCart fontSize="large" />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

