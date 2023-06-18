function abrirAbaDigitar() {
    var campo = document.getElementById("campo-digitar");
    campo.focus();
}

function addComentario() {
    var ing = document.getElementById("campo-digitar").value;
    var comentario = document.createElement("span");
    comentario.className = "comentario";
    comentario.textContent = ing + " "; // Adiciona um espaço em branco após cada comentário

    document.getElementById("comentarios").appendChild(comentario);

    // Desativa o botão após o envio do comentário
    var botaoComentario = document.getElementById("botao-comentario");
    botaoComentario.disabled = true;

    // Exibe o popup de erro ao clicar no botão desabilitado
    botaoComentario.addEventListener("click", function () {
        alert("Erro: Não é possível adicionar mais comentários.");
    });



    document.getElementById("campo-digitar").value = "";


}