import { collection, addDoc } from "firebase/firestore";
import productos from "../components/Productos/ProducData.js"
import { db } from "../Firebase/Firebase.js";


productos.forEach((obj) => {
    const docRef =  addDoc(collection(db, "products"),{
        title: obj.title,
        imagen1: obj.imagen1,
        imagen2: obj.imagen2,
        imagen3: obj.imagen3,
        description1: obj.description1,
        description2: obj.description2,
        price: obj.price,
        categoria: obj.categoria
    })
    console.log("Document written with ID: ", docRef.id);
});