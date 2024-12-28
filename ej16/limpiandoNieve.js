/* Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️.
Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.
Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.
Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados: */

/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    let letra = ""; 
    //Declarro una variable que me servirá para hacer un bucle infinito para comprobar si se repiten letras
    let limpio=false;
    //Separo la palabra en un array de letrass
    s=s.split("");
    //Bucle que se recorrera al menos una vez
    do{
        limpio=true;
        //bucle para recorrer todo el array de letras
        for (let i = 0; i < s.length; i++) {
            //asigno a la variable letras el valor actual de la posicion del array
            letra=s[i];
            //compruebo la siguiente posicion para comprobar si se repiten letras en ese caso el array estara "sucio" por lo que al acabar de recorrer volvera a comprobar si esta "limpio"
            if (letra===s[i+1]) {
                limpio=false;
                //elimino las letras del array con splice eliminado las  dos letras marcadas
                s.splice(i,2)
            }
            
        }
    }while(!limpio)
    return s.join("");
}
console.log(removeSnow('zxxzoz')); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd'));// -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz'));// -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')); // -> "a"
// No hay montículos repetidos