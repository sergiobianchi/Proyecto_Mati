const Controlador = function(modelo) {
    this.modelo = modelo
}

Controlador.prototype.cambiarFavorito = function(idProducto){
    this.modelo.cambiarFavorito(idProducto);
}
