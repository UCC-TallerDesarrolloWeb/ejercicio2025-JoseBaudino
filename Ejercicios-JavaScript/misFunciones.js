/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function conversorUnidades(unidad, valor) {
    let metro = document.lasUnidades.unid_metro;
    let pulgada = document.lasUnidades.unid_pulgada;
    let pie = document.lasUnidades.unid_pie;
    let yarda = document.lasUnidades.unid_yarda;

    // Convertir a metros
    switch (unidad) {
        case "unid_metro":
            pulgada.value = valor * 39.3701;
            pie.value = valor * 3.28084;
            yarda.value = valor * 1.09361;
            break;
        case "unid_pulgada":
            metro.value = valor / 39.3701;
            pie.value = valor / 12;
            yarda.value = valor / 36;
            break;
        case "unid_pie":
            metro.value = valor / 3.28084;
            pulgada.value = valor * 12;
            yarda.value = valor / 3;
            break;
        case "unid_yarda":
            metro.value = valor / 1.09361;
            pulgada.value = valor * 36;
            pie.value = valor * 3;
            break;
    }
}