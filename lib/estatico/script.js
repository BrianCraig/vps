var socket;
var $ = document.querySelector;
var $$ = document.querySelectorAll;

window.onload = function(){
document.querySelector('#crearApp').onclick = crearApp;
io;
socket = io.connect(document.domain+':8081');
  socket.on('nuevaApp', function (data) {
    new App(data);
  });
  socket.on('consola', function (data) {
	Apps[data[0]].consola(data[1]);
  });
  socket.on('apps',function(data){
	for(x in data)
		new App(data[x]);
  });
  socket.on('estado',function(data){
	if(data[1]==='iniciado')
		Apps[data[0]].iniciado();
	if(data[1]==='terminado')
		Apps[data[0]].terminado();
  });
  socket.on('quitarApp',function(data){
	Apps[data].quitado();
  });
}


var Apps = {};
var App = function(objeto){
this.hash = objeto.hash;
this.carpeta = objeto.carpeta || ''; // Nombre de la carpeta, requerido
this.estado = objeto.estado || false; //Estado ( prendido o apagado )
this.memoria = objeto.memoria || 0; // Ram usada
this.dominios = objeto.dominios || [];
this.puerto = objeto.puerto || 0; // puerto interno usado
this.ui = crearArticulo(this);
Apps[this.hash] = this;
return this;
};
App.prototype.iniciar = function(){
	socket.emit('iniciar', this.hash);
}
App.prototype.terminar = function(){
	socket.emit('terminar', this.hash);
}
App.prototype.iniciado = function(){
	this.estado = true;
	this.ui.estado.className = 'top activo';
	this.ui.boton.innerHTML = 'Terminar el proceso'
}
App.prototype.terminado = function(){
	this.estado = false;
	this.ui.estado.className = 'top';
	this.ui.boton.innerHTML = 'Iniciar el proceso'
}
App.prototype.quitar = function(){
	socket.emit('quitarApp', this.hash);
}
App.prototype.quitado = function(){
delete Apps[this.hash];
this.ui.elemento.parentNode.removeChild(this.ui.elemento);
}
App.prototype.consola = function(texto){
var p = document.createElement('p');
p.textContent=texto;
this.ui.pre.appendChild(p)
}


var fragmento = function (texto) {
    var div = document.createElement('div');
    div.innerHTML = texto;
    var div = div.childNodes[0];
    return div;
}
var crearArticulo = function(App){
var elemento = fragmento('<article><div class="quitar">quitar</div><div class="top'+(App.estado?' activo':'')+'"></div><header><h2>'+App.carpeta+'</h2></header><p><b>Hosts: </b>'+App.dominios.join(', ')+'</p><p><b>Puerto Real: </b>'+App.puerto+'</p><p><div class="boton">'+(App.estado?'Terminar':'Inicar')+' el proceso</div></p><pre></pre></article>');
var salida = {};
salida.elemento = elemento;
salida.estado = elemento.querySelector('.top');
salida.pre = elemento.querySelector('pre');
salida.quitar = elemento.querySelector('.quitar');
salida.quitar.setAttribute('data-hash',App.hash); 
salida.quitar.onclick = quitar;
salida.boton = elemento.querySelector('.boton');
salida.boton.setAttribute('data-hash',App.hash); 
salida.boton.onclick = boton;
document.querySelector('#aplicaciones').appendChild(elemento);
return salida;
}

function boton(){
var hash = this.getAttribute('data-hash');
Apps[hash].estado ? Apps[hash].terminar() : Apps[hash].iniciar();
}
function quitar(){
var hash = this.getAttribute('data-hash');
Apps[hash].quitar();
}

function crearApp(){
var salida = {};
salida.carpeta = document.querySelector('#carpeta').value;
salida.dominios = document.querySelector('#hosts').value.split(',');
socket.emit('nuevaApp',salida);
document.querySelector('#carpeta').value = '';
document.querySelector('#hosts').value = '';
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

