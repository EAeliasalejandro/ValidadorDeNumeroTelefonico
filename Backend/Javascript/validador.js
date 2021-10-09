//Obtengo los elementos del html
const formulario = document.getElementById("formularioForm");
const inputs = document.querySelectorAll("#formularioForm input");
const resultado = document.getElementById("resultado");

//Expresión Regular
function validarNumero(numero) {
    var er = /\+\d\d*-\(\d\d*\)(\d\d\s)(\d\d\s)*(\d)*\s(M|F)/g;
    return er.test(numero); //se comprueba si cumple o no
}
//Validar el Número escrito en el inpu
function validar() {
    var telefonoValor = document.getElementById("telefono").value; //Obtengo el valor en el input
    resultado.innerHTML = ""; //seteo el resulato en vacio
    if (telefonoValor == "") { //si el input esta vacio entonces desaparezco el contenido del resultado
        resultado.innerHTML = "";
    } else {
        //si cumple con la ER se escribe en resultado que es valido si no lo contrario
        if (validarNumero(telefonoValor)) { 
            resultado.innerHTML = telefonoValor + " Este número es valido.";
            resultado.style.color = "green";
        } else {
            resultado.innerHTML = telefonoValor + " Este número es invalido, prueba de nuevo.";
            resultado.style.color = "red";
        }
    }
    return false;
}

//Validación en tiempo Real del input
inputs.forEach((input) => {
    input.addEventListener("keyup", validar);
});
