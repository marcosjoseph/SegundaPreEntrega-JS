
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

alert ("Bienvenido al calculador de Pies de Madera!")

let calcularMadera = true;

while (calcularMadera) {
    let nombre = prompt("Por favor ingresa el nombre de la madera")
    let cantidad = parseFloat(prompt("ingresá la cantidad de listones que necesitas"))
    let largo = parseFloat(prompt("ingresá el largo en cm"))
    let ancho = parseFloat(prompt("ingresá el ancho en cm"))
    let grosor = parseFloat(prompt("ingresá el grosor en cm"))

    let madera = new Madera (nombre, cantidad, largo, ancho, grosor);

    if (isNaN(cantidad)||isNaN(largo)||isNaN(ancho)||isNaN(grosor)) {
        alert("Por favor, ingresá valores numéricos")
    } 
    else {
        maderas.push(madera)
        alert(`La cantidad de ${madera.nombre} que necesitás, son ${madera.pies} pies.`)    
    }

    let respuestaCalcularOtra = confirm("¿Querés calcular otra madera?")
    if (respuestaCalcularOtra==false) {
            break}
}

let consultarMadera = true;

while (consultarMadera) {
    let respuestaConsultar = confirm("¿Querés consultar si ya has ingresado una madera?")
    if (respuestaConsultar==false) {break};

    let nombreConsultar = prompt("Ingresá el nombre de la madera a buscar")
    if (maderas.find ((el) => el.nombre == nombreConsultar)) {
        alert (`Ya has ingresado los valores de ${nombreConsultar}`)
    } 
    else {
        alert (`No se ha ingresado ninguna madera con el nombre de ${nombreConsultar}`)}
    } 

console.table(maderas);

alert("Muchas gracias!")




