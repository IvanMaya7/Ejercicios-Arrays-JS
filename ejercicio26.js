let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

function ord(...arreglos) {
    let combinados = [].concat(...arreglos);

    return combinados.sort(function(a, b) {
        return a - b;
    });
}

let res = ord(array1, array2, array3);
console.log(res); 
