const PI = 3.1416;

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "No se puede dividir por cero";

export { PI, sumar, restar, multiplicar, dividir };
