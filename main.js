
const Madera= function (nombre, cantidad, largo, ancho, grosor){
    const pie = 30;
    const pulgada = 2.54;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.largo = largo;
    this.ancho = ancho;
    this.grosor = grosor;
    this.pies = parseFloat((cantidad * (largo/pie) * (ancho/pulgada) * (grosor/pie)).toFixed(2));
}

let maderas = [];

alert ("Bienvenido al calculador de Pies de Madera!")

let madera1 = new Madera (
    prompt("Por favor ingresa el nombre de la madera"),
    parseFloat(prompt("ingresá la cantidad de listones que necesitas")),
    parseFloat(prompt("ingresá el largo en cm")),
    parseFloat(prompt("ingresá el ancho en cm")),
    parseFloat(prompt("ingresá el grosor en cm"))
);

console.table(maderas);


