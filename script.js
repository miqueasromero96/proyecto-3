"use strict"
var valor = document.getElementById("valor");
// detecto el evento cuando se escribe un numero
// llamo a la funcion convertir
valor.addEventListener('Keyup', convertir);
 var txtResultado = document.getElementById("resultado");

 let unidad1 = document.getElementById("unidad1");
// detecto el evento cuando se selecciona una unidad
unidad1.addEventListener('change',convertir);
 let unidad2 = document.getElementById("unidad2");
// detecto el evento cuando se selecciona una unidad
unidad2.addEventListener('change',convertir);

// variable donde se calcula el resultado

var resultado;


// funcion que realiiza el calculo

function convertir(){
	// caso de que no haya nada en el input
	if (valor.value=='') {
		return;
	}
// tomo el numero del input y lo convierto a numerico
	 let numero = valor.value;
	  numero = parseFloat(numero);

	if (unidad1.value=="Kilometro" && unidad2.value=="Kilometro"){
		resultado = numero * 1;
		txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + "Kilometro/s";
	}
	if (unidad1.value=="Kilometro" && unidad2.value=="Metro"){
		resultado = numero * 1000;
		txtResultado.innerHTML = numero + " Kilometro equivalen a " + resultado + "Metro/s";
	}
	if (unidad1.value=="Kilometro" && unidad2.value=="Centimetros"){
		resultado = numero * 10000;
		txtResultado.innerHTML = numero + " Kilometro equivalen a " + resultado + "Centimetros";
	}


	if (unidad1.value=="Metro" && unidad2.value=="Kilometro"){
		resultado = numero / 1;
		txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + "Kilometro/s";
	}
	if (unidad1.value=="Metro" && unidad2.value=="Metro"){
		resultado = numero * 1;
		txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + "Metro/s";
	}
	if (unidad1.value=="Metro" && unidad2.value=="Centimetros"){
		resultado = numero * 100;
		txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + "Centimetros";
	}


		if (unidad1.value=="Centimetros" && unidad2.value=="Kilometro"){
		resultado = numero / 100000;
		txtResultado.innerHTML = numero + " Centimetros equivalen a " + resultado + "Kilometro/s";
	}
	if (unidad1.value=="Centimetros" && unidad2.value=="Metro"){
		resultado = numero / 100;
		txtResultado.innerHTML = numero + " Centimetros equivalen a " + resultado + "Metro/s";
	}
	if (unidad1.value=="Centimetros" && unidad2.value=="Centimetros"){
		resultado = numero * 1;
		txtResultado.innerHTML = numero + " Centimetros equivalen a " + resultado + "Centimetros";
	}
}

