/*
por Tag: getElementByTagName()
por Id: getElementeById()
por Nome: getElementsByName()
por Classe: getElementesByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById("nome")
let email=document.querySelector("#email")
let assunto=document.querySelector("#assunto")
let nomeOk = false
let emailOk =false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "80%"
email.style.width = "80%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 100) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")== -1){
        txtEmail.innerHTML = "E-mail Invalido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length > 2) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 caracteres'
        txtAssunto.style.color = "red"
    }else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulario enviado com sucesso!!!")
    }else {
        alert ("Preencha o formulario corretamente antes de enviar")
    }
}
function mapaZoom() {
mapa.style.width = "800px"
mapa.style.height = "600px"
}
function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}