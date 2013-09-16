var crypto = require('crypto');
var puertos = require('./app.puerto.js');
var proceso = require('./app.proceso.js');
var io = require('./app.io.js');
var proxy = require('./app.proxy.js');



var Apps = {};
var App = function(objeto){
this.carpeta = objeto.carpeta || ''; // Nombre de la carpeta, requerido
this.estado = objeto.estado || false; //Estado ( prendido o apagado )
this.memoria = objeto.memoria || 0; // Ram usada
this.dominios = objeto.dominios || [];
this.puerto = objeto.puerto ? puertos.agregarPuerto(objeto.puerto) : puertos.nuevoPuerto() ; // Es medio complicado, en fin es que puerto se usa
this.hash = crypto.randomBytes(20).toString('hex');
Apps[this.hash] = this;
for(x in this.dominios)
	proxy.agregar(this.dominios[x],this.puerto);
return this;
}


exports.nuevaApp = function(objeto){
/*
 Teniendo un nombre de carpeta correcta, se crea la app. se debe normalizar el objeto. Se le agregan los dominios al proxy.  
*/
return new App(objeto);
};
exports.quitarApp = function(hash){
/*
Si el hash es correcto, empezar cerrando el proceso (?, luego eliminar los dominios de el proxy, agregar el puerto ( puertos.agregarPuerto() )
Eliminar del Apps, enviar a IO que se elimino la App
*/
if(!Apps[hash])return 0;
for(x in Apps[hash].dominios)
	proxy.quitar(Apps[hash].dominios[x]);
proceso.kill(hash);
puertos.agregarPuerto(Apps[hash].puerto);
delete Apps[hash];
exports.emitir('quitarApp',hash);

};
exports.emitir = function(a, b){ // emitir
	io.emitir(a, b);
};
exports.iniciarApp=function(hash){
	if(!Apps[hash])return 0;
	if(Apps[hash].estado)return 0; // el proceso ya se encuentra activo, PONELE
	proceso.nuevo(Apps[hash])
}
exports.terminarApp=function(hash){
	proceso.cerrar(hash);
}
exports.Apps = Apps; 


