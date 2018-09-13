const Modelo = function(){
    this.productos = [];
    this.favoritos = [1];

    this.recuperarProductos();
};

Modelo.prototype.guardarProductos = function(){
    this.favoritos = [];

    const self = this;

    this.productos.forEach(function(elemento, index){
        if (elemento.favorito){
            self.favoritos.push(elemento.id);
        };
    });

    localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
}

Modelo.prototype.recuperarProductos = function(){
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));

    if (favoritos !== null){
        this.favoritos = favoritos;
    }

    this.cargarListado();
}

Modelo.prototype.cargarListado = function() {
    const self = this;

    listNombres.forEach(function(elemento, index){
        const imagen = 'img/product' + (index+1) + '.png';

        let favorito = false;
        
        if (self.favoritos.indexOf(index) >= 0){
            favorito = true;
        };

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

