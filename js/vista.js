const Vista = function(controlador) {
    this.controlador = controlador,
    this.modelo = controlador.modelo
};

Vista.prototype.inicializar = function(){
    this.listarProductos();
    const self = this;

    //Buscamos el elemento favoritos y le registramos al evento click, la funcionalidad de mostrar todos los favoritos
    $('.contenedor-favoritos').find(".favoritos").click(function() {
        self.mostrarFavoritos();
    });
    
}

Vista.prototype.listarProductos = function(){
    const listaProductos = this.modelo.productos;
    const self = this;
    const elementos = [];

    $(".flex").empty();

    if (listaProductos.length === 0) {
        elementos.push($("<span/>").attr("class", "alerta").html("No se encontraron productos"));
    } else {
        //Por cada producto, se ejecuta la función crearTarjetaDeProducto()
        listaProductos.forEach(function(producto) {
            elementos.push(self.crearTarjetaDeProducto(producto));
        });
    }

    //Se agrega cada elemento al contenedor de productos.
    elementos.forEach(function(elemento) {
        elemento.appendTo(".flex");
    })
}

//Función que se encarga de crear todos los elementos HTML necesarios para poder visualizar un producto
Vista.prototype.crearTarjetaDeProducto = function(producto) {
    const self = this;
    let icono = "img/nofavorito.png";

    // Creamos el elemento de producto, asignandole cada atributo del producto que corresponda
    if (producto.favorito){
        icono = "img/favorito.jpg";
    }

    const card = $(`
    <div class="flex-item" id=${producto.id}>
        <img class="imagen" src="${producto.imagen}">
        <div class="informacion">
            <div class="nombre-favorito-container">
                <h4 class="nombre">${producto.nombre}</h4>
                <div class="favorito-container">
                <img class="favorito" src="${icono}">
                </div>
            </div>
        </div>
    </div>
    `);

    //Buscamos el elemento imagen y le registramos al evento click, la funcionalidad demostrar el detalle del producto
    card.find(".imagen").click(function() {
        self.mostrarProducto(producto);
    });

    //Buscamos el elemento favorito y le registramos al evento click, la funcionalidad de modificar la condicion de favorito
    card.find(".favorito").click(function() {
        self.cambiarFavorito(producto);
    });

    return card;
}

Vista.prototype.cambiarFavorito = function(producto) {
    this.controlador.cambiarFavorito(producto.id);
    this.listarProductos();
}

Vista.prototype.mostrarFavoritos = function() {
console.log("Muestra Favoritos")
}

Vista.prototype.mostrarProducto = function(producto) {
    console.log("Muestra Detalle")
}
