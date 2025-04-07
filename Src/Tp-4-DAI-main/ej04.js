import fs from 'fs';

function copiar(origen, destino) {
  fs.copyFile(origen, destino, (err) => {
    if (err) {
      console.error("Error al copiar:", err);
    } else {
      console.log(`Archivo copiado de ${origen} a ${destino}`);
    }
  });
}

copiar("entrada.txt", "salida.txt");
