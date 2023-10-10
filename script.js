let horaInicio = document.getElementById("horaInicio");
let horaFinal = document.getElementById("horaFinal");
let resultado = document.getElementById("result");
let operacao = document.getElementsByName("operacao");

function calcularHoras() {
    resultado.innerHTML="";
    if(horaInicio.value == 0 || horaFinal.value == 0) {
        window.alert("Preencher os campos necessários")
    } else {
        
        resultado.innerHTML = "Ainda estamos trabalhando nisso!";
    }
}
