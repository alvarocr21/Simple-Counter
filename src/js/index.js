//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
let myTime = setInterval(enviar, 1000);
let contar = 0;
function enviar() {
	let numCadena = contar.toString();
	let numChar1 = "";
	let numChar2 = "";
	let numChar3 = "";
	let numChar4 = "";
	let numChar5 = "";
	let numChar6 = "";
	let numChar7 = "";

	if (numCadena.length > 0) {
		//numChar7 = numCadena.substring(numCadena.length - 1, numCadena.length);
		numChar7 = numCadena.charAt(numCadena.length - 1);
	}
	if (numCadena.length > 1) {
		numChar6 = numCadena.charAt(numCadena.length - 2);
	}
	if (numCadena.length > 2) {
		numChar5 = numCadena.charAt(numCadena.length - 3);
	}
	if (numCadena.length > 3) {
		numChar4 = numCadena.charAt(numCadena.length - 4);
	}
	if (numCadena.length > 4) {
		numChar3 = numCadena.charAt(numCadena.length - 5);
	}
	if (numCadena.length > 5) {
		numChar2 = numCadena.charAt(numCadena.length - 6);
	}
	if (numCadena.length > 6) {
		numChar1 = numCadena.charAt(numCadena.length - 7);
	}

	//console.log(numChar6);
	contar++;
	ReactDOM.render(
		<Home
			num1={numChar1}
			num2={numChar2}
			num3={numChar3}
			num4={numChar4}
			num5={numChar5}
			num6={numChar6}
			num7={numChar7}
		/>,
		document.querySelector("#app")
	);
}
