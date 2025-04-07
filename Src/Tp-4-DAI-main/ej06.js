import { URL } from 'url';

function parsearUrl(urlString) {
  try {
    const url = new URL(urlString);
    const parametros = Object.fromEntries(url.searchParams.entries());

    return {
      host: `${url.protocol}//${url.host}`,
      pathname: url.pathname,
      parametros
    };
  } catch (error) {
    console.error("Error al parsear la URL:", error.message);
  }
}

const resultado = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(resultado);
