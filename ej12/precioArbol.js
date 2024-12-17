/* Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄.
Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

*: Copo de nieve - Valor: 1
o: Bola de Navidad - Valor: 5
^: Arbolito decorativo - Valor: 10
#: Guirnalda brillante - Valor: 50
@: Estrella polar - Valor: 100
Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.
 */

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    let total = 0; 
    let actual = "";
    let proximo="";
    for (let i = 0; i < ornaments.length; i++) {
        proximo= ornaments[i + 1]|| 0; 
        actual=ornaments[i];
        if (actual < proximo) {
            if (actual==="*") {
                total--;
            }else if(actual=="o"){
                total-=5;
            }else if(actual=="^"){
                total-=10;
            }else if(actual=="#"){
                total-=50;
            }else if(actual=="@"){
                total-=100;
            }
        } else {
            if (actual==="*") {
                total++;
            }else if(actual=="o"){
                total+=5;
            }else if(actual=="^"){
                total+=10;
            }else if(actual=="#"){
                total+=50;
            }else if(actual=="@"){
                total+=100;
            }
        }
    }
    return total;
}
console.log(calculatePrice('***') ); // 3   (1 + 1 + 1)
console.log(calculatePrice('o*')  ); // 6   (5 + 1)
console.log(calculatePrice('*o*'));// 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')); // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***') );// 8   (5 + 3)
console.log(calculatePrice('#@') );  // 50  (-50 + 100)


