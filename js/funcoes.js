$(document).ready(function(){
    $("#tel").mask("(00) 0000-0000")
})

function enviar() {
    var nome = document.getElementById('fnome');
    var telefone = document.getElementById('tel');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var ConfSenha = document.getElementById('ConfSenha');
    alert("Dados Cadastrados \nNome: " + fnome.value + "\nTelefone: " + tel.value +
    "\nEmail: " + email.value);
    if(senha != ConfSenha){
        alert("Senhas Diferentes");
    }else{
        return true;
    }
}

