var contador = 0;
var contChances = 1; 

function check() {
    contChances++;
    
        for (let i = 1; i <= 12; i++) {
            if (document.getElementById("certa" + i).checked) {
                contador++;
            }
        }
    

    document.getElementById("titulo").textContent = "Tentativa " + contChances;

    alert("Você acertou " + contador + " questões");


    if(contador>=8){
        alert("Parabéns!!! \n você concluiu o curso de Lógica de progamação")
        window.location.assign("certificado.html")
    }


    if (contChances > 3) {
       
        alert("Você excedeu o limite de tentativas \n \n Não será possível fazer a prova novamente  ");

        var botaoSumir = document.getElementById("btn_prova");

        botaoSumir.style.display = "none";

        const p = document.getElementsByClassName("borda");

        for (let i = 0; i < p.length; i++) {
            p[i].style.borderColor = "green";
            p[i].style.borderRadius = "15px";
        }

        document.getElementById("titulo").textContent = "Tentativa 3";
    }

    
   
    contador = 0;
}
