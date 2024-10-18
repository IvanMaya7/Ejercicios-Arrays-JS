let a = [1, 2, 3, 4, 5];
let valor = 3;

function enco(a, valor) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === valor) {
            return i;
        }
    }
    return -1;
}

let indice = enco(a, valor);
console.log(indice);
