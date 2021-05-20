/*
3.- Al Array del ejercicio anterior utilizarlo para:
e.- Recorrer el array utilizando el bucle while (usar la propiedad length del array
en la condición) y guardar los valores en una variable del tipo string
concatenandolos. Mostrar el valor de la variable al final.
*/

var frutas = ["naranja","manzana","pera"], oracion,i;
oracion = "";
i = 0;

while (i<frutas.length){
    oracion=oracion+frutas[i];
    i++;
}

alert(oracion);