/* ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.

Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos: */

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    // Code here
    const arrayLetras=packages.split("");
    let letrasDesordenadas=[];
    let packagesOrganizado=[];
    let indice=0;
    let final=0;
    console.log(arrayLetras);
    for (let i = 0; i < arrayLetras.length; i++) {
        if (arrayLetras[i]==="(") {
            indice=i;
        }else if(arrayLetras[i]===")"){
            final=i;
        }else{
            packagesOrganizado.push(arrayLetras[i])
        }
    }
    letrasDesordenadas=arrayLetras.slice(indice+1,final).reverse();
    console.log(letrasDesordenadas);
    console.log(packagesOrganizado);
    packagesOrganizado.splice(indice,letrasDesordenadas.length,letrasDesordenadas.join(""));
    console.log(packagesOrganizado);
    
    return packagesOrganizado.join("")
  }

  function fixPackages2(packages) {
    // Code here
    let parentesis=0
        function girarString(str){
            return str.split("").reverse().join("");
        }
    }
    

console.log( fixPackages('a(cb)de'));

 
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis


 console.log(fixPackages2('a(bc(def)g)h'));


// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages2('abc(def(gh)i)jk'));


// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed" 