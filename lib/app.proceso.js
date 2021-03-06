var App = require('./app.js');
var io = require('./app.io.js');


var spawn = require('child_process').spawn; // Spawneador
var procesos = {}; // lista de procesos activos, ordenada por hash

var proceso = function (app) { // crear un nuevo proceso
    this.app = app;
    this.carpeta = app.carpeta;
    this.hash = app.hash;
    procesos[this.hash] = this; // agregarlo a la lista
    this.puerto = app.puerto;

    this.alcerrar = function () { // funcion ejecutada al cerrarse
        io.emitir('estado', [this.hash, 'terminado']);
        this.app.estado = false;
        delete procesos[this.hash];
    }.bind(this);

    this.aldatos = function (data) { // funcion ejecutada al tener datos
        io.emitir('consola', [this.hash, '' + data]);
    }.bind(this);

    //Creamos el proceso hijo, y le asignamos los eventos
    this.proceso = spawn(process.execPath, ['./servidores/' + this.carpeta + ''], {
        'env': {
            'PORT': this.puerto
        }
    });
    this.proceso.stdout.on('data', this.aldatos)
    this.proceso.stderr.on('data', this.aldatos)
    this.proceso.on('close', this.alcerrar);
    this.proceso.on('error', this.alcerrar);
    // Emitimos al publico que iniciamos la aplicacion
    io.emitir('estado', [this.hash, 'iniciado']);
    this.app.estado = true;

}



exports.nuevo = function (app) {
    new proceso(app);
}
exports.cerrar = function (hash) { //enviar una señal de cierre
    try {
        var proceso = procesos[hash];
        proceso.proceso.kill(); // SIGTERM 
    } catch (e) {}
}
exports.kill = function (hash) { // matar el proceso
    try {
        var proceso = procesos[hash];
        proceso.proceso.kill('SIGKILL'); // SIGKILL
    } catch (e) {}
}
