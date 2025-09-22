/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function conversorUnidades(unidad, valor) {
    let metro, pie, pulgada, yarda;
    console.log(valor);
    console.log(isNaN(valor));

if (isNaN(valor) || valor === ""){
    alert("El valor ingresado no es un número");
    return;
} else {

if (unidad=="unid_metros"){
    metro=valor;
    pie=3.28*metro;
    pulgada=39.37*metro;
    yarda=1.09*metro;
} else if (unidad=="unid_pulgadas"){
    pulgada=valor;
    metro=pulgada/39.37;
    pie=3.28*metro;
    yarda=1.09*metro;
} else if (unidad=="unid_pie"){
    pie=valor;
    metro=pie/3.28;
    pulgada=39.37*metro;
    yarda=1.09*metro;
} else if (unidad=="unid_yardas"){
    yarda=valor;
    metro=yarda/1.09;
    pie=3.28*metro;
    pulgada=39.37*metro;
}

    // Mostrar resultados en la misma página
    mostrarResultadosConversion(metro, pie, pulgada, yarda, unidad, valor);
}
}

/**
 * Función para mostrar los resultados de conversión
 * @method mostrarResultadosConversion
 * @param metro - valor en metros
 * @param pie - valor en pies
 * @param pulgada - valor en pulgadas
 * @param yarda - valor en yardas
 * @param unidadOriginal - unidad original seleccionada
 * @param valorOriginal - valor original ingresado
 */
function mostrarResultadosConversion(metro, pie, pulgada, yarda, unidadOriginal, valorOriginal) {
    const resultadosDiv = document.getElementById('resultados');
    if (resultadosDiv) {
        let unidadTexto;
        switch(unidadOriginal) {
            case 'unid_metros': unidadTexto = 'metros'; break;
            case 'unid_pie': unidadTexto = 'pies'; break;
            case 'unid_pulgadas': unidadTexto = 'pulgadas'; break;
            case 'unid_yardas': unidadTexto = 'yardas'; break;
        }
        
        resultadosDiv.innerHTML = `
            <h3>Resultados de conversión para ${valorOriginal} ${unidadTexto}:</h3>
            <p><strong>Metros:</strong> ${metro.toFixed(4)}</p>
            <p><strong>Pies:</strong> ${pie.toFixed(4)}</p>
            <p><strong>Pulgadas:</strong> ${pulgada.toFixed(4)}</p>
            <p><strong>Yardas:</strong> ${yarda.toFixed(4)}</p>
        `;
        resultadosDiv.style.display = 'block';
    }
}

/**
 * Función para navegar a la segunda página con el valor convertido
 * @method irASegundaWeb
 */
function irASegundaWeb() {
    const distancia = document.getElementById('distancia').value;
    const unidad = document.querySelector('select[name="unidades"]').value;
    
    if (distancia && !isNaN(distancia)) {
        // Guardar en localStorage para transferir a la segunda página
        localStorage.setItem('distanciaConvertida', distancia);
        localStorage.setItem('unidadOriginal', unidad);
        
        // Navegar a la segunda página
        window.location.href = 'segundaWeb.html';
    } else {
        alert('Por favor, ingrese una distancia válida');
    }
}

/**
 * Función helper para realizar la conversión cuando cambian los valores
 * @method realizarConversion
 */
function realizarConversion() {
    const distancia = document.getElementById('distancia').value;
    const unidad = document.querySelector('select[name="unidades"]').value;
    
    if (distancia && !isNaN(distancia) && distancia !== '') {
        conversorUnidades(unidad, parseFloat(distancia));
    }
}

/**
 * Función para cargar datos en la segunda página
 * @method cargarSegundaWeb
 */
function cargarSegundaWeb() {
    const distancia = localStorage.getItem('distanciaConvertida');
    const unidad = localStorage.getItem('unidadOriginal');
    
    if (distancia && unidad) {
        let unidadTexto;
        switch(unidad) {
            case 'unid_metros': unidadTexto = 'metros'; break;
            case 'unid_pie': unidadTexto = 'pies'; break;
            case 'unid_pulgadas': unidadTexto = 'pulgadas'; break;
            case 'unid_yardas': unidadTexto = 'yardas'; break;
        }
        
        const inputDist = document.getElementById('dist');
        if (inputDist) {
            inputDist.value = `${distancia} ${unidadTexto}`;
        }
        
        // Limpiar localStorage después de usar
        localStorage.removeItem('distanciaConvertida');
        localStorage.removeItem('unidadOriginal');
    }
}

let convertirGR = (id, valor) => {
    let cantGrados, cantRadianes;
    if(id=="grados"){
        cantGrados = valor;
        cantRadianes = (Math.PI/180)*cantGrados;
        document.getElementById("radianes").value=cantRadianes;
    } else if (id=="radianes"){
        cantRadianes = valor;
        cantGrados = (180/Math.PI)*cantRadianes;
        document.getElementById("grados").value=cantGrados;
    }
}

/**
 * Función para mostrar u ocultar un div
 * @method mostrarOcultarDiv
 * @param accion - String que indica si mostrar o ocultar ('mostrar' o 'ocultar')
 */
function mostrarOcultarDiv(accion) {
    const div = document.querySelector('div[name="unDiv"]');
    
    if (accion === 'mostrar') {
        div.style.display = 'block';
    } else if (accion === 'ocultar') {
        div.style.display = 'none';
    }
}

/**
 * Función para realizar suma
 * @method sumar
 * @param num1Id - ID del primer número
 * @param num2Id - ID del segundo número
 * @param resultadoId - ID del campo resultado
 */
function sumar(num1Id, num2Id, resultadoId) {
    const num1 = parseFloat(document.getElementById(num1Id).value) || 0;
    const num2 = parseFloat(document.getElementById(num2Id).value) || 0;
    const resultado = num1 + num2;
    document.getElementById(resultadoId).value = resultado;
}

/**
 * Función para realizar resta
 * @method restar
 * @param num1Id - ID del primer número
 * @param num2Id - ID del segundo número
 * @param resultadoId - ID del campo resultado
 */
function restar(num1Id, num2Id, resultadoId) {
    const num1 = parseFloat(document.getElementById(num1Id).value) || 0;
    const num2 = parseFloat(document.getElementById(num2Id).value) || 0;
    const resultado = num1 - num2;
    document.getElementById(resultadoId).value = resultado;
}

/**
 * Función para realizar multiplicación
 * @method multiplicar
 * @param num1Id - ID del primer número
 * @param num2Id - ID del segundo número
 * @param resultadoId - ID del campo resultado
 */
function multiplicar(num1Id, num2Id, resultadoId) {
    const num1 = parseFloat(document.getElementById(num1Id).value) || 0;
    const num2 = parseFloat(document.getElementById(num2Id).value) || 0;
    const resultado = num1 * num2;
    document.getElementById(resultadoId).value = resultado;
}

/**
 * Función para realizar división
 * @method dividir
 * @param num1Id - ID del primer número
 * @param num2Id - ID del segundo número
 * @param resultadoId - ID del campo resultado
 */
function dividir(num1Id, num2Id, resultadoId) {
    const num1 = parseFloat(document.getElementById(num1Id).value) || 0;
    const num2 = parseFloat(document.getElementById(num2Id).value) || 0;
    
    if (num2 === 0) {
        document.getElementById(resultadoId).value = "Error: División por cero";
    } else {
        const resultado = num1 / num2;
        document.getElementById(resultadoId).value = resultado;
    }
}