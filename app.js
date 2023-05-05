//Pedido de variables
/* let name = prompt("Bienvenido! Ingrese su nombre")
let surname = prompt("Ingrese su apellido")
let wealth = Number(prompt("Ingrese su saldo")) */
//Pedido de variables

//Saludo Inicial
/* const saludo = function saludar(){
    return `Hola, ${name}`
}
saludo()
console.log(saludo()) */
//Saludo Inicial


//Función estado de cuenta
/* const AccountStatus = function UserAccount(){
    return `Estado de la cuenta:
    Nombre: ${name}
    Apellido: ${surname}
    Saldo Disponible: ${wealth}`
}
AccountStatus()
console.log(AccountStatus()) */
//Función estado de cuenta

//administrador de gastos mensuales fijos
/* const Alquiler = 30000
const Alimentos = 20000
const CuotaGimnasio = 4000
const Luz = 5000
const Agua = 2000
const Internet = 3000

while(wealth>0){
    console.log(`Alquiler: ${wealth} - ${Alquiler} 
    = ${wealth - Alquiler}`)
    console.log(`Alimentos: ${wealth - Alquiler} - ${Alimentos} 
    = ${wealth - Alquiler - Alimentos}`)
    console.log(`Cuota de Gimnasio: ${wealth - Alquiler - Alimentos} - ${CuotaGimnasio} 
    = ${wealth - Alquiler - Alimentos - CuotaGimnasio}`)
    console.log(`Luz: ${wealth - Alquiler - Alimentos - CuotaGimnasio} - ${Luz} 
    = ${wealth - Alquiler - Alimentos - CuotaGimnasio - Luz}`)
    console.log(`Agua: ${wealth - Alquiler - Alimentos - CuotaGimnasio - Luz} - ${Agua} 
    = ${wealth - Alquiler - Alimentos - CuotaGimnasio - Luz - Agua}`)
    console.log(`Internet: ${wealth - Alquiler - Alimentos - CuotaGimnasio - Luz - Agua} - ${Internet} 
    = ${wealth - Alquiler - Alimentos - CuotaGimnasio - Luz - Agua - Internet}`)
    break
}

console.log(`Gastos totales: ${Alquiler+Alimentos+CuotaGimnasio+Luz+Agua+Internet}`)
console.log(`Dinero libre y disponible para tí: ${wealth-Alquiler-Alimentos-CuotaGimnasio-Luz-Agua-Internet}`) */
//Administrador de gastos mensuales fijos

//Pedido de Variables por Prompt
/* let nombre = prompt("Bienvenido! Ingrese su nombre")
let apellido = prompt(`Ingresa tu apellido, ${nombre}`)
let monto = Number(prompt(`Hola, ${nombre}. Ingresa el monto de dinero que quieres administrar`)) */



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