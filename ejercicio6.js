/*
6.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra DE CADA PALABRA convertida a mayúscula.
*/

var oracion;
oracion = '';
function palabra(a){
    a = a.split(' ');
    for (i=0; i<a.length; i++){
    oracion = oracion +' '+a[i].substring(0,1).toUpperCase()+a[i].substring(1);   
    }
    return oracion;
    
}

console.log(palabra('mermelada con queso'));
