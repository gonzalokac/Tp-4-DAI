// index.js

console.log("========== EJ01 ==========");
const { concatenar, interpolar } = require("./ej01");
console.log("Concatenado:", concatenar("Hola", "Mundo"));
console.log("Interpolado:", interpolar("Juan", "Pérez"));

console.log("\n========== EJ02 ==========");
const { PI, sumar, restar, multiplicar, dividir } = require("./ej02");
console.log("PI:", PI);
console.log("2 + 5 =", sumar(2, 5));
console.log("10 - 3 =", restar(10, 3));
console.log("4 * 6 =", multiplicar(4, 6));
console.log("20 / 4 =", dividir(20, 4));

console.log("\n========== EJ03 ==========");
const crearAlumnos = require("./ej03");
crearAlumnos(); // imprime alumnos adentro del módulo

console.log("\n========== EJ04 ==========");
const { copiar } = require("./ej04");
copiar("entrada.txt", "salida.txt");

console.log("\n========== EJ05 ==========");
const { parsearUrl } = require("./ej05");
const url = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
console.log(parsearUrl(url));

console.log("\n========== EJ06 ==========");
const { parsearUrlConExcepcion } = require("./ej06");
try {
  console.log(parsearUrlConExcepcion(url));
} catch (e) {
  console.error("Error capturado:", e.message);
}

console.log("\n========== EJ07 ==========");
const { obtenerMoneda } = require("./ej07");
obtenerMoneda("AR").then((moneda) => {
  console.log("Moneda de AR:", moneda);
});
