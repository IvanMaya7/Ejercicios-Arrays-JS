let personas = [
    { nombre: "Ivan", edad: 19 },
    { nombre: "Diego", edad: 3000 },
    { nombre: "Jona", edad: 22 }
];

let nombres = personas.map(function(persona) {
    return persona.nombre;
});

console.log(nombres);
