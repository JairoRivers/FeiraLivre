function abrirAbaDigitar() {
    var campo = document.getElementById("campo-digitar");
    campo.focus();
}

function addComentario() {
    var ing = document.getElementById("coment").value;
    var comentarios = document.getElementById("comentarios").innerHTML;
    comentarios = comentarios + "<p>" + ing + "</p>";

    document.getElementById("comentarios").innerHTML = comentarios;
}
