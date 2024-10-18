let a = [1, 2, 3, 2, 4, 2, 5];
let valorB = 2;

function contar(arreglo, valorB) {
    return arreglo.reduce(function(contador, elemento) {
        return elemento === valorB ? contador + 1 : contador;
    }, 0);
}

let res = contar(a, valorB);
console.log(res);
