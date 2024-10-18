let calificaciones=[10, 10, 10, 10, 9];

function calcularCalificacion(calificaciones){
    res= calificaciones.reduce((previus, current)=> {
        return (previus + current);}, 0);
    r=res/5;
    console.log("Tu calificacion final es ", r);
}
calcularCalificacion(calificaciones);