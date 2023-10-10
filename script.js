let horaInicio = document.getElementById("horaInicio");
let horaFinal = document.getElementById("horaFinal");
let resultado = document.getElementById("result");
let operacao = document.getElementsByName("operacao");

function calcularHoras() {
    resultado.innerHTML="";
    if(horaInicio.value == 0 || horaFinal.value == 0) {
        window.alert("Preencher os campos necessários")
    } else {
        var array = horaInicio.value.split(":");
        var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
        resultado.innerHTML = horaInicio.value;
    }
}