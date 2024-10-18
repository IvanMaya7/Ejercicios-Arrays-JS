let suma =[];
let r=0;
let i=0;
let can = prompt('Ingrese la cantidad de numeros que desea sumar ');
while(i<can){
    num = parseInt( prompt('Escriba el numero '));
    suma.push(num);
    r=r+ parseInt(suma[i]);
    i++;
}
console.log('El resultado de la suma es ', r);