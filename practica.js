

/* Esta primera parte consiste en definir un array vacío, capturar el botón submit y crear con él, un evento */
/* El botón submit servirá de base para el envío de datos hacia el Local Storage */

/* Se establece la escucha de un evento que está a la espera de un click sobre el botón */
/* Capturamos los tres inputs del HTML donde se volcarán los datos */
/* De estos inputs sólo usaremos el .value */
/* A medida que ingresemos datos, el evento crearé primero un objeto y luevo lo enviará a un array */
/* El cual, automáticamente se almacenará en el local storage */

let deudas = [];

const submitbutton = document.querySelector("#submitbutton")


submitbutton.addEventListener("click", (e) => {
    const inputNombre = document.querySelector("#nombre").value;
    const inputPrecio = parseInt(document.querySelector("#precio").value)
    const inputClase = document.querySelector("#clase").value;
    
    let nuevoObjeto = {
        nombre: inputNombre,
        precio: inputPrecio,
        clase: inputClase
        
    }
    
    console.log(nuevoObjeto)
    
    deudas.push(nuevoObjeto)
    console.log(deudas)
    
    const formulario = document.querySelector("#formulario")
    formulario.reset()
    
    const toJSON = JSON.stringify(deudas)
    console.log(toJSON)
    
    const toLocalStorage = localStorage.setItem("deudas", toJSON)
    
})

/*  */
/*  */

const analisis = document.querySelector("#analisis")
const svgNS = "http://www.w3.org/2000/svg";

analisis.addEventListener("click", (e) => {
    const itemsSuma = JSON.parse(localStorage.getItem("deudas"))
    console.log(itemsSuma)
    
    const sumaTotal = deudas.reduce((acc, deudas) => {
        return acc += acc + deudas.precio
    }, 0);
    console.log(sumaTotal)
    let monto = document.querySelector("#monto").value


    
/*     let porcentaje = (sumaTotal*100)/monto + '%'
    console.log(porcentaje) */

    const graficoCircular = document.querySelector("#ByNamee")
    const graficaBordeExt = document.createElementNS(svgNS, "circle")
    graficaBordeExt.innerHTML =
    graficaBordeExt.setAttribute("r", "121");
    graficaBordeExt.setAttribute("cx", "50%");
    graficaBordeExt.setAttribute("cy", "50%");
    graficaBordeExt.setAttribute("pathlength", "100");
    graficaBordeExt.setAttribute("style", `fill:none; stroke: whitesmoke; stroke-width: 2px; stroke-dasharray: 100, 0; transform-origin: 50%; transform: rotate(-90deg);`)
    graficoCircular.appendChild(graficaBordeExt)

    const graficaBordeInt = document.createElementNS(svgNS, "circle")
    graficaBordeInt.innerHTML =
    graficaBordeInt.setAttribute("r", "79");
    graficaBordeInt.setAttribute("cx", "50%");
    graficaBordeInt.setAttribute("cy", "50%");
    graficaBordeInt.setAttribute("pathlength", "100");
    graficaBordeInt.setAttribute("style", `fill:none; stroke: whitesmoke; stroke-width: 2px; stroke-dasharray: 100, 0; transform-origin: 50%; transform: rotate(-90deg);`)
    graficoCircular.appendChild(graficaBordeInt)

    let ayudaGrafico = (monto-sumaTotal)
    console.log(ayudaGrafico)

    let grafica = document.createElementNS(svgNS, "circle")
    grafica.innerHTML =
    grafica.setAttribute("pathlength", monto)
    grafica.setAttribute("r", "100")
    grafica.setAttribute("cx", "50%")
    grafica.setAttribute("cy", "50%")
    grafica.setAttribute("style", `fill:none; stroke: darkcyan; stroke-width: 40px; stroke-dasharray: ${sumaTotal}, ${monto-sumaTotal}; transform-origin: 50%; transform: rotate(-90deg);`)
    graficoCircular.appendChild(grafica)
})