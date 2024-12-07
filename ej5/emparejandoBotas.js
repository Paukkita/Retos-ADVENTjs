/* Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. 
Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño! */


/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */

//Funcion para organizar los zapatos
function organizeShoes(shoes) {
    if (shoes===undefined) {
        return [];
    }
    //Declaro el array con las botas organizadasñ
    let botasOrganizadas = [];
    //Logica para filtrar las botas correctamente
    shoes.forEach(bota => {
        shoes.forEach(b => {
            if (bota.size === b.size && bota.type !== b.type) {
                botasOrganizadas.push(bota.size);
                let indice=shoes.findIndex(elemento=>elemento===bota);
                shoes.splice(indice,1)
                let indice2=shoes.findIndex(elemento=>elemento===b);
                shoes.splice(indice2,1)
            }
        });
    });
    return botasOrganizadas;
}


const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
console.log(organizeShoes(shoes));
  // [38, 42]

  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
 
  console.log(organizeShoes(shoes2));
   // [38, 38]