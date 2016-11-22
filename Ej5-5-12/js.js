var funcion = function () {
	texto = document.getElementById('campo1');
	p = document.getElementById('escritor');
	texto_escrito = function (e) {
	/*p.innerHTML = texto.value;*/
	p.style.background-color = this.value;
}
	texto.addEventListener('input', texto_escrito);
}

