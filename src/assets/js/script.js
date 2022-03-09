// Menu de barras - responsividade usando JQuery

/* $( document ).ready(function(){

    $("#barras").click(function() {
        
        $("#menu").toggleClass("menu-ativo");

    })
}) */

//Menu barras - responsividade usando JS

function mostrarMenu () {

    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";

    } else {
        menu.style.display = "flex";
    }

}

//Modal Login

/* function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add("mostrar");
    modal.addEventListener ("click", (e) => {
        if (e.target.id == modalID || e.target.className == "fechar") {
            modal.classList.remove("mostrar");
        }
    });
}
 */
/* const user = document.getElementById("user-icone");
user.addEventListener('click', () => iniciaModal("formulario")); */


// Cadastro de email - rodapé

function cadastrarEmail() {
    let emailDigitado = document.getElementById("campo-email").value;
    
    console.log(emailDigitado);
}

// Formulário opinião - clientes

function cadastroDepoimento() {
    let nomeDigitado = document.getElementById("nome-cliente").value;
    console.log("Nome: " + nomeDigitado);

    let idadeDigitada = document.getElementById("idade-cliente").value;
    console.log("Idade: " + idadeDigitada);

    let cidadeDigitada = document.getElementById("cidade-cliente").value;
    console.log("Cidade: " + cidadeDigitada);

    let produtoComprado = document.getElementById("produto-cliente").value;
    console.log("Produto: " + produtoComprado);

    let mensagem = document.getElementById("mensagem-cliente").value;
    console.log("Mensagem: " + mensagem);

}

// Formulário Fale conosco

function faleConosco () {
    let nome = document.getElementById("nome").value;
    console.log("Nome: " + nome);

    let telefone = document.getElementById("telefone").value;
    console.log("Telefone: " + telefone);

    let email = document.getElementById("email").value;
    console.log("E-mail: " + email);

    let assunto = document.getElementById("assunto").value;
    console.log("Assunto: " + assunto);

    let descricao = document.getElementById("descricao").value;
    console.log("Descrição: " + descricao);
}
