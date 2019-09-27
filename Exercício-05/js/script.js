const livros = {
    1: {
        "titulo": "Java Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const divBiblioteca = document.getElementById("lista-do-catalogo");


// const tituloLivro = document.createElement('h3');
// criarLista.appendChild(tituloLivro);
// criarLista.textContent = livros ['1']['titulo'];
// tituloLivro.classList.add("titulo__livro")

// const nomeAutor = document.createElement('p');
// criarLista.appendChild(nomeAutor);
// nomeAutor.textContent = livros ['1']['quemEscreveu'];


// const link = document.createElement('a');
// criarLista.appendChild(link);
// link.setAttribute('href',livros ['1']['link'])
// link.textContent = "Leia aqui!";


for (let propriedades in livros) {

    const criarLista = document.createElement("li");
    divBiblioteca.appendChild(criarLista);
    criarLista.classList.add('livro');

    let titulo = document.createElement("h3");
    criarLista.appendChild(titulo);
    titulo.textContent = livros[propriedades]["titulo"];
    titulo.classList.add("livro__titulo");

    let quemEscreveu = document.createElement("p");
    criarLista.appendChild(quemEscreveu);
    quemEscreveu.textContent = livros[propriedades]["quemEscreveu"];
    quemEscreveu.classList.add('livro__autoria');

    let link = document.createElement("a");
    criarLista.appendChild(link);
    link.setAttribute('href', livros['link']);
    link.textContent = "Leia aqui!";
    link.classList.add('livro__link');

    let BottonJaLi = document.createElement('button');
    criarLista.appendChild(BottonJaLi);
    BottonJaLi.textContent = "Já li";
    BottonJaLi.classList.add('botao-lido');

    let BottonDesfazer = document.createElement('button');
    criarLista.appendChild(BottonDesfazer);
    BottonDesfazer.textContent = "Desfazer";
    BottonDesfazer.classList.add('botao-desfazer');

    BottonJaLi.addEventListener("click", function () {
        if (titulo.classList.contains('livro__titulo--lido')) {
        } else {
            titulo.classList.add('livro__titulo--lido');
        };
    });
}

    //ou botoes separados


    // BottonJaLi.addEventListener("click", function() {
    //     titulo.classList.remove("livro__titulo--lido");
    // })
