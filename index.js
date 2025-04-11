
console.log("========== EJ01 ==========");
const { concatenar, interpolar } = require("./Src/Tp-4-DAI-main/ej01");
concatenar("Hola", "Mundo");
 interpolar("Juan", "Juan");

console.log("\n========== EJ02 ==========");
const { PI, sumar, restar, multiplicar, dividir } = require("./Src/Tp-4-DAI-main/Modulos/matematica");
console.log("PI:", PI);
console.log("2 + 5 =", sumar(2, 5));
console.log("10 - 3 =", restar(10, 3));
console.log("4 * 6 =", multiplicar(4, 6));
console.log("20 / 4 =", dividir(20, 4));

console.log("\n========== EJ03 ==========");
const Alumno = require("./Src/Tp-4-DAI-main/Modelos/alumno");
const alumno1 = new Alumno("lucas", 1234);
const alumno2 = new Alumno("nehuen",487654);
alumno1.Mostrar();
alumno2.Mostrar();

console.log("\n========== EJ04 ==========");
const { copiar } = require("./Src/Tp-4-DAI-main/ej04");
copiar("./entrada.txt", "./salida.txt");

console.log("\n========== EJ05 ==========");
const { parsearUrl } = require("./Src/Tp-4-DAI-main/ej05");
const url = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
console.log(parsearUrl(url));

console.log("\n========== EJ06 ==========");
const { parsearUrlConExcepcion } = require("./Src/Tp-4-DAI-main/ej06");
try {
  console.log(parsearUrlConExcepcion(url));
} catch (e) {
  console.error("Error capturado:", e.message);
}

console.log("\n========== EJ07 ==========");
const { obtenerMoneda } = require("./Src/Tp-4-DAI-main/ej07");

const moneda = obtenerMoneda("AR");
console.log("Moneda de AR:", moneda);

