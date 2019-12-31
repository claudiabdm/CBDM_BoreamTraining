function getConcepto(){
    let concepto = window.prompt('Introduce descripción del concepto');
    while (!concepto){
        concepto = getConcepto();
    }
    return concepto;
}

function getBase(){
    let base = window.prompt('Introduce el coste base');
    while (/^\d+\.?\d*$/g.test(base) === false){
        base = getBase();
    }
    return base;
}

function getFactura(){
    let conceptos = {};
    let total = 0;
    let confirmacion = true;
    // Confirmacion
    while (confirmacion === true){
        const concepto = getConcepto();
        const base = getBase();
        conceptos[concepto] = base;
        total += parseFloat(base);
        confirmacion = window.confirm('¿Desea introducir otro concepto?'); // true or false
    }
    // Conceptos
    console.log('Conceptos:');
    for(concepto in conceptos){
            console.log(`\t${concepto} - ${conceptos[concepto]}`);
    }
    // Total base, IVA, Total factura
    console.log(`Total:
    Base - ${total}
    21% IVA - ${total*0.21}
    Total Factura - ${total + total*0.21}`);
}

getFactura();
