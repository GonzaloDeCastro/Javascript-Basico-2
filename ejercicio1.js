/*
1.- Completar las condiciones de los if del siguiente script para que los mensajes de los
alert se muestren de forma correcta.
var num1 = 5;
var num2 = 8;
if(...) {
alert("num1 no es mayor que num2");
}
if(...) {
alert("num2 es positivo");
}
if(...) {
alert("num1 es negativo o distinto de cero");
}
if(...) {
alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
}
*/

var num1 = 5;
var num2 = 8;

if (num1 <= num2){
    alert("num1 no es mayor que num2");
}
if(num2 > 0){
    alert("num2 es positivo");
}
if(num1 > 0 || num1 < 0){
    alert("num1 es negativo o distinto de cero");
}
if(num1 === num2){
    alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
}