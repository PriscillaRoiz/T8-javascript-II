let novaTransacao = [];
let seuExtrato = document.getElementById("lista-alunas");

novaTransacao.forEach(function(transacao) {
    let item = document.createElement("li");

    item.textContent = transacao;
    
    lista.appendChild(item);
});
