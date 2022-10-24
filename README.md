<h1 align="center"> Ecommerce Productos de Jordan </h1>

Descripción de su proyecto: Desarrollo de una pagina web de ecommerce de productos de Jordan, con carrito incluido realizada en React.

![una muestra de la pagina](https://github.com/Maxhidalgo84/ReactCoder/blob/main/MX%20Productos%20Jordan.gif)

>Link del proyecto: [Ir a la tienda]()

Cómo pueden usarlo los usuarios: Se puede aplicar para otros rubros, generando un ecommerce para otros rubros de productos o servicios. 

Funcionalidades: <ul>
                   <li>Catalogo de productos</li>
                   <li>Categoria de productis</li>
                   <li>Carrito de compras</li>
                   <li>Buscador de compras</li>
                 <ul>
## Componentes
Aca un resumen de los componentes que utilice: 

* NavBar  donde se realizo la barra de navegación, la misma maneja las búsquedas con el router
* itemsInListContainer aca se encuentra el listado de los items que se muestran en pantalla, se generan las card de cada uno en Item y se filtran los productos destacados o por categoria..
* ItemsinDetail amplía cada producto y brinda información detalladada al respecto, se pueden agregar los productos al carrito, ver el stock disponible.
*Cart: Se muestran los productos que van al carrito, detallando la cantidad, talle, precio total y luego al finalizar la compra se despliega un formulario de venta.

## Caracteristicas y herramientas:
#### Librerias

- `Icons Material:`
    - Para la utilización de iconos como DeleteIcon por ejemplo
    
- `Sweet Alert 2:`
    - Para crear alerts con mejor apariencia y utilidad, como al momento de realizar una compra, o dar aviso de algo al usuario.
    
- `React-router-dom:`
    - Se utliza para realizar la navegacion dentro de la pagina, creando rutas para identificar cada seccion, utilizando  **Link, Navigate, NavLink, etc.** 

- `Storage:`
    Para guardar los productos del carrito.   
    
- `Firebase:`
    - **FireStore:**
    Se realizo la base de datos en Firestore, donde tenemos almacenados por un lado todos los productos cada uno con su id, detalle como ser imagenes, precio, titulo, descripcion, etc,. Se pueden realizar consultas para traernos los productos filtrando por categoria o por id de producto, asi como tambien se guardan las ventas realizadas para mostrar todo de forma dinamica dentro de la aplicación.  
  
   
### Diseño
- Toda la app esta diseñada y maquetada con ***Material UI***
