btnIniciar = document .querySelector(".Iniciar")

btnIniciar.addEventListener("click" , Iniciarjogo)

function Iniciarjogo() {
  telaInical = document.querySelector(".tela-inicial")
  telaInical.style.display = "none"
  
  telaPergunta = document.querySelector(".tela-pergunta")
  telaPergunta.style.display = "block"
}