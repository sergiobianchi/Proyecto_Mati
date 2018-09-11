const Modelo = function(){
    this.productos = []

};

Modelo.prototype.inicializar = function() {
    for (let i = 0; i < listNombres.length; i++ ){
        const imagen = 'img/product' + (i+1) + '.png';
        let favorito = false; 

        if (i === 1){
            favorito = true; 
        }
        
        const producto = new Producto(listNombres[i], precios[i],stock[i],detalles[i],imagen,favorito);

        this.productos.push(producto);
    }
};