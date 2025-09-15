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

if (isNaN(valor)){
    alert("El valor ingresado no es un número");
    metro="";
    pie="";
    pulgada="";
    yarda="";
} else {

if (unidad=="unid_metro"){
    metro=valor;
    pie=3.28*metro;
    pulgada=39.37*metro;
    yarda=1.09*metro;
} else if (unidad=="unid_pulgada"){
    pulgada=valor;
    metro=pulgada/39.37;
    pie=3.28*metro;
    yarda=1.09*metro;
} else if (unidad=="unid_pie"){
    pie=valor;
    metro=pie/3.28;
    pulgada=39.37*metro;
    yarda=1.09*metro;
} else if (unidad=="unid_yarda"){
    yarda=valor;
    metro=yarda/1.09;
    pie=3.28*metro;
    pulgada=39.37*metro;
}

    document.getElementById("metro").value=metro;
    document.getElementById("pie").value=pie;
    document.getElementById("pulgada").value=pulgada;
    document.getElementById("yarda").value=yarda;
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