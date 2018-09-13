const modelo = new Modelo();

const controlador = new Controlador(modelo);

const vista = new Vista(controlador, true);

vista.inicializar();