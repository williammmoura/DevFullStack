function inserirAdicionais(){
    var massas = document.getElementById('massas');
    var bordas = document.getElementById('bordas');

    var massasValue = massas.options[massas.selectedIndex];
    var bordasValue = bordas.options[bordas.selectedIndex];

    var textMassas = massasValue.text;
    var textBordas = bordasValue.text;

    localStorage.setItem("Massa", JSON.stringify(textMassas));
    localStorage.setItem("Bordas", JSON.stringify(textBordas));
}

var sabores = JSON.parse((localStorage.getItem("sabores"))) || [];

var elLista = document.getElementById("lista");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");

elBotao.onclick = function(){
    var nome = elCampo.value;
    sabores.push({ pizza: nome });
    elCampo.value = "";

    salvarSabores();
    listarSabores();
    inserirAdicionais();

}

function salvarSabores(){

    if(sabores.length > 3){
        alert("Permitido apenas 3 sabores!")
    }else{
        localStorage.setItem("sabores", JSON.stringify(sabores));
    }
}

function listarSabores(){
    elLista.innerHTML = "";

    for(const sabor of sabores){
        var elSabor = document.createElement("li");
        var elNome = document.createTextNode(sabor.pizza);

        elSabor.appendChild(elNome);
        elLista.appendChild(elSabor);

    }
    salvarSabores();
}

function enviarPedido(){
    alert("Seu pedido foi enviado! Enquanto aguarda, conheça a história das pizzas.")
    window.location.href = "https://pt.wikipedia.org/wiki/Pizza";
}