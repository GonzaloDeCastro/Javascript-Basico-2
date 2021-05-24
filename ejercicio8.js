/*
8.- Dado el siguiente código determinar qué valores poseerán las variables miNumero y
miArray al final del script.
 */

function miFuncion(unNumero, unArray){
    resultado = ++unNumero;
    resultado2 = unArray.pop();
    return resultado+' '+resultado2;
    }
    var miNumero = 15;
    var miArray = ['Un texto', true, 4, 5];
    var resultado;
    var resultado2;
    
    console.log(miFuncion(miNumero, miArray));

    /*miNumero dara 16 al final del script ya que está sumandole 1 al valor dado que es 15 y miArray dará 5 ya que pop muestra el ultimo valor del array*/