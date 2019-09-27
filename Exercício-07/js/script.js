const objeto = {
    nome: "Priscilla",
    profissao: "Desenvolvedora",
    idade: 34,
    site: "https://github.com/PriscillaRoiz",
    "gatinho- preferido": "https://4.bp.blogspot.com/-ufphRX0DYOI/Vyvwdcqg3LI/AAAAAAAAUKU/gAyaDhupxI4WsWL2gje5tT-TLebxjNZTQCLcB/s1600/Gif%2BGato%2Bvirando%2Bcambalhota.gif"
}

// criar no javascript a marcacao p/ exibir as pripriedades dos objetos no html

const divMae = document.getElementById("sou-a-mae");

// const titulo = document.createElement("h3");
// divMae.appendChild(titulo);
// titulo.textContent = objeto['nome'];

// const idade = document.createElement("span");
// divMae.appendChild(idade);
// idade.textContent = objeto['idade'];

// const profissao = document.createElement("p");
// divMae.appendChild(profissao);
// profissao.textContent = objeto['profissao'];

// const site = document.createElement("a");
// divMae.appendChild(site);
// site.textContent = "Acessar meu site";
// site.setAttribute('href', objeto.site);
// site.setAttribute("target", "_blank");

// const gatinho = document.createElement('img');
// divMae.appendChild(gatinho);
// gatinho.setAttribute('src', objeto['gatinho- preferido']);

//ou 

for (let propriedade in objeto) {

    let tudo = document.createElement('p');
    divMae.appendChild(tudo);
    tudo.textContent = (objeto[propriedade]);


    // console.log (objeto[propriedade])
}

    let gatinho = document.createElement('img');
    divMae.appendChild(gatinho);
    gatinho.setAttribute('src', objeto['gatinho- preferido']);
