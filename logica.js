
listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo do mundo?",
    opcoes: [
      "Baleia Azul",
      "Cogumelo de mel",
      "Elefante",
      "Girafa"
    ],
    correta : 1
  },
  
  {
    pergunta: "Qual a primeira capital do Brasil?",
    opcoes: [
      "Taquara",
      "Salvador",
      "Brasilia",
      "Rio de Janeiro"
    ],
    correta : 1
  },

  {
    pergunta: "Em que ano o Brasil se tornou independente?",
    opcoes: [
      "1980",
      "1500",
      "1237",
      "1822"
    ],
    correta : 3
  },

  {
    pergunta:"Que ano o Flamengo foi campeão mundial?",
    opcoes: [
      "2002",
      "2019",
      "1981",
      "2025"
    ],
    correta : 2
  },
]
  
Pergunta = null



btnIniciar = document .querySelector(".Iniciar")

btnIniciar.addEventListener("click" , Iniciarjogo)

function Iniciarjogo() {
  telaInical = document.querySelector(".tela-inicial")
  telaInical.style.display = "none"
  
  telaPergunta = document.querySelector(".tela-pergunta")
  telaPergunta.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  pergunta = listaPerguntas [0]
  
  console.log(pergunta)
}