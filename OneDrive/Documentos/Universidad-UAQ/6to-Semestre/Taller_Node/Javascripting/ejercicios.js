

const palabras = ["gatos", "perro", "elefante", "jirafa"];
const longitudes = palabras.map(palabra => palabra.length);
console.log(longitudes); 


const numero = [3, 7, 2, 10, 5];
const num = numero.map(numero => numero*2);
console.log(num); 



const nombres = ["ana", "juan", "maría", "carlos"];
const nombresmayus = nombres.map(nombre => nombre.toLocaleUpperCase());
console.log(nombresmayus); 



const numeros = [3, 7, 1, 9, 4];
const sumnum = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(sumnum);



const palabras2 = ["Hola", "a", "todos"];
const cadena = palabras2.join(" ");
console.log(cadena);


const numeros2 = [8, 14, 2, 25, 5];
const nummin = Math.min(...numeros2);
console.log(nummin);


const numeros3 = [1, 4, 7, 8, 10, 13];
const pares = numeros3.filter(num => num%2===0);
console.log(pares);


const palabras3 = ["manzana", "perro", "codorniz", "papaya"];
const palabrasConA = palabras3.filter(palabra => palabra.includes("a") );
console.log(palabrasConA);


const edades = [21, 51, 52, 64, 25, 38, 72];
const menoresDe50 = edades.filter(edad => edad>=50)
console.log(menoresDe50);