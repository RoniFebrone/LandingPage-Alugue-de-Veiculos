var card = window.document.getElementById("card")
var back = window.document.getElementById("back")
var next = window.document.getElementById("next")
var carrosselAtivo = true;

function alternarCarrossel() {
    if (carrosselAtivo) {
        passarCard();
    } else {
        voltarCard();
    }
    carrosselAtivo = !carrosselAtivo; // Inverte o estado do carrossel
}


passarCard = () => {
    card.src = 'Imagens/card-hondaCB.svg';
    back.setAttribute("onclick", "voltarCard()")
    next.setAttribute("onclick", "voltarCard()")

}

voltarCard = () => {
    card.src = 'Imagens/card-scooter.svg';
    back.setAttribute("onclick", "passarCard()")
    next.setAttribute("onclick", "passarCard()")
}

adicionarHref = () => {
    var linkHonda = document.getElementById("linkHonda");
    var linkVoltz = document.getElementById("linkVoltz");

    // Obtendo o src atual da imagem em destaque
    var srcCardDestaque = document.getElementById("card").src;
    //============================================================================
    if (srcCardDestaque.endsWith('Imagens/card-scooter.svg')) {
        linkVoltz.href = "https://wa.me/5521975877461?text=Quero+saber+mais+sobre+a+Voltz+EV1%21%21";
        window.open(linkVoltz.href, "_blank");

        //=============================================================================   
    } else if (srcCardDestaque.endsWith('Imagens/card-hondaCB.svg')) {
        linkHonda.href = "https://wa.me/5521975877461?text=Quero+saber+mais+sobre+a+Honda+CB500X%21%21";
        window.open(linkHonda.href, "_blank");
    }
}

var carrossel = setInterval(alternarCarrossel, 3000)

card.addEventListener("mouseover", () => {
    clearInterval(carrossel);
});

card.addEventListener("mouseout",  () => {
    carrossel = setInterval(alternarCarrossel, 3000);
});




