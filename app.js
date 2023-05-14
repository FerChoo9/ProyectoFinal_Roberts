
//Función creadora de cuenta
 function cuenta(nombre, apellido, monto){
    this.nombre = nombre
    this.apellido = apellido
    this.monto = monto
}
cuenta()

const cuentaUsuario = new cuenta(prompt(`Bienvenido! Ingrese su nombre`), 
prompt(`Perfecto! Ingresa tu apellido`), 
Number(prompt(`Ingresa el monto de dinero que quieres administrar`)))
console.log(cuentaUsuario) 

//consigna
alert(`La consigna es la siguiente, ${cuentaUsuario.nombre}`)
alert(`Ingresas el nombre que le quieras asignar a tus gastos y luego, el monto de dinero que cuesta. Por ejemplo: "Alquiler".`)


//Ciclo: genera un array con las deudas que el usuario quiera
console.log("lista de deudas:")
const deudas = [];

while(true){
    let tituloDeuda = prompt(`Ingrese titulo de su deuda o escriba "ESC" para finalizar`);
    if (tituloDeuda == "ESC" || tituloDeuda == "esc") {
        break;        
    };

    let precioDeuda = Number(prompt(`Ingrese el precio de la deuda`));

    const deuda = {
        titulo: tituloDeuda,
        precio: precioDeuda
    };
    deudas.push(deuda);
}
console.log(deudas);

//Análisis: Se analizan porcentajes de cada deuda
console.log("análisis de datos");

//gastos totales
console.log("gastos totales")

let totalGastos = 0

let sumaTotal = deudas.reduce((accum, deuda) => {
    return accum + deuda.precio
}, 0);
console.log(sumaTotal)

//porcentajes

console.log("porcentaje de sueldo destinado")

let total = cuentaUsuario.monto
function porcentaje(precio, total){
    return (precio*100)/total
}

const calculoPorcentaje = deudas.map((deuda) => {
    return{
        nombre: deuda.titulo,
        porcentajes: porcentaje(deuda.precio, total)
    }
})
console.log(calculoPorcentaje)