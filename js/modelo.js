const Modelo = function(){
    this.productos = []

    this.recuperarProductos();
};

Modelo.prototype.guardarProductos = function(){
    localStorage.setItem("productos", JSON.stringify(this.productos));
}

Modelo.prototype.recuperarProductos = function(){
    const elementos = JSON.parse(localStorage.getItem("productos"));

    if (elementos === null){
        this.cargarListado();
    } else {
        this.productos = elementos;
    }
}

Modelo.prototype.cargarListado = function() {
    const self = this;

    listNombres.forEach(function(elemento, index){
        const imagen = 'img/product' + (index+1) + '.png';
        let favorito = false;

        if (index === 1){
            favorito = true;
        }

        const producto = new Producto(index, elemento, precios[index],stock[index],detalles[index],imagen,favorito);

        self.productos.push(producto);
    })
};

Modelo.prototype.cambiarFavorito = function(idProducto){
    const self = this;

    this.productos.forEach(function(elemento, index){
        if (elemento.id === idProducto) {
            if (elemento.favorito){
                elemento.favorito = false;
            } else {
                elemento.favorito = true;
            };
        };
    })

    this.guardarProductos();
}

