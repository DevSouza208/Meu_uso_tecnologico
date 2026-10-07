const QUESTIONS = [
  {
    id: "messages",
    icon: "💬",
    category: "COMUNICAÇÃO DIGITAL",
    title: "Quanto tempo por dia você passa trocando mensagens, fazendo chamadas ou videochamadas?",
    hint: "WhatsApp, Messenger, Telegram e outros aplicativos de conversa.",
    zeroLabel: "Não uso",
    group: "digital"
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    category: "CONVÍVIO PRESENCIAL",
    title: "Quanto tempo por dia você passa conversando ou fazendo atividades com familiares e pessoas próximas, sem telas?",
    hint: "Conversar, brincar, cozinhar, passear, jogar algo juntos ou simplesmente estar em companhia.",
    zeroLabel: "0 min",
    group: "offline"
  },
  {
    id: "social",
    icon: "📲",
    category: "REDES SOCIAIS",
    title: "Quanto tempo por dia você passa em redes sociais ou assistindo vídeos curtos?",
    hint: "Instagram, TikTok, Reels, Shorts, Facebook e conteúdos parecidos.",
    zeroLabel: "Não uso",
    group: "digital"
  },
  {
    id: "reading",
    icon: "📚",
    category: "LEITURA",
    title: "Quanto tempo por dia você dedica à leitura?",
    hint: "Livros, quadrinhos, revistas, textos de estudo ou outros materiais de leitura.",
    zeroLabel: "Não leio",
    group: "offline"
  },
  {
    id: "games",
    icon: "🎮",
    category: "JOGOS",
    title: "Quanto tempo por dia você passa jogando?",
    hint: "Celular, videogame, computador ou qualquer outro jogo digital.",
    zeroLabel: "Não jogo",
    group: "digital"
  },
  {
    id: "physical",
    icon: "🏃",
    category: "MOVIMENTO",
    title: "Quanto tempo por dia você pratica esportes, caminha, brinca ou faz atividades físicas?",
    hint: "Considere qualquer atividade em que você se movimenta de propósito.",
    zeroLabel: "Não faço",
    group: "offline"
  },
  {
    id: "video",
    icon: "📺",
    category: "VÍDEOS E ENTRETENIMENTO",
    title: "Quanto tempo por dia você passa assistindo vídeos, filmes, séries ou TV?",
    hint: "YouTube, Netflix, streaming, televisão e vídeos mais longos. Não conte vídeos curtos de redes sociais aqui.",
    zeroLabel: "Não assisto",
    group: "digital"
  },
  {
    id: "hobbies",
    icon: "🎨",
    category: "HOBBIES",
    title: "Quanto tempo por dia você passa fazendo algo por prazer sem usar telas?",
    hint: "Desenhar, cozinhar, tocar instrumento, artesanato, montar coisas e outros hobbies.",
    zeroLabel: "Não faço",
    group: "offline"
  },
  {
    id: "work",
    icon: "💻",
    category: "ESTUDO E TRABALHO",
    title: "Quanto tempo por dia você usa tecnologia para estudar ou trabalhar?",
    hint: "Aulas, tarefas, documentos, pesquisas, sistemas e outras atividades necessárias.",
    zeroLabel: "Não uso",
    group: "work"
  },
  {
    id: "otherDigital",
    icon: "🧭",
    category: "OUTROS USOS DIGITAIS",
    title: "Além do que já perguntamos, quanto tempo por dia você usa tecnologia para outras tarefas?",
    hint: "GPS, banco, compras, serviços, pesquisas rápidas e outros usos. Não conte novamente atividades já respondidas.",
    zeroLabel: "Não uso",
    group: "digital"
  }
];

const TIME_VALUES = [
  { label: "15 min", value: 0.25 },
  { label: "30 min", value: 0.5 },
  { label: "1h", value: 1 },
  { label: "2h", value: 2 },
  { label: "3h", value: 3 },
  { label: "4h+", value: 4 }
];

const COMMENTS = {
  balanced: [
    "🙂 Seu uso digital pessoal parece ocupar uma parte menor da sua semana.",
    "🌱 Seu tempo parece estar bem distribuído entre diferentes atividades.",
    "😌 Parece haver bastante espaço na sua rotina para experiências fora das telas.",
    "👏 Legal! A tecnologia parece ser apenas uma parte do seu dia.",
    "🌤️ Seu resultado mostra uma rotina relativamente equilibrada.",
    "🧩 A tecnologia é uma das peças do seu dia, não a única.",
    "🙂 Ainda sobra bastante espaço para outras experiências.",
    "🌿 Seu uso digital parece dividir espaço com outras atividades.",
    "👀 Interessante! As telas não parecem dominar sua rotina pessoal.",
    "⭐ Você parece ter encontrado um ritmo confortável.",
    "🧠 Seu resultado mostra variedade no uso do tempo.",
    "📚 Leitura, convivência, movimento e hobbies também aparecem no seu dia.",
    "🙂 Seu uso de tecnologia não parece ocupar todo o seu tempo livre.",
    "⏳ Seu tempo está distribuído de um jeito interessante.",
    "🌈 Sua rotina parece ter uma boa mistura de atividades.",
    "💚 Nem todo tempo livre está virando tempo de tela.",
    "🪁 Parece que ainda sobra bastante espaço fora das telas.",
    "🤓 Seu retrato de tempo ficou bem variado.",
    "🌱 Pequenos hábitos assim fazem bastante diferença ao longo do ano.",
    "😊 Continue percebendo como cada atividade ocupa espaço na sua rotina."
  ],
  moderate: [
    "👀 Opa… já são algumas horas da sua semana, hein?",
    "🤔 Parece pouco quando olhamos cada atividade separada, mas olha como vai somando.",
    "⏰ Algumas horinhas por dia viram bastante tempo no fim da semana.",
    "🙂 Não é uma bronca, mas vale observar para onde esse tempo está indo.",
    "📱 Pequenos momentos digitais vão ocupando espaços do dia sem a gente perceber.",
    "🎮 Entre mensagens, entretenimento e jogos, o tempo cresce rapidinho.",
    "📺 Um vídeo aqui, outro ali… e a semana acumula muitas horas.",
    "🤔 Se você recuperasse uma hora por dia, o que faria com ela?",
    "👀 Seu uso digital pessoal já ocupa uma parte importante do tempo livre.",
    "🧠 Talvez valha observar quais dessas horas realmente valem a pena para você.",
    "⏳ Não parece tanto olhando uma atividade por vez, né?",
    "📊 Quando juntamos a semana inteira, a história muda um pouco.",
    "🙂 Tecnologia faz parte da rotina. A curiosidade é perceber quanto.",
    "👓 Seu resultado está numa faixa interessante para observar.",
    "💭 Será que todo esse tempo foi escolhido ou parte aconteceu no automático?",
    "📱 Quantas vezes você abre um aplicativo sem ter planejado?",
    "🧩 Seu dia tem muitas peças. Quanto espaço você quer dar às telas?",
    "🕐 Alguns minutos repetidos várias vezes viram horas.",
    "🤔 Seu resultado é um bom convite para prestar atenção na rotina.",
    "🌤️ Não é sobre abandonar a tecnologia — é sobre perceber o uso."
  ],
  high: [
    "😮 Nossa… isso já é bastante tempo, não é?",
    "👀 As atividades digitais pessoais ocupam uma parte grande da sua semana.",
    "⏳ Quando transformamos pequenos períodos em horas, o número impressiona.",
    "😯 Parece menos quando esse tempo está espalhado ao longo dos dias.",
    "📱 Seu entretenimento e comunicação digital estão recebendo uma boa parcela do seu tempo.",
    "🎮 Jogos, redes, mensagens e vídeos podem somar muito mais do que parece.",
    "📺 Dá para fazer bastante coisa no tempo que aparece aqui.",
    "🤔 Será que você imaginava que daria tudo isso?",
    "😮 Quando juntamos as atividades, fica mais fácil perceber.",
    "🧠 Talvez seja interessante experimentar pequenas pausas ao longo do dia.",
    "👀 Uma hora a menos por dia já mudaria bastante esse resultado.",
    "⌛ Seu uso digital pessoal já preenche muitas horas da semana.",
    "😲 Isso é mais tempo do que parece quando usamos aos poucos.",
    "📊 Os números não estão julgando você — só deixando o hábito mais visível.",
    "🤔 Qual atividade digital você reduziria primeiro se quisesse recuperar tempo?",
    "🌱 Pequenas mudanças diárias viram grandes mudanças no mês.",
    "👣 Não precisa mudar tudo de uma vez. Observar já é um começo.",
    "📵 Talvez algumas partes do dia possam virar momentos sem tela.",
    "🧩 Seu resultado mostra como hábitos pequenos podem ocupar espaços grandes.",
    "😮 Vale pensar: esse tempo combina com o que você gostaria para sua rotina?"
  ],
  veryHigh: [
    "😳 Uau… quando vemos o total assim, impressiona bastante.",
    "🤯 Isso pode virar muitos dias inteiros ao longo do ano!",
    "👀 Nossa, isso é bastante, não é?",
    "⏰ Seu uso digital pessoal ocupa uma parte enorme da sua semana.",
    "😮 Talvez você nunca tivesse somado essas atividades desse jeito.",
    "📱 Algumas horas por dia podem virar semanas inteiras ao longo do ano.",
    "🤔 E se uma pequena parte desse tempo fosse usada de outro jeito?",
    "🧠 Não precisa abandonar a tecnologia — mas talvez valha escolher melhor alguns momentos.",
    "😲 O número parece grande porque pequenos hábitos se acumulam todos os dias.",
    "📊 É exatamente por isso que medir o tempo pode ser tão interessante.",
    "👣 Uma mudança de 30 minutos por dia já faria diferença aqui.",
    "⌛ Imagine recuperar algumas dessas horas todo mês.",
    "🌿 Talvez seja uma boa oportunidade de criar alguns momentos sem tela.",
    "😮 Seu resultado mostra como é fácil perder a noção quando estamos entretidos.",
    "👀 Você imaginava chegar nesse número?",
    "📱 O “só mais cinco minutos” pode virar muita coisa ao longo de um mês.",
    "💭 O que você gostaria de fazer se tivesse algumas dessas horas de volta?",
    "🛑 Talvez algumas pausas durante o dia façam bem.",
    "🌱 Não é uma bronca — é só um convite para perceber.",
    "💚 Tecnologia é ótima. O desafio é decidir conscientemente quanto espaço ela ocupa."
  ],
  reflection: [
    "📚 O tempo dedicado à leitura também cresce bastante quando somamos a semana.",
    "🤓 Cada meia hora dedicada a alguma atividade vai se acumulando.",
    "📖 Pequenos hábitos podem ocupar muitas páginas da nossa história.",
    "🌱 Seu tempo fora das telas também merece aparecer nesse resultado.",
    "📚 Imagine quantas experiências cabem nas horas de uma semana.",
    "⭐ É interessante perceber quais atividades estão ganhando mais espaço na rotina.",
    "🧠 Nem todo tempo diante de uma tela tem o mesmo propósito.",
    "📖 Um pouco de leitura por dia pode virar muitas horas ao longo do ano.",
    "🌟 Pequenas escolhas também se acumulam para o lado positivo.",
    "📚 Comparar leitura, convivência e entretenimento pode revelar muita coisa.",
    "🍽️ Alguns momentos do dia podem funcionar muito bem sem celular por perto.",
    "🌙 O fim do dia também pode ser um espaço para desacelerar.",
    "💤 Até a tecnologia pode ter hora para descansar.",
    "🗣️ Algumas pausas de tela podem virar conversa com alguém.",
    "🚶 Parte do tempo pode virar movimento, passeio ou brincadeira.",
    "🎨 Algumas horas também podem virar desenho, música, cozinha ou criação.",
    "👀 O objetivo não é usar menos tecnologia a qualquer custo — é usar com intenção.",
    "💡 Saber quanto tempo usamos já muda a forma como enxergamos nossos hábitos.",
    "🧭 Você decide como usar seu tempo. Os números só ajudam a enxergar o caminho.",
    "💚 Tecnologia faz parte da vida. O importante é perceber como estamos usando nosso tempo."
  ]
};

const CHART_META = {
  messages: ["💬", "Mensagens e chamadas", "digital"],
  family: ["👨‍👩‍👧", "Convívio presencial", "offline"],
  social: ["📲", "Redes sociais / vídeos curtos", "digital"],
  reading: ["📚", "Leitura", "offline"],
  games: ["🎮", "Jogos", "digital"],
  physical: ["🏃", "Atividade física", "offline"],
  video: ["📺", "Vídeos, filmes, séries e TV", "digital"],
  hobbies: ["🎨", "Hobbies sem telas", "offline"],
  work: ["💻", "Estudo / trabalho", "work"],
  otherDigital: ["🧭", "Outros usos digitais", "digital"]
};

const screens = {
  welcome: document.getElementById("welcome-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const answers = {};
const behaviorAnswers = { overrun: null, bedtime: null };
let currentQuestion = 0;
let autoResetTimer = null;
let lastWeekly = null;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function formatHours(value) {
  const rounded = Math.round(value * 100) / 100;
  if (rounded <= 0) return "0h";
  if (rounded < 1) return `${Math.round(rounded * 60)}min`;
  const hours = Math.floor(rounded);
  const minutes = Math.round((rounded - hours) * 60);
  if (!minutes) return `${hours}h`;
  return `${hours}h ${minutes}min`;
}

function weeklyValue(answer) {
  if (!answer) return 0;
  return (answer.weekday || 0) * 5 + (answer.weekend || 0) * 2;
}

function optionsForQuestion(question) {
  return [{ label: question.zeroLabel, value: 0 }, ...TIME_VALUES];
}

function renderTimeOptions(container, period) {
  const question = QUESTIONS[currentQuestion];
  container.innerHTML = "";

  optionsForQuestion(question).forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "time-btn";
    button.textContent = option.label;
    button.dataset.value = option.value;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");

    button.addEventListener("click", () => {
      answers[question.id] ||= {};
      answers[question.id][period] = option.value;

      container.querySelectorAll(".time-btn").forEach(item => {
        const selected = item === button;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-checked", selected ? "true" : "false");
      });

      updateNextButton();
    });

    container.appendChild(button);
  });
}

function restoreSelection(container, period) {
  const question = QUESTIONS[currentQuestion];
  const value = answers[question.id]?.[period];

  container.querySelectorAll(".time-btn").forEach(button => {
    const selected = value !== undefined && Number(button.dataset.value) === value;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", selected ? "true" : "false");
  });
}

function updateNextButton() {
  const question = QUESTIONS[currentQuestion];
  const answer = answers[question.id];
  const ready = answer && answer.weekday !== undefined && answer.weekend !== undefined;
  const button = document.getElementById("next-btn");

  button.disabled = !ready;
  button.textContent = currentQuestion === QUESTIONS.length - 1
    ? "Ver meu resultado →"
    : "Próxima pergunta →";
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  document.getElementById("question-icon").textContent = question.icon;
  document.getElementById("question-category").textContent = question.category;
  document.getElementById("question-title").textContent = question.title;
  document.getElementById("question-hint").textContent = question.hint;
  document.getElementById("question-counter").textContent = `${currentQuestion + 1} de ${QUESTIONS.length}`;
  document.getElementById("question-percent").textContent = `${Math.round(progress)}%`;
  document.getElementById("progress-bar").style.width = `${progress}%`;
  document.getElementById("back-btn").classList.toggle("hidden", currentQuestion === 0);

  const weekday = document.getElementById("weekday-options");
  const weekend = document.getElementById("weekend-options");

  renderTimeOptions(weekday, "weekday");
  renderTimeOptions(weekend, "weekend");
  restoreSelection(weekday, "weekday");
  restoreSelection(weekend, "weekend");
  updateNextButton();
}

function choose(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function splitEmoji(text) {
  const match = text.match(/^(\S+)\s+(.*)$/);
  return match ? { emoji: match[1], text: match[2] } : { emoji: "👀", text };
}

function sumGroup(weekly, group) {
  return QUESTIONS
    .filter(question => question.group === group)
    .reduce((total, question) => total + weekly[question.id], 0);
}

function topActivity(weekly, group) {
  return QUESTIONS
    .filter(question => question.group === group)
    .map(question => ({ question, value: weekly[question.id] }))
    .sort((a, b) => b.value - a.value)[0];
}

function getComparison(weekly, digital, offline) {
  const family = weekly.family;
  const reading = weekly.reading;
  const topDigital = topActivity(weekly, "digital");

  if (family > 0 && digital >= family * 3) {
    return `👀 Seu uso digital pessoal ficou em cerca de <strong>${(digital / family).toFixed(1).replace(".", ",")} vezes</strong> o tempo de convívio presencial que você declarou.`;
  }

  if (offline > 0 && offline >= digital) {
    return "😊 O conjunto de leitura, convívio, movimento e hobbies ficou igual ou acima do seu uso digital pessoal.";
  }

  if (reading > 0 && digital >= reading * 4) {
    return `📚 Seu uso digital pessoal ficou em cerca de <strong>${(digital / reading).toFixed(1).replace(".", ",")} vezes</strong> o tempo dedicado à leitura.`;
  }

  if (topDigital && topDigital.value > 0) {
    return `${CHART_META[topDigital.question.id][0]} Entre as atividades digitais, <strong>${CHART_META[topDigital.question.id][1]}</strong> foi a que mais ocupou tempo na sua semana.`;
  }

  return "💭 O mais interessante não é buscar um número perfeito, mas perceber quais atividades estão recebendo mais espaço na sua rotina.";
}

function updateBehaviorInsight() {
  const el = document.getElementById("behavior-insight");
  const { overrun, bedtime } = behaviorAnswers;

  if (!overrun && !bedtime) {
    el.textContent = "Essas respostas não mudam suas horas. Elas só ajudam a refletir sobre seus hábitos.";
    return;
  }

  if (overrun === "often" && bedtime === "often") {
    el.innerHTML = "👀 Você contou que <strong>muitas vezes passa do tempo que pretendia</strong> e usa telas <strong>quase todos os dias antes de dormir</strong>. Talvez valha observar quais momentos estão acontecendo mais no automático.";
    return;
  }

  if (overrun === "often") {
    el.innerHTML = "⏳ Você contou que <strong>muitas vezes fica mais tempo nas telas do que pretendia</strong>. Compare essa percepção com as horas que apareceram no seu resultado.";
    return;
  }

  if (bedtime === "often") {
    el.innerHTML = "🌙 Você contou que usa telas <strong>quase todos os dias antes de dormir</strong>. Esse é um hábito interessante para observar na sua rotina.";
    return;
  }

  if (overrun === "never" && bedtime === "never") {
    el.innerHTML = "🙂 Você relatou bastante controle nesses dois hábitos. Ainda assim, o gráfico ajuda a enxergar como o tempo se distribui.";
    return;
  }

  el.innerHTML = "💡 Seus hábitos variam conforme o dia. Perceber quando o uso é intencional e quando acontece no automático já é uma informação importante.";
}

function calculateResults() {
  const weekly = {};

  QUESTIONS.forEach(question => {
    weekly[question.id] = weeklyValue(answers[question.id]);
  });

  const digital = sumGroup(weekly, "digital");
  const work = sumGroup(weekly, "work");
  const offline = sumGroup(weekly, "offline");

  const month = digital * 4.35;
  const year = digital * 52;
  const days = year / 24;

  let bucket = "balanced";
  if (digital > 42) bucket = "veryHigh";
  else if (digital > 28) bucket = "high";
  else if (digital > 14) bucket = "moderate";

  const main = splitEmoji(choose(COMMENTS[bucket]));
  const reflection = splitEmoji(choose(COMMENTS.reflection));

  document.getElementById("reaction-emoji").textContent = main.emoji;
  document.getElementById("reaction-text").textContent = main.text;
  document.getElementById("reflection-text").textContent = `${reflection.emoji} ${reflection.text}`;

  document.getElementById("screen-week").textContent = formatHours(digital);
  document.getElementById("offline-week").textContent = formatHours(offline);
  document.getElementById("work-week").textContent = formatHours(work);
  document.getElementById("screen-month").textContent = formatHours(month);
  document.getElementById("screen-year").textContent = formatHours(year);
  document.getElementById("screen-days").textContent = `${Math.round(days)} dias inteiros`;

  document.getElementById("comparison-card").innerHTML = getComparison(weekly, digital, offline);
  lastWeekly = weekly;
  renderChart(weekly);
  updateBehaviorInsight();
}

function renderChart(weekly) {
  const chart = document.getElementById("usage-chart");
  const max = Math.max(...Object.values(weekly), 1);
  chart.innerHTML = "";

  QUESTIONS.forEach(question => {
    const value = weekly[question.id];
    const [icon, label, type] = CHART_META[question.id];

    const row = document.createElement("div");
    row.className = `chart-row chart-row-${type}`;

    row.innerHTML = `
      <div class="chart-label">
        <span>${icon}</span>
        <strong>${label}</strong>
        <b>${formatHours(value)}</b>
      </div>
      <div class="chart-track">
        <span style="width:${Math.max((value / max) * 100, value ? 4 : 0)}%"></span>
      </div>
    `;

    chart.appendChild(row);
  });
}

function showResults() {
  calculateResults();
  showScreen("result");

  clearTimeout(autoResetTimer);
  autoResetTimer = setTimeout(resetKiosk, 90000);
}

function resetKiosk() {
  clearTimeout(autoResetTimer);
  Object.keys(answers).forEach(key => delete answers[key]);
  behaviorAnswers.overrun = null;
  behaviorAnswers.bedtime = null;
  lastWeekly = null;
  currentQuestion = 0;

  document.querySelectorAll(".quick-options button").forEach(button => {
    button.classList.remove("selected");
  });

  updateBehaviorInsight();
  showScreen("welcome");
}

document.getElementById("start-btn").addEventListener("click", () => {
  currentQuestion = 0;
  renderQuestion();
  showScreen("quiz");
});

document.getElementById("back-btn").addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion--;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("next-btn").addEventListener("click", () => {
  const question = QUESTIONS[currentQuestion];
  const answer = answers[question.id];

  if (!answer || answer.weekday === undefined || answer.weekend === undefined) return;

  if (currentQuestion === QUESTIONS.length - 1) {
    showResults();
    return;
  }

  currentQuestion++;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".quick-options").forEach(group => {
  group.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;

    group.querySelectorAll("button").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    behaviorAnswers[group.dataset.behavior] = button.dataset.value;
    updateBehaviorInsight();
  });
});

document.getElementById("restart-btn").addEventListener("click", resetKiosk);
