
const Madera= function (nombre, cantidad, largo, ancho, grosor){
    const pie = 30;
    const pulgada = 2.54;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.largo = largo;
    this.ancho = ancho;
    this.grosor = grosor;
    this.pies = parseFloat((cantidad * (largo/pie) * (ancho/pulgada) * (grosor/pie)).toFixed(2));

    if (isNaN(this.pies)) {
        alert("Por favor, ingresá valores numéricos")
    }
}

let maderas = []

alert ("Bienvenido al calculador de Pies de Madera!")

let calcularOtraMadera = true;

while (calcularOtraMadera) {

    let madera = new Madera (
        prompt("Por favor ingresa el nombre de la madera"),
        parseFloat(prompt("ingresá la cantidad de listones que necesitas")),
        parseFloat(prompt("ingresá el largo en cm")),
        parseFloat(prompt("ingresá el ancho en cm")),
        parseFloat(prompt("ingresá el grosor en cm"))
    );

    maderas.push(madera);

    let respuesta = confirm("¿Querés calcular otra madera?")

    if (respuesta==false) {
            break}

}

console.table(maderas);

alert("Muchas gracias!")


