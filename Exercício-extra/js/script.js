const formulario = document.getElementById('formulario-de-comentarios');

const erro = document.querySelector(".meu-erro")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let inputUsuario = document.querySelector(".input-de-texto");
    let mensagem = inputUsuario.value;

    // console.log (inputUsuario);
    // console.log (inputUsuario.value);
    // ou inputUsuario.value = "";

    if (mensagem === "") {

        console.error("You made a mistake");

        //ou 

    erro.textContent = "You made a mistake"

    }

    else {

        let comentarios = document.createElement("p");

        comentarios.textContent = mensagem;
        todosOsComentarios.appendChild(comentarios);
        comentarios.classList.add("comentarios");

        formulario.reset();
    }
});


