var socket;
window.onload = function(){
io;
socket = io.connect(document.domain+':8081');
  socket.on('nuevaApp', function (data) {
    //console.log(data);
    
	socket.emit('iniciar', data.hash);
  });
}




/*
socket.emit('nuevaApp',{
'carpeta':'ejemplo1',
'dominios':['127.0.0.1']
})
*/


















/*
var Apps = {};
var App = function(objeto){
this.carpeta = objeto.carpeta || ''; // Nombre de la carpeta, requerido
this.estado = objeto.estado || false; //Estado ( prendido o apagado )
this.nombre = objeto.nombre || '';
this.descripcion = objeto.descripcion || '';
this.memoria = objeto.memoria || 0; // Ram usada
this.dominios = objeto.dominios || [];
this.puerto = objeto.puerto || 0; // puerto interno usado


this.elemento = {
padre,color,nombre,descripcion,memoria,dominios,boton;
}

}
App.prototype.crear = function(){
var elemento = {};
elemento.padre = document.createElement('article');
elemento.color = document.createElement('div');
elemento.nombre = document.createElement('h2');
elemento.descripcion = document.createElement('span');
elemento.memoria = document.createElement('span');
elemento.dominios = document.createElement('span');
elemento.boton = document.createElement('button');

elemento.color.className="top";
elemento.padre.appendChild(elemento.color);

elemento.padre.appendChild(document.createElement(''));
}
App.prototype.actualizar = function(){}
App.prototype.eliminar = function(){}
*/