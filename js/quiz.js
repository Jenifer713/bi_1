// Banco de preguntas: answer indica el índice de la respuesta correcta (comienza en cero).
const quizQuestions = [
  {
    category: "Toma de decisiones",
    question: "¿Qué caracteriza una decisión basada en datos?",
    options: ["Se apoya en evidencia medible", "Evita comparar resultados", "Se toma siempre más rápido", "Depende solo de la experiencia"],
    answer: 0,
    explanation: "La decisión data-driven se apoya en evidencia que se puede analizar y medir."
  },
  {
    category: "Toma de decisiones",
    question: "WestBite descubre que los viernes vende más hamburguesas. ¿Qué acción está mejor respaldada?",
    options: ["Cambiar todo el menú", "Aumentar inventario para el viernes y medir el resultado", "Subir precios en todos los platos", "Cerrar antes los viernes"],
    answer: 1,
    explanation: "Ajustar el inventario según la demanda observada y comprobar el resultado conecta el dato con una acción medible."
  },
  {
    category: "Fundamentos de BI",
    question: "¿Cuál es un objetivo principal de Business Intelligence?",
    options: ["Reemplazar todas las decisiones humanas", "Almacenar datos sin analizarlos", "Convertir datos en información útil para decidir", "Garantizar que toda decisión será correcta"],
    answer: 2,
    explanation: "BI organiza y presenta información para mejorar las decisiones; no elimina la incertidumbre ni reemplaza el criterio."
  },
  {
    category: "Proceso ETL",
    question: "En ETL, ¿qué significa la letra E?",
    options: ["Evaluar", "Estandarizar", "Ejecutar", "Extraer"],
    answer: 3,
    explanation: "Extract (extraer) es la etapa que recopila datos desde los sistemas de origen."
  },
  {
    category: "Proceso ETL",
    question: "¿Cuál es una transformación útil al combinar ventas e inventario?",
    options: ["Normalizar nombres de productos y fechas", "Borrar todos los registros antiguos", "Cambiar los valores para que parezcan mejores", "Publicar los datos sin validarlos"],
    answer: 0,
    explanation: "Normalizar campos comparables hace posible relacionar correctamente la información de ambas fuentes."
  },
  {
    category: "Proceso ETL",
    question: "¿Qué describe mejor la etapa Load (cargar)?",
    options: ["Obtener reseñas en línea", "Guardar los datos transformados en un destino analítico", "Corregir nombres de platos", "Elegir qué decisión tomar"],
    answer: 1,
    explanation: "Load guarda el conjunto preparado en un destino donde pueda consultarse y analizarse."
  },
  {
    category: "Calidad de datos",
    question: "¿Por qué conviene revisar duplicados en los pedidos antes de analizarlos?",
    options: ["Para que la gráfica tenga más colores", "Para reducir el tamaño de las etiquetas", "Porque pueden inflar ventas y conteos", "Para evitar usar un dashboard"],
    answer: 2,
    explanation: "Un pedido duplicado puede inflar artificialmente las ventas y otras métricas."
  },
  {
    category: "Análisis",
    question: "Si dos variables aumentan al mismo tiempo, ¿qué conclusión es responsable?",
    options: ["Una necesariamente causa la otra", "El análisis ya está completo", "Hay que ignorar ambas variables", "Existe una asociación que requiere más análisis para afirmar causalidad"],
    answer: 3,
    explanation: "La correlación indica asociación, pero por sí sola no demuestra que una variable cause la otra."
  }
];

const quizState = {
  currentQuestion: 0,
  score: 0,
  answered: false
};

document.addEventListener("DOMContentLoaded", () => {
  const quizApp = document.getElementById("quizApp");
  if (!quizApp) return;

  const progress = document.querySelector(".quiz-progress");
  const progressBar = document.getElementById("progressBar");
  const counter = document.getElementById("questionCounter");
  const currentScore = document.getElementById("currentScore");
  const category = document.getElementById("questionCategory");
  const questionText = document.getElementById("questionText");
  const answerList = document.getElementById("answerList");
  const feedback = document.getElementById("quizFeedback");
  const nextButton = document.getElementById("nextQuestion");
  const quizContent = document.getElementById("quizContent");
  const quizResult = document.getElementById("quizResult");

  // Presenta la pregunta actual y restablece los controles para la respuesta.
  function renderQuestion() {
    const question = quizQuestions[quizState.currentQuestion];
    quizState.answered = false;
    counter.textContent = `Pregunta ${quizState.currentQuestion + 1} de ${quizQuestions.length}`;
    category.textContent = question.category;
    questionText.textContent = question.question;
    currentScore.innerHTML = `${quizState.score} <small>pts</small>`;
    answerList.replaceChildren();
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
    nextButton.disabled = true;
    nextButton.innerHTML = quizState.currentQuestion === quizQuestions.length - 1
      ? "Ver resultados <span aria-hidden=\"true\">→</span>"
      : "Siguiente <span aria-hidden=\"true\">→</span>";
    const progressValue = quizState.currentQuestion;
    progressBar.style.width = `${(progressValue / quizQuestions.length) * 100}%`;
    progress.setAttribute("aria-valuenow", String(progressValue));

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.dataset.answerIndex = String(index);
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
      button.querySelector("span:last-child").textContent = option;
      button.addEventListener("click", () => selectAnswer(index));
      answerList.append(button);
    });
  }

  // Bloquea respuestas múltiples y comunica el motivo inmediatamente.
  function selectAnswer(selectedIndex) {
    if (quizState.answered) return;
    quizState.answered = true;
    const question = quizQuestions[quizState.currentQuestion];
    const isCorrect = selectedIndex === question.answer;
    if (isCorrect) quizState.score += 10;

    answerList.querySelectorAll(".answer-option").forEach((button, index) => {
      button.disabled = true;
      if (index === question.answer) button.classList.add("correct");
      else if (index === selectedIndex) button.classList.add("incorrect");
    });
    feedback.hidden = false;
    feedback.classList.add(isCorrect ? "feedback-correct" : "feedback-incorrect");
    feedback.textContent = `${isCorrect ? "¡Correcto! +10 puntos. " : "No es correcto. 0 puntos. "}${question.explanation}`;
    currentScore.innerHTML = `${quizState.score} <small>pts</small>`;
    nextButton.disabled = false;
  }

  // Calcula el reconocimiento y mensaje a partir del porcentaje final.
  function showResults() {
    const percentage = (quizState.score / (quizQuestions.length * 10)) * 100;
    let title;
    let message;
    let badge;
    if (percentage >= 90) {
      title = "¡Excelente!";
      message = "Tienes una base sólida para convertir datos en decisiones de negocio.";
      badge = "🏆 Experto en BI";
    } else if (percentage >= 60) {
      title = "¡Buen trabajo!";
      message = "Vas por buen camino. Sigue practicando para afinar tu mirada analítica.";
      badge = "🥈 Analista Senior";
    } else {
      title = "Necesita repasar";
      message = "Repasa los conceptos de BI y ETL; cada intento te ayudará a avanzar.";
      badge = "🌱 Analista Junior";
    }
    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultMessage").textContent = message;
    document.getElementById("finalScore").innerHTML = `${quizState.score} <small>de ${quizQuestions.length * 10} puntos · ${percentage}%</small>`;
    document.getElementById("earnedBadge").textContent = `Insignia desbloqueada: ${badge}`;
    quizContent.hidden = true;
    quizResult.hidden = false;
    progressBar.style.width = "100%";
    progress.setAttribute("aria-valuenow", String(quizQuestions.length));
  }

  nextButton.addEventListener("click", () => {
    if (!quizState.answered) return;
    if (quizState.currentQuestion === quizQuestions.length - 1) {
      showResults();
      return;
    }
    quizState.currentQuestion += 1;
    renderQuestion();
  });

  document.getElementById("retryQuiz").addEventListener("click", () => {
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizResult.hidden = true;
    quizContent.hidden = false;
    renderQuestion();
  });

  renderQuestion();
});
