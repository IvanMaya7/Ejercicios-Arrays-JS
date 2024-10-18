let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function par(array) {
    return array.filter(function(num) {
        return num % 2 === 0;
    });
}

let pares = par(a);
console.log(pares);