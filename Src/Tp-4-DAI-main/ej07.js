import { countries, currencies } from 'country-data';

function obtenerMoneda(codigoPais) {
  const pais = countries[codigoPais];
  if (!pais) return "País no encontrado";

  const codigoMoneda = pais.currencies[0];
  const moneda = currencies[codigoMoneda];

  return moneda ? moneda.name : "Moneda no encontrada";
}

console.log(obtenerMoneda("AR")); 
