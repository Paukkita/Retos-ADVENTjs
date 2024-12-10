/* Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario. */

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let altura=box.length;
    let anchura=box[0].length;

    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < anchura; j++) {
            if (box[i][j]==="*") {
                //Reviso en los bordes
                if (i === 0 || i === altura - 1 || j === 0 || j === anchura - 1) {
                    if (box[i][j + 1] === "#" || box[i][j - 1] === "#" || box[i + 1] && box[i + 1][j] === "#" || box[i - 1] && box[i - 1][j] === "#") {
                        return false;
                    }
                }
                //Verifico si hay # al lado
                if ((box[i + 1][j] === "#" || box[i + 1][j] === " ") && 
                    (box[i - 1][j] === "#" || box[i - 1][j] === " ") &&
                    (box[i + 1][j + 1] === "#" || box[i + 1][j + 1] === " ") && 
                    (box[i - 1][j - 1] === "#" || box[i - 1][j - 1] === " ") &&
                    (box[i][j + 1] === "#" || box[i][j + 1] === " ") && 
                    (box[i][j - 1] === "#" || box[i][j - 1] === " ")) {
                    return true; 
                }
            }
        }
    }
    return false;
}

console.log(
    inBox([
        "###",
        "#*#",
        "###"
    ]) );
// ➞ true

console.log( inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]) );

// ➞ false

console.log( inBox([
    "#####",
    "#   #",
    "#  *#",
    "#####"
]) );

//true

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // ➞ false);
