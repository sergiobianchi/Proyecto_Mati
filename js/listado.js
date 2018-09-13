// Aca vamos a crear los productos que despues vamos a utilizar.

const listNombres = ['Pc Mac', 'Auriculares', 'Pc Mac Otro Modelo', 'Tablet', 'Auriculares Grises', 'Pc MSI color negro', 'Celular', 'Pc Asus', 'Camara de fotos'];
const detalles = ['Maquina Pro','Auriculares supe','Otra compu', 'Tableta multi', 'Super auriculares', 'CPU ', 'Celular', 'PC', 'Camara']
const precios = [45000, 2000, 37000, 1500, 4000, 16000, 8000, 22000, 999];
const stock = [1,42, 3, 200, 342, 10, 100, 6, 0]



const Producto = function(id, nombre, precio, stock, detalle, imagen, favorito){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock,
    this.detalle = detalle,
    this.imagen = imagen,
    this.favorito = favorito
}

