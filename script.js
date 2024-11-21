// Fase Quatro: A Coroa com as novas perguntas
const phases = [
    {
      phase: "Fase Teste",
      questions: [
        {
          question: "O que nos deu a oportunidade de mudar a nossa história de vida?",
          options: [
            "Adão e Eva no jardim",
            "Moisés abrindo o mar",
            "O sacrifício de Jesus",
          ],
          correct: 2,  // Resposta correta é "O sacrifício de Jesus"
        },
        {
          question: "Hoje iremos falar sobre um pastor de ovelhas que se tornou rei, o nome dele é?",
          options: ["José", "Saul", "Davi"],
          correct: 2,  // Resposta correta é "Davi"
        },
        {
          question: "Qual é o símbolo de um pastor de ovelhas?",
          options: ["Corda", "Cajado", "Túnica"],
          correct: 1,  // Resposta correta é "Cajado"
        },
      ],
      reward: null, // Sem arma na fase teste
    },
    {
      phase: "Fase Um: O Cajado",
      questions: [
        {
          question: "O que o cajado representou para Davi?",
          options: [
            "O início do seu chamado",
            "A correção de Deus",
            "Como pescar",
          ],
          correct: 0,  // Resposta correta é "O início do seu chamado"
        },
        {
          question: "Davi na sua primeira fase lutou contra:",
          options: ["Soldados e Reis", "Saul", "Ursos e leões"],
          correct: 2,  // Resposta correta é "Ursos e leões"
        },
        {
          question: "O que essa experiência com o cajado deram a Davi?",
          options: [
            "Dificuldade para lidar com as Frustrações",
            "Habilidade para enfrentar maiores desafios",
            "Vaidade por estar direcionando",
          ],
          correct: 1,  // Resposta correta é "Habilidade para enfrentar maiores desafios"
        },
      ],
      reward: "Cajado", // A recompensa é o cajado
    },
    {
      phase: "Fase Dois: A Funda",
      questions: [
        {
          question: "Qual era o maior desejo que Davi tinha em seu coração?",
          options: ["Ser reconhecido", "Ter poder", "VENCER"],
          correct: 2,  // Resposta correta é "VENCER"
        },
        {
          question: "Davi usou a funda para derrotar:",
          options: ["Golias", "Jonatas", "Bete-seba"],
          correct: 0,  // Resposta correta é "Golias"
        },
        {
          question: "Qual era a arma mais poderosa que Davi tinha além da A FUNDA:",
          options: ["Raiva", "Medo", "Fé"],
          correct: 2,  // Resposta correta é "Fé"
        },
      ],
      reward: "Funda", // A recompensa é a funda
    },
    {
      phase: "Fase Três: A Espada",
      questions: [
        {
          question: "O Que Davi se tornou após derrotar Golias?",
          options: [
            "Comandante do exército de Israel",
            "Rei de Israel",
            "Governador",
          ],
          correct: 0,  // Resposta correta é "Comandante do exército de Israel"
        },
        {
          question: "O que a espada representa biblicamente?",
          options: [
            "Força",
            "Palavra de Deus",
            "Guerra",
          ],
          correct: 1,  // Resposta correta é "Palavra de Deus"
        },
        {
          question: "Quem Davi sempre consultava antes de suas batalhas?",
          options: [
            "Deus",
            "Josué",
            "Saul",
          ],
          correct: 0,  // Resposta correta é "Deus"
        },
      ],
      reward: "Espada", // A recompensa é a espada
    },
    {
      phase: "Fase Quatro: A Coroa",
      questions: [
        {
          question: "Qual era a promessa que o profeta Samuel deu a Davi enquanto ele ainda era pastor de ovelhas?",
          options: [
            "Que ele se tornaria Rei de Israel",
            "Que ele derrotaria Golias",
            "Que ele se tornaria um soldado",
          ],
          correct: 0,  // Resposta correta é "Que ele se tornaria Rei de Israel"
        },
        {
          question: "Por que Davi teve que passar por todas as outras fases antes de receber a coroa?",
          options: [
            "Por que ele precisava ser preparado e equipado para alcançar lugares mais altos",
            "Por que ele nasceu pronto",
            "Por que ele foi reprovado",
          ],
          correct: 0,  // Resposta correta é "Por que ele precisava ser preparado e equipado para alcançar lugares mais altos"
        },
        {
          question: "O que Davi fez para impressionar ao senhor?",
          options: [
            "Tinha um coração segundo o coração de Deus",
            "Tinha um coração duro",
            "Tinha um coração rancoroso",
          ],
          correct: 0,  // Resposta correta é "Tinha um coração segundo o coração de Deus"
        },
      ],
      reward: "Coroa", // A recompensa é a coroa
    },
  ];
  
  let currentPhaseIndex = 0;
  let currentQuestionIndex = 0;
  const inventory = [];
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const inventoryEl = document.getElementById("inventory-list");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    const currentPhase = phases[currentPhaseIndex];
    const currentQuestion = currentPhase.questions[currentQuestionIndex];
    questionEl.textContent = `${currentPhase.phase} - ${currentQuestion.question}`;
  
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsEl.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentPhase = phases[currentPhaseIndex];
    const currentQuestion = currentPhase.questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
      alert("Resposta correta!");
      currentQuestionIndex++;
  
      if (currentQuestionIndex >= currentPhase.questions.length) {
        if (currentPhase.reward) {
          inventory.push(currentPhase.reward);
          alert(`Parabéns! Você ganhou: ${currentPhase.reward}`);
          updateInventory();
        }
        nextBtn.style.display = "block";
      } else {
        loadQuestion();
      }
    } else {
      alert("Resposta errada! Tente novamente.");
    }
  }
  
  function updateInventory() {
    inventoryEl.innerHTML = "";
    inventory.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      inventoryEl.appendChild(li);
    });
  }
  
  nextBtn.onclick = () => {
    currentPhaseIndex++;
    currentQuestionIndex = 0;
    if (currentPhaseIndex < phases.length) {
      loadQuestion();
      nextBtn.style.display = "none";
    } else {
      alert("Salmos 37:3-6 — Confia no Senhor e faça o bem; habita na terra e alimenta-te da verdade. Agrada-te do Senhor, e ele satisfará os desejos do teu coração. Entrega o teu caminho ao Senhor, confia nele, e o mais ele fará. Fará sobressair a tua justiça como a luz e o teu direito, como o sol ao meio-dia.");
      nextBtn.style.display = "none";
    }
  };
  
  // Inicializa o jogo
  loadQuestion();
  