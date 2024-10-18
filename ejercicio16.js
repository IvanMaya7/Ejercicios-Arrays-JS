let docentes = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Juan", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let res = docentes.find(maestro => maestro.nombre === "Juan");
console.log(res);