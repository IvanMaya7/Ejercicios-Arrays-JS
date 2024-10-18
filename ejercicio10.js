let a = [1, 2, 3, 4, 5];

function porDos(array) {
    return array.map(function(num) {
        return num * 2;
    });
}

let res = porDos(a);
console.log(res);
