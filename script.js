const QUESTIONS = [
  {
    id: "phone",
    icon: "📱",
    category: "TECNOLOGIA",
    title: "Quanto tempo por dia você usa o celular?",
    hint: "Considere o uso do aparelho ao longo de um dia comum."
  },
  {
    id: "social",
    icon: "📲",
    category: "ENTRETENIMENTO",
    title: "Quanto tempo por dia você passa em redes sociais ou assistindo vídeos curtos?",
    hint: "Por exemplo: Instagram, TikTok, Shorts, Reels e outras redes."
  },
  {
    id: "games",
    icon: "🎮",
    category: "ENTRETENIMENTO",
    title: "Quanto tempo por dia você joga videogame, jogos de celular ou computador?",
    hint: "Vale qualquer tipo de jogo digital."
  },
  {
    id: "tv",
    icon: "📺",
    category: "ENTRETENIMENTO",
    title: "Quanto tempo por dia você assiste TV, filmes, séries ou vídeos?",
    hint: "Considere TV aberta, streaming e vídeos mais longos."
  },
  {
    id: "computer",
    icon: "💻",
    category: "ESTUDO E TRABALHO",
    title: "Quanto tempo por dia você usa computador ou tablet para estudar ou trabalhar?",
    hint: "Aqui entram tarefas, aulas, pesquisas, trabalho e outras atividades produtivas."
  },
  {
    id: "reading",
    icon: "📚",
    category: "FORA DAS TELAS",
    title: "Quanto tempo por dia você lê por escolha própria?",
    hint: "Livros, revistas, quadrinhos ou outros textos."
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    category: "CONVÍVIO",
    title: "Quanto tempo por dia você faz alguma atividade junto com sua família ou com as pessoas que moram com você?",
    hint: "Pode ser brincar, cozinhar, passear, jogar algo juntos ou simplesmente passar um tempo em companhia."
  },
  {
    id: "conversation",
    icon: "💬",
    category: "CONVÍVIO",
    title: "Quanto tempo por dia você conversa pessoalmente com familiares ou outras pessoas da sua casa, sem usar telas?",
    hint: "Considere conversas em que a atenção está nas pessoas, e não nos aparelhos."
  },
  {
    id: "physical",
    icon: "🚶",
    category: "FORA DAS TELAS",
    title: "Quanto tempo por dia você pratica atividade física ou passa tempo em atividades fora das telas?",
    hint: "Esporte, caminhada, brincar, passear e outras atividades em movimento."
  },
  {
    id: "creative",
    icon: "🎨",
    category: "CRIATIVIDADE",
    title: "Quanto tempo por dia você faz algo criativo ou manual sem usar telas?",
    hint: "Desenhar, pintar, cozinhar, montar coisas, tocar instrumento, artesanato e outras criações."
  }
];

const TIME_OPTIONS = [
  { label: "0", value: 0 },
  { label: "30 min", value: 0.5 },
  { label: "1h", value: 1 },
  { label: "2h", value: 2 },
  { label: "3h", value: 3 },
  { label: "4h", value: 4 },
  { label: "5h+", value: 5 }
];

const COMMENTS = {
  balanced: [
    "🙂 Olha só, parece que as telas ocupam uma parte pequena do seu dia.",
    "🌱 Seu tempo parece bem distribuído.",
    "😌 Tem bastante espaço no seu dia para outras atividades.",
    "👏 Legal! Você parece conseguir equilibrar bem as telas com outras coisas.",
    "🌤️ Seu resultado mostra uma rotina relativamente equilibrada.",
    "🧩 Parece que a tecnologia é só uma das peças do seu dia.",
    "🙂 Nada mal! Ainda sobra bastante tempo para outras experiências.",
    "🌿 Seu tempo de tela parece estar dividindo espaço com outras atividades.",
    "👀 Interessante! Seu uso não parece dominar sua rotina.",
    "⭐ Você parece ter encontrado um ritmo confortável.",
    "🧠 Seu resultado mostra bastante variedade no uso do tempo.",
    "📚 Tem espaço aí para leitura, conversa, movimento e descanso.",
    "🙂 Parece que você usa tecnologia sem deixar ela ocupar tudo.",
    "⏳ Seu tempo está distribuído de um jeito interessante.",
    "🌈 Sua rotina parece ter uma boa mistura de atividades.",
    "💚 Legal perceber que nem todo tempo livre precisa virar tempo de tela.",
    "🪁 Parece que ainda sobra bastante espaço fora das telas.",
    "🤓 Seu resultado ficou bem equilibrado.",
    "🌱 Pequenos hábitos assim podem fazer bastante diferença ao longo do ano.",
    "😊 Esse resultado parece confortável. Continue percebendo como usa seu tempo."
  ],
  moderate: [
    "👀 Opa… já são algumas horas da sua semana, hein?",
    "🤔 Parece pouco por dia, mas olha como vai somando.",
    "⏰ Interessante como algumas horinhas viram bastante tempo no fim da semana.",
    "🙂 Nada assustador, mas vale observar para onde esse tempo está indo.",
    "📱 O celular vai ocupando pequenos espaços do dia sem a gente perceber.",
    "🎮 Jogar é divertido — olha só quanto tempo isso representa na semana toda.",
    "📺 Um episódio aqui, outro ali… e o número cresce rapidinho.",
    "🤔 Se você pudesse recuperar uma hora desse tempo, o que faria?",
    "👀 Seu resultado já ocupa uma boa parte do seu tempo livre.",
    "🧠 Talvez valha observar quais dessas horas realmente valem a pena para você.",
    "⏳ Não parece tanto olhando um dia só, né?",
    "📊 Quando colocamos tudo na semana, a história muda um pouco.",
    "🙂 Tecnologia faz parte da rotina. A curiosidade é perceber quanto.",
    "👓 Seu resultado está numa faixa interessante para observar.",
    "💭 Será que todo esse tempo foi escolhido ou parte dele aconteceu no automático?",
    "📱 Quantas vezes você pega o celular sem nem saber exatamente por quê?",
    "🧩 Seu dia tem muitas peças. Quanto espaço você quer que as telas ocupem?",
    "🕐 Alguns minutos repetidos várias vezes viram horas.",
    "🤔 Talvez seu resultado seja um bom convite para prestar atenção na rotina.",
    "🌤️ Não é sobre parar de usar — é sobre perceber o uso."
  ],
  high: [
    "😮 Nossa… isso já é bastante tempo, não é?",
    "👀 Caramba, as telas ocupam uma parte grande da sua semana.",
    "⏳ Quando transformamos em horas, o número impressiona.",
    "😯 Parece menos quando está espalhado ao longo dos dias.",
    "📱 Seu celular está recebendo uma boa parcela do seu tempo.",
    "🎮 Seu tempo com jogos já representa várias horas da semana.",
    "📺 Dá para assistir bastante coisa nesse tempo, hein?",
    "🤔 Será que você imaginava que daria tudo isso?",
    "😮 Quando colocamos tudo junto, fica mais fácil perceber.",
    "🧠 Talvez seja interessante experimentar pequenas pausas ao longo do dia.",
    "👀 Uma hora a menos por dia já mudaria bastante esse resultado.",
    "⌛ Seu tempo de tela já poderia preencher um dia inteiro da semana.",
    "😲 Isso é mais tempo do que parece quando estamos usando aos poucos.",
    "📊 Os números não estão julgando você — só deixando o hábito mais visível.",
    "🤔 Qual dessas atividades você reduziria primeiro se precisasse escolher?",
    "🌱 Pequenas mudanças diárias viram grandes mudanças no mês.",
    "👣 Não precisa mudar tudo de uma vez. Observar já é um começo.",
    "📵 Talvez algumas partes do dia possam virar momentos sem tela.",
    "🧩 Seu resultado mostra como hábitos pequenos podem ocupar espaços grandes.",
    "😮 Vale pensar: esse tempo combina com o que você gostaria para sua rotina?"
  ],
  veryHigh: [
    "😳 Uau… quando vemos o total assim, impressiona bastante.",
    "🤯 Isso vira muitos dias inteiros ao longo do mês!",
    "👀 Nossa, isso é bastante, não é?",
    "⏰ Seu resultado ocupa uma parte enorme das horas da semana.",
    "😮 Talvez você nunca tivesse colocado esse tempo no papel.",
    "📱 Algumas horas por dia podem virar semanas inteiras ao longo do ano.",
    "🤔 E se uma pequena parte disso fosse usada de outro jeito?",
    "🧠 Não precisa abandonar a tecnologia — mas talvez valha escolher melhor alguns momentos.",
    "😲 O número parece gigante porque pequenos hábitos se acumulam todos os dias.",
    "📊 É exatamente por isso que medir o tempo pode ser tão interessante.",
    "👣 Uma mudança de 30 minutos por dia já faria diferença aqui.",
    "⌛ Imagine recuperar algumas dessas horas todo mês.",
    "🌿 Talvez seja uma boa oportunidade de criar alguns momentos sem tela.",
    "😮 Seu resultado mostra como é fácil perder a noção do tempo quando estamos entretidos.",
    "👀 Você imaginava chegar nesse número?",
    "📱 O “só mais cinco minutos” pode virar muita coisa ao longo de um mês.",
    "💭 O que você gostaria de fazer se tivesse algumas dessas horas de volta?",
    "🛑 Talvez algumas pausas durante o dia façam bem.",
    "🌱 Não é uma bronca — é só um convite para perceber.",
    "💚 Tecnologia é ótima. O desafio é não deixar que ela escolha sozinha como usamos nosso tempo."
  ],
  reflection: [
    "📚 Um pouco de leitura todos os dias também vira muita coisa ao longo do ano.",
    "🤓 Cada meia hora dedicada a algo importante vai se somando.",
    "📖 Pequenos hábitos podem ocupar muitas páginas da nossa história.",
    "🌱 Seu tempo fora das telas também merece aparecer nesse resultado.",
    "📚 Imagine quantas experiências cabem nas horas de uma semana.",
    "⭐ É interessante perceber quais atividades estão ganhando espaço na sua rotina.",
    "🧠 Nem todo tempo diante de uma tela tem o mesmo propósito.",
    "📖 Um pouquinho por dia pode virar centenas de horas ao longo dos anos.",
    "🌟 Pequenas escolhas também se acumulam para o lado positivo.",
    "📚 Que tal comparar o tempo rolando a tela com o tempo dedicado a outras coisas?",
    "🍽️ Que tal experimentar alguns momentos do dia sem celular por perto?",
    "🌙 Um fim de dia com menos telas pode abrir espaço para outros hábitos.",
    "💤 Talvez seu celular também mereça uma hora de descanso.",
    "🗣️ Algumas pausas de tela podem virar conversa com alguém.",
    "🚶 E se uma parte desse tempo virasse movimento, passeio ou brincadeira?",
    "🎨 Algumas horas também podem virar desenho, música, cozinha ou criação.",
    "👀 O objetivo não é usar menos tecnologia a qualquer custo — é usar com intenção.",
    "💡 Saber quanto tempo usamos já muda a forma como enxergamos nossos hábitos.",
    "🧭 Você decide como usar seu tempo. Os números só ajudam a enxergar o caminho.",
    "💚 Tecnologia faz parte da vida. O importante é perceber como estamos usando nosso tempo."
  ]
};

const CHART_META = {
  phone: ["📱", "Celular", "screen"],
  social: ["📲", "Redes sociais / vídeos curtos", "detail"],
  games: ["🎮", "Jogos", "detail"],
  tv: ["📺", "TV, filmes e vídeos", "screen"],
  computer: ["💻", "Computador / tablet", "work"],
  reading: ["📚", "Leitura", "offline"],
  family: ["👨‍👩‍👧", "Atividades com a família", "offline"],
  conversation: ["💬", "Conversas em casa", "offline"],
  physical: ["🚶", "Atividade física / fora das telas", "offline"],
  creative: ["🎨", "Criatividade / atividades manuais", "offline"]
};

const screens = {
  welcome: document.getElementById("welcome-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const answers = {};
let currentQuestion = 0;
let autoResetTimer = null;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function formatHours(value) {
  const rounded = Math.round(value * 10) / 10;
  if (rounded <= 0) return "0h";
  if (rounded < 1) return `${Math.round(rounded * 60)}min`;
  if (Number.isInteger(rounded)) return `${rounded}h`;
  const hours = Math.floor(rounded);
  const minutes = Math.round((rounded - hours) * 60);
  return minutes ? `${hours}h ${minutes}min` : `${hours}h`;
}

function weeklyValue(answer) {
  if (!answer) return 0;
  return (answer.weekday || 0) * 5 + (answer.weekend || 0) * 2;
}

function renderTimeOptions(container, period) {
  container.innerHTML = "";

  TIME_OPTIONS.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "time-btn";
    button.textContent = option.label;
    button.dataset.value = option.value;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");

    button.addEventListener("click", () => {
      const question = QUESTIONS[currentQuestion];
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

function getComparison(weekly) {
  const familyTime = weekly.family + weekly.conversation;
  const phoneTime = weekly.phone;
  const readingTime = weekly.reading;

  if (familyTime > 0 && phoneTime >= familyTime * 2.5) {
    return `👀 Nesta semana, o tempo declarado no celular foi cerca de <strong>${(phoneTime / familyTime).toFixed(1).replace(".", ",")} vezes</strong> o tempo de atividades e conversas em família.`;
  }

  if (familyTime > 0 && familyTime >= phoneTime * 0.8) {
    return "😊 Seu tempo de convivência com a família ficou próximo ou acima do tempo declarado no celular.";
  }

  if (readingTime > 0 && phoneTime >= readingTime * 3) {
    return `📚 O celular recebeu cerca de <strong>${(phoneTime / readingTime).toFixed(1).replace(".", ",")} vezes</strong> mais tempo do que a leitura nesta semana.`;
  }

  if (weekly.physical > 0 && weekly.physical >= weekly.tv) {
    return "🚶 Que interessante: seu tempo de atividade física ou fora das telas ficou igual ou acima do tempo de TV e vídeos.";
  }

  return "💭 O mais interessante não é buscar um número perfeito, mas perceber quais atividades estão recebendo mais espaço na sua rotina.";
}

function calculateResults() {
  const weekly = {};

  QUESTIONS.forEach(question => {
    weekly[question.id] = weeklyValue(answers[question.id]);
  });

  // Redes sociais e jogos podem acontecer dentro do celular/computador.
  // Por isso não são somados de novo no total principal.
  const leisureScreen = weekly.phone + weekly.tv;
  const workScreen = weekly.computer;
  const totalDeclaredScreens = leisureScreen + workScreen;
  const offline =
    weekly.reading +
    weekly.family +
    weekly.conversation +
    weekly.physical +
    weekly.creative;

  const month = totalDeclaredScreens * 4.35;
  const year = totalDeclaredScreens * 52;
  const days = year / 24;

  let bucket = "balanced";
  if (leisureScreen > 35) bucket = "veryHigh";
  else if (leisureScreen > 24) bucket = "high";
  else if (leisureScreen > 12) bucket = "moderate";

  const main = splitEmoji(choose(COMMENTS[bucket]));
  const reflection = splitEmoji(choose(COMMENTS.reflection));

  document.getElementById("reaction-emoji").textContent = main.emoji;
  document.getElementById("reaction-text").textContent = main.text;
  document.getElementById("reflection-text").textContent = `${reflection.emoji} ${reflection.text}`;

  document.getElementById("screen-week").textContent = formatHours(totalDeclaredScreens);
  document.getElementById("offline-week").textContent = formatHours(offline);
  document.getElementById("work-week").textContent = formatHours(workScreen);
  document.getElementById("screen-month").textContent = formatHours(month);
  document.getElementById("screen-year").textContent = formatHours(year);
  document.getElementById("screen-days").textContent = `${Math.round(days)} dias inteiros`;

  document.getElementById("comparison-card").innerHTML = getComparison(weekly);

  renderChart(weekly);
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
  currentQuestion = 0;
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

document.getElementById("restart-btn").addEventListener("click", resetKiosk);
