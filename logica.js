
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
  objPergunta = listaPerguntas [1];

  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta = document.querySelector(".pergunta");
  divPergunta.appendChild(textoPergunta);

  txtopcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0 = document.querySelector(".opcao0");
  botao0.appendChild(txtopcao1);

  txtopcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1 = document.querySelector(".opcao1");
  botao1.appendChild(txtopcao2);

  txtopcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao0 = document.querySelector(".opcao2");
  botao0.appendChild(txtopcao3);

  txtopcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao0 = document.querySelector(".opcao3");
  botao0.appendChild(txtopcao4);




  objPergunta.opcoes[0]
  console.log(pergunta)
  
}