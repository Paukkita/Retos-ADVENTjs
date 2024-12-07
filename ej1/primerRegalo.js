/* Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.*/

/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */

//Primero tendremos que tener una lista de regalos que sera un array de numeros

const regalos=[9,8,7,1,5,2,2,7,8,9,1,2]
function prepareGifts(gifts) {
    // Code here
    //Primero tendremos que eliminar los duplicados
    const regalosSinDuplicados=[...new Set(gifts)]
    //Luego devolvemos este nuevo array con los valores ordenados de forma ascendente
    return regalosSinDuplicados.sort((n1,n2)=>n1-n2);
}

console.log(prepareGifts(regalos));
