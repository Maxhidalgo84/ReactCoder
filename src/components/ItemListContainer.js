import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
       <h1 style={styles.h1}>{greeting}</h1>
        )
}

export default ItemListContainer

const styles = {
    h1: {
        textAlign: "center",

    }
}