# vps: Aplicacion para admnistrar Aplicaciones

*vps* funciona como administrador de aplicaciones, si quieres que varias aplicaciones funcionen en el mismo puerto, este modulo es la solución.

*vps* sera proximamente un modulo de npm bajo el mismo nombre.

## Y como lo instalo ?

    $ git clone https://github.com/BrianCraig/vps.git
	$ cd vps
	$ npm install

## Ahora, cuales son los requisitos ?

Por ahora, los requisitos son los siguientes

* El puerto 80 abierto
* (opcional DNS) El puerto 53 abierto
* El puerto 8080 y 8081 libres para la interfaz ( 8080 para express, y 8081 para socket.io ) 

## Como lo inicio y lo manejo ?

Para iniciarlo, ve a la carpeta donde lo instalaste

	$ node ./
	
Para manejarlo, ve a http://127.0.0.1:8080 y eso que ves, es la "interfaz grafica"

## Bien, ahora que pongo en ese formulario? no entiendo nada :/

Para probar, rellena el fromulario con

* carpeta : ejemplo1
* host : 127.0.0.1

Presiona en agregar App, y añade otro mas

* carpeta : ejemplo2
* host : :Aqui pon tu IP privada o Pública:

Ahora, apareceran dos grupos, cada uno seria una carpeta dentro de la carpeta servidores, con una aplicación, Apreta el boton "Iniciar el proceso" para iniciar cada proceso.

Si vas a 127.0.0.1:80, se mostrra un servidor, y si vas a {La IP que pusiste}:80, ira a la aplicación del segundo proceso

## No quiero ser forro, pero tu interfaz es una cagada

Toda ayuda es bienvenida :) 