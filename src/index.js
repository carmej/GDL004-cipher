let mensaje = document.getElementById("obtener_mensaje");
let offset = document.getElementById("offset"); 

function Entrar() {
	document.getElementById("root").style.display="none";
	document.getElementById("cifrarDescifrar").style.display="block";
 } 
 document.getElementById('botonEntrar').addEventListener('click', Entrar);

function cifrarPorClick(){
	desplazamiento=parseInt(offset.value);
	let mensajeACifrar=mensaje.value;
	let resultado = window.cipher.encode(desplazamiento, mensajeACifrar);
	document.getElementById("resultado").innerHTML=resultado;
}
document.getElementById("CIFRAR").addEventListener("click", cifrarPorClick);


function descifrarPorClick(){
	desplazamiento=parseInt(offset.value);
	let mensajeADescifrar=mensaje.value;
	let resultado=window.cipher.decode(desplazamiento, mensajeADescifrar);
	document.getElementById("resultado").innerHTML=resultado;
}
let botonDescifrar = document.getElementById("DESCIFRAR");
botonDescifrar.addEventListener("click", descifrarPorClick)

