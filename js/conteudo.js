
var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var p1 = document.getElementById("paragrafo1");
var p2 = document.getElementById("paragrafo2");
var p3 = document.getElementById("paragrafo3");
var p4 = document.getElementById("paragrafo4");
var p5 = document.getElementById("paragrafo5");

var imagem1 = document.getElementById("imagem1");
var imagem2 = document.getElementById("imagem2");
var imagem3 = document.getElementById("imagem3");
var imagem4 = document.getElementById("imagem4");


function reset() {
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "";
    p4.innerHTML = "";
    p5.innerHTML = "";

    imagem1.style.backgroundImage = "";
    imagem1.style.width = "0";
    imagem1.style.height = "0";


    imagem2.style.backgroundImage = "";
    imagem2.style.width = "0";
    imagem2.style.height = "0";

    imagem3.style.backgroundImage = "";
    imagem3.style.width = "0";
    imagem3.style.height = "0";

    imagem4.style.backgroundImage = "";
    imagem4.style.width = "0";
    imagem4.style.height = "0";
}


function bemVindo() {
    reset();

    p1.innerHTML = "Bem-Vindo Aluno(a)";

    p2.innerHTML = "essa é sua área de estudos, onde voce encontrará todos os módulos de sua apostila. Cada sessão foi cuidadosamente pensada e estrtuturada para uma boa experiência";

    p3.innerHTML = "Desejamos uma boa sorte em sua jornada.";

    p4.innerHTML = "ATENÇÃO:";

    p5.innerHTML = "Ao completar os módulos do curso, você fará uma prova final para a obtenção do seu certificado resaltamos que só é possível realizar a prova 3 vezes. Caso você acerte 70% da prova (9 ou mais questões), será disponibilizado um certificado de conclusão do curso"
}

function instalando() {
    reset();
    p1.innerHTML = '<iframe width="320" height="200" src="https://www.youtube.com/embed/nfCONgWNxd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

}


function variaveis() {
    reset();

    p1.innerHTML = "Na programação, existem variáveis capazes de armazenar valores. E como o próprio nome já diz, esses valores podem ser inteiros, textos, decimais, booleanos (verdadeiro e falso), matrizes, expressões entre outros.";

    imagem1.style.width = "280px";
    imagem1.style.height = "200px";
    imagem1.style.backgroundSize = "cover";
    imagem1.style.backgroundImage = "url('../img/aulas/variaveis/variaveis.png')";

    p2.innerHTML = "No exemplo acima, perceba que são criadas três variáveis: a, b e c.Com o comando “<-“ estou atribuindo a variável A o valor de 20, a variável B o texto “Olá mundo” e a variável C o valor 10.5";
    p3.innerHTML = "Como já dito, as variáveis também podem armazenar expressões como no exemplo abaixo";

    imagem2.style.width = "285px";
    imagem2.style.height = "280px";
    imagem2.style.backgroundSize = "cover";
    imagem2.style.backgroundImage = "url('../img/aulas/variaveis/variaveis2.png')";

    p5.innerHTML = "A variável D foi criada com o tipo de dado inteiro e nela foi armazenada a soma de 7 + 7, ou seja, D tem o valor de 14";
}


function condicional() {
    reset();

    p1.innerHTML = "A condição “se-então(-senão)” é uma estrutura de seleção comum em diversas linguagens de programação. <br><br> Quando o interpretador encontra o identificador “Se”, ele espera em seguida uma condição booleana sob forma de expressão relacional (como por exemplo, “x > 0”), que pode ser ver verdadeira ou falsa.<br><br> Usa-se também o comando “Fimse” para finalizar a estrutura";

    imagem1.style.width = "280px";
    imagem1.style.height = "220px";;
    imagem1.style.backgroundSize = "cover";
    imagem1.style.backgroundImage = "url('../img/aulas/estrutura_condicional/verdade_codigo.png')";

    p2.innerHTML = "no exemplo acima podemos observar que o primeiro 'se' é usado para dar início à estrutura, logo após usamos o parâmetro para verificar se a expressão é verdadeira ou falsa.";
    p3.innerHTML = "Com seu Visualg aberto aperte a tecla F9, isso abrirá um  terminal, onde será possível visualizar impressões, perceba que os texto estão entre aspas pois é assim que o interpretador de texto entende que isso não é um comando <br><br> Executando o código acima temos o seguinte resultado:";

    imagem2.style.width = "400px";
    imagem2.style.height = "300px";
    imagem2.style.backgroundSize = "cover";
    imagem2.style.backgroundImage = "url('../img/aulas/estrutura_condicional/verdadeiro1.jpg')";

    p4.innerHTML = "O “senão” foi ignorado pelo interpretador pois ele só seria acessado caso a expressão retornasse um valor falso, confira:";

    imagem3.style.width = "375px";
    imagem3.style.height = "220px";
    imagem3.style.backgroundSize = "cover";
    imagem3.style.backgroundImage = "url('../img/aulas/estrutura_condicional/falso_codigo2.jpg')";

    p5.innerHTML = "Resultado:";

    imagem4.style.width = "400px";
    imagem4.style.height = "300px";
    imagem4.style.backgroundSize = "cover";
    imagem4.style.backgroundImage = "url('../img/aulas/estrutura_condicional/falso1.jpg')";


}


function enquanto() {
    reset();

    p1.innerHTML = "A estrutura enquanto é muito utilizada quando é necessário fazer um teste e não é possível saber exatamente quantas vezes esse teste terá de ser repetido. Veja:";

    imagem1.style.width = "280px";
    imagem1.style.height = "240px";
    imagem1.style.backgroundSize = "cover";
    imagem1.style.backgroundImage = "url('../img/aulas/enquanto/enquanto.png')";

    p2.innerHTML = "Perceba que diferente da estrutura “Para”, não colocamos um valor final mas sim uma condição, ou seja, enquanto minha condição for verdadeira ele executará o loop, quando minha condição for falsa ele será interrompido.<br><br> Resultado:";

    imagem2.style.width = "400px";
    imagem2.style.height = "300px";
    imagem2.style.backgroundSize = "cover";
    imagem2.style.backgroundImage = "url('../img/aulas/enquanto/return_enquanto.png')";

    p4.innerHTML = "Cuidado: loops infinitos podem ser feitos. Mas o que é isso? <br><br>Um loop infinito é o mesmo que uma “repetição infinita”. Na programação de softwares, por exemplo, pode representar um erro na execução de determinado programa, quando este passa a seguir repetidamente a mesma sequência de instruções";

    imagem3.style.width = "300px";
    imagem3.style.height = "280px";
    imagem3.style.backgroundSize = "cover";
    imagem3.style.backgroundImage = "url('../img/aulas/enquanto/enquanto_errado3.jpg')";

    p5.innerHTML = "O exemplo acima está completamente errado, pois o valor de i nunca será maior que 5, gerando assim um loop infinito.";





}


function para() {
    reset();

    p1.innerHTML = "O que é estrutura de repetição? Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador. Os chamados loops<br><br>Existem basicamente três estruturas, o “Para”, “Enquanto” e “Repita” nesta sessão iremos nos aprofundar no Para";

    imagem1.style.width = "320px";
    imagem1.style.height = "200px";
    imagem1.style.backgroundSize = "cover";
    imagem1.style.backgroundImage = "url('../img/aulas/para/img_para.jpg')";

   

    p2.innerHTML = "Podemos observar que foi declarado a variável i como inteira, e já na estrutura para informamos que ela começará do valor 1 e irá até o valor 5.";
    p3.innerHTML = "Tudo que estiver dentro deste loop será feito 5 vezes e como utilizamos o comando “escreval” será impresso na tela tudo que estiver dentro dele.<br><br> Resultado:";

    imagem2.style.width = "400px";
    imagem2.style.height = "300px";
    imagem2.style.backgroundSize = "cover";
    imagem2.style.backgroundImage = "url('../img/aulas/para/return_para2.jpg')";


}


function repita() {
    reset();

    p1.innerHTML = "A diferença desta estrutura é que ela é um loop pós-testado, isto é, o teste para verificar se o bloco será executado novamente, acontece no final do bloco. Isso garante que as instruções dentro deste bloco serão executadas ao menos uma vez. Veja como é o esquema do repita-até. Observe:"

    imagem1.style.width = "400px";
    imagem1.style.height = "280px";
    imagem1.style.backgroundSize = "cover";
    imagem1.style.backgroundImage = "url('../img/aulas/repita/repita_codigo6.jpg')";

    p2.innerHTML = "No exemplo acima criamos a variável “valorDigitado” do tipo real, depois iniciamos nossa estrutura com um campo de texto pedindo ao usuário para digitar um valor. Usamos o comando “leia” que lê uma variável e só aceita como resposta o valor igual ao tipo de dado definido. Resultado:";


    imagem2.style.width = "350px";
    imagem2.style.height = "270px";
    imagem2.style.backgroundSize = "cover";
    imagem2.style.backgroundImage = "url('../img/aulas/repita/return_repita1.jpg')";

    p4.innerHTML = "Perceba, que além de ser pós-testada, esta estrutura testa o contrário do enquanto. Na estrutura rapita-até, as instruções do bloco são executadas repetidamente enquanto a expressão booleana resultar falso."



}


const btnMobile = document.getElementById('l-classroom__btn');

function toggleMenu() {
    const lAside = document.getElementById('l-aside');
    lAside.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}