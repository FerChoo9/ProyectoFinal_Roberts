

/* Esta primera parte consiste en definir un array vacío, capturar el botón submit y crear con él, un evento */
/* El botón submit servirá de base para el envío de datos hacia el Local Storage */

/* Se establece la escucha de un evento que está a la espera de un click sobre el botón */
/* Capturamos los tres inputs del HTML donde se volcarán los datos */
/* De estos inputs sólo usaremos el .value */
/* A medida que ingresemos datos, el evento crearé primero un objeto y luevo lo enviará a un array */
/* El cual, automáticamente se almacenará en el local storage */

let deudas = [];

function constructor(nombre, precio, clase){
    this.nombre = nombre,
    this.precio = precio,
    this.clase = clase
}

let analisisObjetos = [];


const submitbutton = document.querySelector("#submitbutton")
submitbutton.addEventListener("click", (e) => {
    

    let nuevoObjeto = new constructor(nombre = document.querySelector("#nombre").value, precio = parseFloat(document.querySelector("#precio").value), clase = document.querySelector("#clase").value)
    console.log(nuevoObjeto)
    
    deudas.push(nuevoObjeto)
    console.log(deudas)

    let nuevoDiv = document.createElement("div")
    nuevoDiv.setAttribute("style", `display: flex; width: auto; margin-bottom: 10px;`)

    let nuevoUl = document.createElement("ul")
    nuevoUl.setAttribute("style", `display: flex; list-style: none; margin-bottom: 10px;`)
    nuevoUl.innerHTML=
    `
    <li style="margin-left: 10px;">${nuevoObjeto.nombre}</li>
    <li style="margin-left: 10px;">${nuevoObjeto.precio}</li>
    <li style="margin-left: 10px;">${nuevoObjeto.clase}</li>
    `
    let nuevoBoton = document.createElement("button")
    nuevoBoton.textContent="Eliminar"
    nuevoBoton.setAttribute("style", `display: flex; margin-left: 15px; border: 1px solid whitesmoke; border-radius: 3px; padding: 3px 3px 0 3px;`)
    nuevoBoton.addEventListener("click", () => {

        JSON.parse(localStorage.getItem("deudas"))

        deudas.splice(deudas.indexOf(nuevoObjeto), 1)

        localStorage.setItem("deudas", toJSON)

        nuevoDiv.remove()
    })

    nuevoDiv.appendChild(nuevoUl)
    nuevoDiv.appendChild(nuevoBoton)
    document.querySelector(".reservadoObjetos").appendChild(nuevoDiv)

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

    let sumaTotal = deudas.reduce((acc, deudas) => {
        return acc + deudas.precio
    }, 0)
    console.log(sumaTotal)

    let monto = document.querySelector("#monto").value
    let porcentaje = (sumaTotal*100)/monto
    console.log(porcentaje)

    

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


    let grafica = document.createElementNS(svgNS, "circle")
    grafica.innerHTML =
    grafica.setAttribute("r", "100")
    grafica.setAttribute("cx", "50%")
    grafica.setAttribute("cy", "50%")
    grafica.setAttribute("style", `fill: none;stroke: darkcyan;stroke-width: 40px;stroke-dasharray: ${porcentaje}, 100; transform-origin: 50%; transform: rotate(-90deg);`)
    grafica.setAttribute("class", "animacionGrafica")
    graficoCircular.appendChild(grafica)

    grafica.setAttribute("pathLength", 100)
    graficoCircular.appendChild(grafica)


    const descripcion1 = document.querySelector("#h3modificable")
    let h3decripcion = document.createElement("h3")
    h3decripcion.innerHTML=
    `
    Estás consumiendo el ${Math.round(porcentaje)}% de tus ingresos.
    `
    descripcion1.appendChild(h3decripcion)
    

    //analisis por objeto

    
    deudas.forEach(deudas => {
        let objetoColores = {color: "#"+Math.ceil(Math.random()*1000000), precio: deudas.precio, porcentaje: Math.round(deudas.precio*100/(document.querySelector("#monto").value))}
        console.log(objetoColores)
        analisisObjetos.push(objetoColores)
    })

    analisisObjetos.forEach(analisisObjetos => {
        let nuevoContenedor = document.createElement("div")
        let nuevoAnalisis = document.createElement("ul")
        nuevoAnalisis.setAttribute("style", `display: flex; list-style: none;`)
        nuevoAnalisis.innerHTML=
        `
        <li><div style="width: 20px; height: 20px; background-color: ${analisisObjetos.color};margin-bottom: 10px; margin-right: 20px;"></div></li>
        <li style="margin-bottom: 10px; margin-right: 20px;">${analisisObjetos.precio}</li>
        <li style="margin-bottom: 10px; margin-right: 20px;">${analisisObjetos.porcentaje}%</li>
        `
        document.querySelector(".analisisEscrito").appendChild(nuevoContenedor)
        nuevoContenedor.appendChild(nuevoAnalisis)
    })



    const graficoCircular2 = document.querySelector("#svgGraphic2")
    const graficaBordeExt2 = document.createElementNS(svgNS, "circle")
    graficaBordeExt2.innerHTML =
    graficaBordeExt2.setAttribute("r", "121");
    graficaBordeExt2.setAttribute("cx", "50%"); 
    graficaBordeExt2.setAttribute("cy", "50%");
    graficaBordeExt2.setAttribute("pathlength", "100");
    graficaBordeExt2.setAttribute("style", `fill:none; stroke: whitesmoke; stroke-width: 2px; stroke-dasharray: 100, 0; transform-origin: 50%; transform: rotate(-90deg);`)
    graficoCircular2.appendChild(graficaBordeExt2)

    const graficaBordeInt2 = document.createElementNS(svgNS, "circle")
    graficaBordeInt2.innerHTML =
    graficaBordeInt2.setAttribute("r", "79");
    graficaBordeInt2.setAttribute("cx", "50%");
    graficaBordeInt2.setAttribute("cy", "50%");
    graficaBordeInt2.setAttribute("pathlength", "100");
    graficaBordeInt2.setAttribute("style", `fill:none; stroke: whitesmoke; stroke-width: 2px; stroke-dasharray: 100, 0; transform-origin: 50%; transform: rotate(-90deg);`)
    graficoCircular2.appendChild(graficaBordeInt2)


    let sumaPorcentajes = analisisObjetos.reduce((acc, analisisObjetos, index) => {
        return acc+= analisisObjetos.porcentaje*index
    }, 0)

    analisisObjetos.forEach(analisisObjetos => {
        let nuevoGrafico = document.createElementNS(svgNS, "circle")

        nuevoGrafico.innerHTML=
        nuevoGrafico.setAttribute("r", "100")
        nuevoGrafico.setAttribute("cx", "50%")
        nuevoGrafico.setAttribute("cy", "50%")
        nuevoGrafico.setAttribute("style", `fill: none; stroke: ${analisisObjetos.color}; stroke-width: 40px; stroke-dasharray: ${((analisisObjetos.porcentaje)*360)/100}, 360; transform-origin: 50%; transform: rotate(${-90+ sumaPorcentajes }deg);`)

        graficoCircular2.appendChild(nuevoGrafico)

        nuevoGrafico.setAttribute("pathLength", 360)
        graficoCircular2.appendChild(nuevoGrafico)
    })
})