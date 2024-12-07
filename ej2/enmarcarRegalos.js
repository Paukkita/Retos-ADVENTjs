/* Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado. */ 

/**
     * @param {string[]} names - Array of names to frame
     * @returns {string} The framed names
**/
const nombres = ["Pau", "José", "Renato"];

function createFrame(names) {
     let marco = "";
     let maximo = 0;

    //Bucle para encontrar el nombre mas largo para saber cuantos asteriscos poner
     for (const nombre of names) {
          if (nombre.length > maximo) {
               maximo = nombre.length;
          }
     }

    // Bucle para crear el marco
     for (let i = 0; i < names.length + 2; i++) { 
          if (i === 0 || i === names.length + 1) { 
               marco += "*".repeat(maximo + 4) + "\n"; 
          } else {
               const nombre = names[i - 1]; 
                marco += `* ${nombre.padEnd(maximo, " ")} *\n`;
          }
     }

     return marco;
}

console.log(createFrame(nombres));
