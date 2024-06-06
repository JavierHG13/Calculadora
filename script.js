var val1, val2, res, h3;

h3 = document.getElementById("res");

function sumar() {
    val1 = parseFloat(document.getElementById("val1").value);
    val2 = parseFloat(document.getElementById("val2").value);

    if (isNaN(val1) || isNaN(val2)) {
        if (isNaN(val1)) {
            h3.innerHTML = "Valores no válidos en la caja 1";
            document.getElementById("val1").focus();
        } else {
            h3.innerHTML = "Valores no válidos en la caja 2";
            document.getElementById("val2").focus();
        }
        return;
    }
    res = val1 + val2;
    h3.innerHTML ="Resultado: " + res;
}

function restar() {
    val1 = parseFloat(document.getElementById("val1").value);
    val2 = parseFloat(document.getElementById("val2").value);

    if (isNaN(val1) || isNaN(val2)) {
        if (isNaN(val1)) {
            h3.innerHTML = "Valores no válidos en la caja 1";
            document.getElementById("val1").focus();
        } else {
            h3.innerHTML = "Valores no válidos en la caja 2";
            document.getElementById("val2").focus();
        }
        return;
    }
    res = val1 - val2;
    h3.innerHTML ="Resultado: " + res;
}

function multiplicar() {
    val1 = parseFloat(document.getElementById("val1").value);
    val2 = parseFloat(document.getElementById("val2").value);

    if (isNaN(val1) || isNaN(val2)) {
        if (isNaN(val1)) {
            h3.innerHTML = "Valores no válidos en la caja 1";
            document.getElementById("val1").focus();
        } else {
            h3.innerHTML = "Valores no válidos en la caja 2";
            document.getElementById("val2").focus();
        }
        return;
    }
    res = val1 * val2;
    h3.innerHTML = "Resultado: " + res;
}

function dividir() {
    val1 = parseFloat(document.getElementById("val1").value);
    val2 = parseFloat(document.getElementById("val2").value);

    if (isNaN(val1) || isNaN(val2)) {
        if (isNaN(val1)) {
            h3.innerHTML = "Valores no válidos en la caja 1";
            document.getElementById("val1").focus();
        } else {
            h3.innerHTML = "Valores no válidos en la caja 2";
            document.getElementById("val2").focus();
        }
        return;
    }
    if (val2 === 0) {
        h3.innerHTML = "No se puede dividir por cero";
        document.getElementById("val2").focus();
        return;
    }
    res = val1 / val2;
    h3.innerHTML = "Resultado: " + res;
}
