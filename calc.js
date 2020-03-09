function eliminar_valores(operacion, i, x) {
    valores.splice(x, 1);
    valores.splice(i, 1);
    console.log(valores);
    operacion(valores);
}

function prepare(cadena) {
    valores = cadena.split(" ");
    console.log(valores);
    primeroParentesis(valores);
}

function multiplicacion(valores) {
    result = 0;
    for (i = 0; i < valores.length; i++) {
        if (valores[i] == "x" || valores[i] == "÷") {
            if (valores[i] == "x") {
                result = parseFloat(valores[i - 1]) * parseFloat(valores[i + 1]);
                console.log(result);
                valores[i] = result;
                eliminar_valores(multiplicacion, i - 1, i + 1);
            }
            if (valores[i] == "÷") {
                result = parseFloat(valores[i - 1]) / parseFloat(valores[i + 1]);
                console.log(result);
                valores[i] = result;
                eliminar_valores(multiplicacion, i - 1, i + 1);
            }
        }
    }
    suma(valores);
}

function suma(valores) {
    for (i = 0; i < valores.length; i++) {
        if (valores[i] == "+") {
            result = parseFloat(valores[i - 1]) + parseFloat(valores[i + 1]);
            console.log(result);
            valores[i] = result;
            eliminar_valores(suma, i - 1, i + 1);
        }
    }
    resta(valores);
}

function resta(valores) {
    for (i = 0; i < valores.length; i++) {
        if (valores[i] == "-") {
            result = parseFloat(valores[i - 1]) - parseFloat(valores[i + 1]);
            console.log(result);
            valores[i] = result;
            eliminar_valores(resta, i - 1, i + 1);
        }
    }
    document.getElementById('numbers1').value = result;
}
