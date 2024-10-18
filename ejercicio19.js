const a = [1, 2, 3, 4, 5, 500];

const suma = a.reduce((acumulador, valorInicial) => {
    return acumulador + valorInicial;
}, 0);

console.log(suma);
