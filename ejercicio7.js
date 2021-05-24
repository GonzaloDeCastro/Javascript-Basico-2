/*
7.- Crear una función que reciba como parámetro un string y que devuelva la cantidad
de vocales que posee.
*/
var contador, oracion;
oracion
contador = 0;
function palabra(a){
    oracion = a.length;
    a = a.split('');
    for (i=0; i<oracion; i++){
        if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
            contador = contador + 1;
        }     
    }
    return contador;
}

palabra('mermelada con queso');

console.log(contador);