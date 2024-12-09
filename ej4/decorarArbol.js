/* ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea. */

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    /* Code here */
    let arbol="";
    let planta="\n";
    let tronco="";
    let ancho=height;
    let ornamentosTotales=1;

    if (height>100|| height<0) {
        return "La altura debe ser entre (0-100)"
    }
    if (/[a-zA-Z0-9]/.test(ornament)) {
        return "El ornamento debe ser un caracter especial, "+ornament+" no es un caracter especial."
    }
    for (let i = 0; i < height; i++) {
        planta+="_".repeat(ancho) + ornament.repeat(ornamentosTotales) + "_".repeat(ancho)+"\n";
        ornamentosTotales+=2;
        ancho--;
    }

    tronco="_".repeat(height) + "#" + "_".repeat(height)+"\n"+"_".repeat(height) + "#" + "_".repeat(height );

    arbol=planta+tronco
    return arbol;
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
