document.getElementById('formPocion').addEventListener('submit', function(e) {
    e.preventDefault(); 

    let altura = parseFloat(document.getElementById('alturaInicial').value);
    let pocion = parseFloat(document.getElementById('cantidadPocion').value);
    let contenedor = document.getElementById('resultadoPocion');

    if (altura <= 0 || pocion <= 0) {
        contenedor.innerHTML = "❌ Error: La altura y la poción deben ser valores positivos.";
        return;
    }

    let nuevaAltura;
    let mensaje = "";

    if (pocion < 50) {
        nuevaAltura = altura - (pocion * 0.5);
        mensaje = "La poción redujo el tamaño de Alicia. ";
    } else {
        nuevaAltura = altura + (pocion * 0.8);
        mensaje = "La poción hizo crecer a Alicia. ";
    }

    if (nuevaAltura <= 50) {
        mensaje += "¡Puede pasar por la pequeña puerta!";
    } else if (nuevaAltura > 50 && nuevaAltura <= 150) {
        mensaje += "Altura moderada, pero requiere precaución con el espacio.";
    } else {
        mensaje += "¡Es demasiado alta, no cabe por la puerta!";
    }

    contenedor.innerHTML = `<strong>Altura Inicial:</strong> ${altura} cm<br>
                            <strong>Nueva Altura Calculada:</strong> ${nuevaAltura.toFixed(2)} cm<br>
                            <strong>Estado:</strong> ${mensaje}`;
});



document.getElementById('formMerienda').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombreInvitado').value;
    let bebida = document.getElementById('tipoBebida').value;
    let tazas = parseInt(document.getElementById('cantidadTazas').value);
    let contenedor = document.getElementById('resultadoMerienda');

    let precioUnitario = 0;
    let nombreBebidaTxt = "";

    switch(bebida) {
        case 'te':
            precioUnitario = 10;
            nombreBebidaTxt = "Té Loco";
            break;
        case 'cafe':
            precioUnitario = 12;
            nombreBebidaTxt = "Café del Dormir";
            break;
        case 'jugo':
            precioUnitario = 15;
            nombreBebidaTxt = "Jugo de Reina";
            break;
        case 'vino':
            precioUnitario = 20;
            nombreBebidaTxt = "Vino del Conejo";
            break;
        default:
            precioUnitario = 0;
    }

    let subtotal = precioUnitario * tazas;
    let descuento = 0;

    if (tazas >= 5) {
        descuento = subtotal * 0.15; }

    let total = subtotal - descuento;

    contenedor.innerHTML = `<strong>Invitado:</strong> ${nombre}<br>
                            <strong>Bebida:</strong> ${nombreBebidaTxt} ($${precioUnitario} c/u)<br>
                            <strong>Cantidad:</strong> ${tazas} tazas<br>
                            <strong>Subtotal:</strong> $${subtotal.toFixed(2)}<br>
                            <strong>Descuento aplicado:</strong> -$${descuento.toFixed(2)}<br>
                            <strong>Total a pagar:</strong> $${total.toFixed(2)}`;
});


document.getElementById('formReina').addEventListener('submit', function(e) {
    e.preventDefault();

    let numCartas = parseInt(document.getElementById('numCartas').value);
    let contenedor = document.getElementById('resultadoReina');

    if (numCartas <= 0) {
        contenedor.innerHTML = "❌ Por favor, ingresa un número entero positivo.";
        return;
    }

    let paresCount = 0;
    let imparesCount = 0;
    let sumaPares = 0;
    let sumaImpares = 0;
    let secuencia = [];

    for (let i = 1; i <= numCartas; i++) {
        secuencia.push(i);
        if (i % 2 === 0) {
            paresCount++;
            sumaPares += i;
        } else {
            imparesCount++;
            sumaImpares += i;
        }
    }

    let comparacion = "";
    if (sumaPares > sumaImpares) {
        comparacion = "El grupo de cartas PARES tuvo mayor suma.";
    } else if (sumaImpares > sumaPares) {
        comparacion = "El grupo de cartas IMPARES tuvo mayor suma.";
    } else {
        comparacion = "Hubo un empate exacto en las sumas de ambos grupos.";
    }

    contenedor.innerHTML = `<strong>Secuencia analizada:</strong> [ ${secuencia.join(', ')} ]<br>
                            <strong>Cartas Pares:</strong> ${paresCount} (Suma total: ${sumaPares})<br>
                            <strong>Cartas Impares:</strong> ${imparesCount} (Suma total: ${sumaImpares})<br>
                            <strong>Resultado del Desafío:</strong> ${comparacion}`;
});