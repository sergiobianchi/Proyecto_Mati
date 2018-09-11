const Vista = function(controlador) {
    this.controlador = controlador,
    this.modeloContenedor = $("#contenedor-productos-modelo"),
    this.contenedorProductos = $("#contenedor-productos")
};

Vista.prototype.mostrarProductos = function(){
    const listaProductos = this.controlador.productos;
    const self = this;

    $('.lista').remove();

    for (let i = 0;i < listaProductos.length;i++){
        const nuevoElemento = self.modeloContenedor.clone();
        nuevoElemento.addClass("lista")
        const titulo = nuevoElemento.find("#titulo");
        const imagen = nuevoElemento.find("#imagen");
        const favorito = nuevoElemento.find("#favorito");

        titulo[0].innerText = listaProductos[i].nombre;
        imagen[0].src = listaProductos[i].imagen;

        if (listaProductos[i].favorito){
            favorito[0].src = "favorito.png"
        } else {
            favorito[0].src = "nofavorito.png"
        }
        
        nuevoElemento.removeAttr('hidden');
        self.contenedorProductos.append(nuevoElemento);

    }
    
}