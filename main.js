
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

let maderas = []
let maderaCalculada = maderas.find((el) => el.nombre); 
let totalPies = maderas.find((los) => los.pies)

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

    if (isNaN(madera.cantidad)||isNaN(madera.largo)||isNaN(madera.ancho||isNaN(madera.grosor))) {
        alert("Por favor, ingresá valores numéricos")
    } 
    else {
        maderas.push(madera)
        alert(`La cantidad de ${maderaCalculada} que necesitás, son ${totalPies} pies.`)    
    }

    let respuesta = confirm("¿Querés calcular otra madera?")

    if (respuesta==false) {
            break}

}

console.table(maderas);

alert("Muchas gracias!")




