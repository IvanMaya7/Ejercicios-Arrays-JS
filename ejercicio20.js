const a = [1, 2, 3,];

const suma = a.reduce((acumulador, valorInicial) => {
    return acumulador * valorInicial;
}, 1);

console.log(suma);
