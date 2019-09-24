let pinguin = {
    "nome": "Emilia",
    "idade": 9,
    "origem": "Norte"
}

pinguin.andar = function () {
    console.log("Andou");
}

pinguin.podeVoar = false;

pinguin.voar = function() {
    if (pinguin.podeVoar){
        console.log("Voou");
    }
    else {
        console.log("Pinguin não voa ainda");
    }
}