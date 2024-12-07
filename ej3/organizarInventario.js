/* Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. 
Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.
 */

/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
//Funcion para organizar el inventario
function organizeInventory(inventory) {
    // Code here
    let inventarioOrganizado=[];
    //Si el array esta vacio devuelve un array vacio
    if (inventory === undefined) {
        return [];
    //Por el contrario si contiene algo entonces devolvera un array sin objetos repetidos el cual acumule la cantidad correctamente
    }else{
        //Logica de filtrado
        inventory.forEach((objeto) => {
            let objetoExistente=inventarioOrganizado.find(o=>o.name===objeto.name);
            if (objetoExistente) {
                objetoExistente.quantity+=objeto.quantity;
            }else{
                inventarioOrganizado.push({...objeto});
            }
        });
        return inventarioOrganizado;
    
    }
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory));

