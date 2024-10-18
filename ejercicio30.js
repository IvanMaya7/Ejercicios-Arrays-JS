let a1 = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 }
];

let a2 = [
    { ciudad: "Madrid" },
    { ciudad: "Barcelona" }
];

let combinado = a1.map(function(objeto, indice) {
    return { ...objeto, ...a2[indice] };
});

console.log(combinado);
