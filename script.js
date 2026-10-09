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

const MAIN_COMMENTS = {
  low: [
    ["🙂", "Interessante! Seu uso digital pessoal ficou relativamente compacto quando olhamos a semana inteira."],
    ["🌱", "Olha só: a tecnologia aparece na sua rotina, mas divide espaço com várias outras atividades."],
    ["🧩", "Seu retrato ficou bem variado — as telas são uma das peças do seu dia, não a única."],
    ["👀", "Quando juntamos tudo, seu uso digital pessoal ficou menor do que muita gente imagina ao pensar em pequenos acessos ao longo do dia."],
    ["😊", "Seu resultado mostra bastante espaço para atividades diferentes ao longo da semana."]
  ],
  medium: [
    ["👀", "Opa… somando os pequenos momentos, já aparecem algumas boas horas de uso digital na semana."],
    ["🤔", "Separadas, as atividades parecem pequenas. Juntas, elas contam uma história bem mais interessante."],
    ["⏳", "Alguns minutos aqui e ali viraram várias horas quando colocamos a semana inteira no papel."],
    ["📊", "É curioso como o total muda quando deixamos de pensar em 'tempo no celular' e olhamos atividade por atividade."],
    ["🙂", "Seu resultado não é uma nota — é um retrato. E já dá para enxergar onde boa parte do tempo está indo."],
    ["🧠", "Talvez você não imaginasse esse total antes de somar cada pedacinho da rotina."]
  ],
  high: [
    ["😮", "Nossa… quando juntamos todas as atividades digitais pessoais, o total chama atenção, não é?"],
    ["👀", "Olha só quanto aqueles pequenos momentos espalhados pelo dia conseguem somar em uma semana."],
    ["⏰", "O número ficou grande porque hábitos pequenos, repetidos todos os dias, viram muitas horas."],
    ["🤔", "Será que você imaginava chegar nesse total antes de responder atividade por atividade?"],
    ["📱", "Seu resultado mostra bem como o uso digital pode crescer sem parecer tão grande em cada momento isolado."],
    ["🧩", "Nada aqui é uma bronca — os números só deixam visível algo que normalmente fica espalhado ao longo do dia."]
  ],
  veryHigh: [
    ["😳", "Uau… olhando tudo junto, o total realmente impressiona."],
    ["🤯", "É muita coisa somada em pequenos pedaços do dia. Talvez fosse difícil imaginar esse número sem fazer a conta."],
    ["👀", "Nossa, isso é bastante tempo, não é? O curioso é que ele provavelmente não parece tão grande enquanto está espalhado pelo dia."],
    ["📊", "Esse é exatamente o tipo de número que fica escondido quando pensamos apenas em cada aplicativo separadamente."],
    ["⏳", "Pequenos hábitos repetidos muitas vezes podem ocupar um espaço enorme quando olhamos o mês ou o ano inteiro."],
    ["🌱", "O objetivo não é julgar o número — é enxergá-lo. Agora você sabe um pouco melhor onde seu tempo está indo."]
  ]
};

const INSIGHT_VARIANTS = {
  topDigital: [
    (label, hours) => `Entre os usos digitais, <strong>${label}</strong> foi o que mais apareceu: cerca de <strong>${hours}</strong> na semana.`,
    (label, hours) => `🏆 No seu mapa digital, <strong>${label}</strong> ficou no topo com aproximadamente <strong>${hours}</strong>.`,
    (label, hours) => `Se a sua semana tivesse um “campeão digital”, seria <strong>${label}</strong>: <strong>${hours}</strong>.`,
    (label, hours) => `Um detalhe curioso: <strong>${label}</strong> foi a atividade digital que ganhou mais espaço na sua semana (<strong>${hours}</strong>).`
  ],
  digitalVsFamily: [
    (digital, family) => `Quando colocamos lado a lado, seu uso digital pessoal ficou em <strong>${digital}</strong> e o convívio presencial em <strong>${family}</strong> na semana.`,
    (digital, family) => `👨‍👩‍👧 Um contraste interessante: <strong>${digital}</strong> de uso digital pessoal e <strong>${family}</strong> de convívio presencial.`,
    (digital, family) => `Seu gráfico mostra dois pedaços importantes da rotina: <strong>${digital}</strong> no digital pessoal e <strong>${family}</strong> em convivência presencial.`,
    (digital, family) => `Olhar os números juntos muda a percepção: digital pessoal <strong>${digital}</strong> × convívio presencial <strong>${family}</strong>.`
  ],
  digitalVsReading: [
    (digital, reading) => `📚 Nesta semana, apareceram <strong>${reading}</strong> de leitura e <strong>${digital}</strong> de uso digital pessoal.`,
    (digital, reading) => `Leitura e tecnologia contam histórias diferentes do seu tempo: <strong>${reading}</strong> lendo e <strong>${digital}</strong> em usos digitais pessoais.`,
    (digital, reading) => `Um jeito diferente de olhar a rotina: <strong>${reading}</strong> dedicadas à leitura ao lado de <strong>${digital}</strong> no digital pessoal.`
  ],
  digitalVsPhysical: [
    (digital, physical) => `🏃 Movimento também entrou no seu retrato: <strong>${physical}</strong> na semana, enquanto o uso digital pessoal ficou em <strong>${digital}</strong>.`,
    (digital, physical) => `Seu corpo e suas telas também disputam espaço na agenda: <strong>${physical}</strong> de movimento e <strong>${digital}</strong> de uso digital pessoal.`,
    (digital, physical) => `Olha essa comparação: atividade física <strong>${physical}</strong> × uso digital pessoal <strong>${digital}</strong>.`
  ],
  offlineStrong: [
    (offline, digital) => `🌱 As atividades fora das telas somaram <strong>${offline}</strong>, ficando próximas ou acima do seu uso digital pessoal (<strong>${digital}</strong>).`,
    (offline, digital) => `Legal: leitura, convívio, movimento e hobbies juntos ocuparam <strong>${offline}</strong> — um espaço importante na sua semana.`,
    (offline, digital) => `Seu retrato mostra bastante presença de atividades fora das telas: <strong>${offline}</strong> na semana, contra <strong>${digital}</strong> de uso digital pessoal.`
  ],
  weekendHigher: [
    (week, weekend) => `✨ Seu uso digital muda no fim de semana: cerca de <strong>${weekend}</strong> por dia, contra <strong>${week}</strong> nos dias úteis.`,
    (week, weekend) => `Fim de semana parece ser quando o digital ganha mais espaço: <strong>${weekend}</strong>/dia contra <strong>${week}</strong>/dia durante a semana.`,
    (week, weekend) => `Seu ritmo digital não é igual todos os dias: ele sobe de <strong>${week}</strong> para <strong>${weekend}</strong> por dia no fim de semana.`
  ],
  weekdayHigher: [
    (week, weekend) => `📅 Curiosamente, seu uso digital pessoal é maior nos dias úteis: <strong>${week}</strong>/dia contra <strong>${weekend}</strong>/dia no fim de semana.`,
    (week, weekend) => `Seu gráfico sugere um ritmo mais digital durante a semana: <strong>${week}</strong>/dia nos dias úteis e <strong>${weekend}</strong>/dia no fim de semana.`
  ],
  workContext: [
    (work) => `💻 Além do uso pessoal, você declarou cerca de <strong>${work}</strong> por semana usando tecnologia para estudo ou trabalho.`,
    (work) => `Uma parte importante das suas telas tem outro propósito: <strong>${work}</strong> semanais de estudo ou trabalho.`,
    (work) => `Nem toda tela é entretenimento: no seu caso, estudo e trabalho somaram aproximadamente <strong>${work}</strong> na semana.`
  ],
  hobbyPresence: [
    (hobbies) => `🎨 Seus hobbies sem tela também apareceram: aproximadamente <strong>${hobbies}</strong> ao longo da semana.`,
    (hobbies) => `Tem criação fora das telas por aí: seus hobbies somaram cerca de <strong>${hobbies}</strong> na semana.`
  ]
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
let idleTimer = null;
const IDLE_TIMEOUT_MS = 120000;

const launchScreen = document.getElementById("launch-screen");
const launchButton = document.getElementById("launch-btn");
const appShell = document.getElementById("app-shell");
const fitStage = document.getElementById("fit-stage");
const fitContent = document.getElementById("fit-content");

let kioskStarted = false;
let fitFrame = null;

function isFullscreenActive() {
  return Boolean(document.fullscreenElement || document.webkitFullscreenElement);
}

async function enterFullscreen() {
  const target = document.documentElement;

  try {
    if (target.requestFullscreen) {
      await target.requestFullscreen({ navigationUI: "hide" });
      return true;
    }

    if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
      return true;
    }
  } catch (error) {
    console.warn("Não foi possível entrar em tela cheia automaticamente:", error);
  }

  return false;
}

function revealKiosk() {
  kioskStarted = true;
  launchScreen.classList.add("is-hidden");
  appShell.classList.remove("kiosk-hidden");
  appShell.setAttribute("aria-hidden", "false");
  requestFit();
  resetIdleTimer();
}

function showFullscreenGate() {
  if (!kioskStarted) return;

  launchScreen.classList.remove("is-hidden");
  launchScreen.classList.add("resume-mode");
  appShell.classList.add("kiosk-hidden");
  appShell.setAttribute("aria-hidden", "true");

  const strong = launchButton.querySelector("strong");
  const small = launchButton.querySelector("small");
  if (strong) strong.textContent = "Continuar";
  if (small) small.textContent = "voltar para tela cheia";
}

function measureAndFit() {
  if (!kioskStarted || appShell.classList.contains("kiosk-hidden")) return;

  fitContent.style.transform = "none";

  const stageWidth = Math.max(fitStage.clientWidth - 32, 1);
  const stageHeight = Math.max(fitStage.clientHeight - 32, 1);
  const naturalWidth = Math.max(fitContent.scrollWidth, 1);
  const naturalHeight = Math.max(fitContent.scrollHeight, 1);

  const scale = Math.min(1, stageWidth / naturalWidth, stageHeight / naturalHeight);
  fitContent.style.transform = `scale(${scale})`;
}

function requestFit() {
  cancelAnimationFrame(fitFrame);
  fitFrame = requestAnimationFrame(() => {
    requestAnimationFrame(measureAndFit);
  });
}

launchButton.addEventListener("click", async () => {
  await enterFullscreen();

  launchScreen.classList.remove("resume-mode");
  const strong = launchButton.querySelector("strong");
  const small = launchButton.querySelector("small");
  if (strong) strong.textContent = "Começar";
  if (small) small.textContent = "clique para entrar";

  revealKiosk();
});

document.addEventListener("fullscreenchange", () => {
  if (!kioskStarted) return;
  if (isFullscreenActive()) {
    revealKiosk();
  } else {
    showFullscreenGate();
  }
});

document.addEventListener("webkitfullscreenchange", () => {
  if (!kioskStarted) return;
  if (isFullscreenActive()) {
    revealKiosk();
  } else {
    showFullscreenGate();
  }
});

window.addEventListener("resize", requestFit);

document.addEventListener("wheel", event => {
  if (kioskStarted) event.preventDefault();
}, { passive: false });

document.addEventListener("touchmove", event => {
  if (kioskStarted) event.preventDefault();
}, { passive: false });


function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  fitContent.classList.toggle("result-mode", name === "result");
  requestFit();
}

function formatHours(value) {
  const rounded = Math.round(value * 100) / 100;
  if (rounded <= 0) return "0h";
  if (rounded < 1) return `${Math.round(rounded * 60)}min`;
  const hours = Math.floor(rounded);
  const minutes = Math.round((rounded - hours) * 60);
  return minutes ? `${hours}h ${minutes}min` : `${hours}h`;
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
    button.innerHTML = `<span>${option.label}</span>`;
    button.dataset.value = String(option.value);
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

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
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

function dailyDigital(period) {
  return QUESTIONS
    .filter(question => question.group === "digital")
    .reduce((total, question) => total + (answers[question.id]?.[period] || 0), 0);
}

function buildInsights(weekly, digital, offline, work) {
  const candidates = [];
  const top = topActivity(weekly, "digital");
  const weekdayDigital = dailyDigital("weekday");
  const weekendDigital = dailyDigital("weekend");

  if (top && top.value > 0) {
    const label = CHART_META[top.question.id][1];
    const template = randomItem(INSIGHT_VARIANTS.topDigital);
    candidates.push({ icon: CHART_META[top.question.id][0], html: template(label, formatHours(top.value)) });
  }

  if (weekly.family > 0) {
    const template = randomItem(INSIGHT_VARIANTS.digitalVsFamily);
    candidates.push({ icon: "👨‍👩‍👧", html: template(formatHours(digital), formatHours(weekly.family)) });
  }

  if (weekly.reading > 0) {
    const template = randomItem(INSIGHT_VARIANTS.digitalVsReading);
    candidates.push({ icon: "📚", html: template(formatHours(digital), formatHours(weekly.reading)) });
  }

  if (weekly.physical > 0) {
    const template = randomItem(INSIGHT_VARIANTS.digitalVsPhysical);
    candidates.push({ icon: "🏃", html: template(formatHours(digital), formatHours(weekly.physical)) });
  }

  if (offline >= digital && offline > 0) {
    const template = randomItem(INSIGHT_VARIANTS.offlineStrong);
    candidates.push({ icon: "🌱", html: template(formatHours(offline), formatHours(digital)) });
  }

  if (weekendDigital >= weekdayDigital + 0.5) {
    const template = randomItem(INSIGHT_VARIANTS.weekendHigher);
    candidates.push({ icon: "✨", html: template(formatHours(weekdayDigital), formatHours(weekendDigital)) });
  } else if (weekdayDigital >= weekendDigital + 0.5) {
    const template = randomItem(INSIGHT_VARIANTS.weekdayHigher);
    candidates.push({ icon: "📅", html: template(formatHours(weekdayDigital), formatHours(weekendDigital)) });
  }

  if (work > 0) {
    const template = randomItem(INSIGHT_VARIANTS.workContext);
    candidates.push({ icon: "💻", html: template(formatHours(work)) });
  }

  if (weekly.hobbies > 0) {
    const template = randomItem(INSIGHT_VARIANTS.hobbyPresence);
    candidates.push({ icon: "🎨", html: template(formatHours(weekly.hobbies)) });
  }

  const unique = [];
  const seen = new Set();
  candidates.forEach(item => {
    const key = item.html.replace(/<[^>]+>/g, "");
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  });

  // Embaralha e preserva no máximo quatro descobertas para não cansar.
  return unique.sort(() => Math.random() - 0.5).slice(0, 4);
}

function renderInsights(weekly, digital, offline, work) {
  const grid = document.getElementById("insights-grid");
  const insights = buildInsights(weekly, digital, offline, work);

  if (!insights.length) {
    insights.push({
      icon: "💭",
      html: "O mais interessante não é buscar um número perfeito, mas perceber quais atividades estão recebendo mais espaço na sua rotina."
    });
  }

  grid.innerHTML = insights.map(item => `
    <article class="insight-card">
      <span class="insight-icon">${item.icon}</span>
      <p>${item.html}</p>
    </article>
  `).join("");
}

function updateBehaviorInsight() {
  const el = document.getElementById("behavior-insight");
  const { overrun, bedtime } = behaviorAnswers;

  if (!overrun && !bedtime) {
    el.textContent = "Essas respostas não mudam suas horas. Elas só ajudam a refletir sobre seus hábitos.";
    return;
  }

  if (overrun === "often" && bedtime === "often") {
    el.innerHTML = "👀 Você percebeu dois hábitos ao mesmo tempo: às vezes o uso passa do planejado e as telas aparecem muito perto da hora de dormir. Talvez valha só observar quando isso acontece.";
    return;
  }

  if (overrun === "often") {
    el.innerHTML = "⏳ Você contou que muitas vezes fica mais tempo nas telas do que pretendia. Agora que o total está visível, fica mais fácil perceber em quais atividades isso pode acontecer.";
    return;
  }

  if (bedtime === "often") {
    el.innerHTML = "🌙 As telas aparecem quase todos os dias perto da hora de dormir. Não é uma nota nem um problema automático — é só mais um pedacinho interessante do seu padrão.";
    return;
  }

  if (overrun === "never" && bedtime === "never") {
    el.innerHTML = "🙂 Nesses dois hábitos, você percebe bastante controle. O gráfico ajuda a complementar essa percepção com o tempo declarado.";
    return;
  }

  el.innerHTML = "💡 Seus hábitos mudam conforme o dia. Perceber quando o uso foi escolhido e quando aconteceu no automático já é uma descoberta importante.";
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

  let tone = "low";
  if (digital > 42) tone = "veryHigh";
  else if (digital > 28) tone = "high";
  else if (digital > 14) tone = "medium";

  const [emoji, text] = randomItem(MAIN_COMMENTS[tone]);
  document.getElementById("reaction-emoji").textContent = emoji;
  document.getElementById("reaction-text").textContent = text;

  const top = topActivity(weekly, "digital");
  if (top && top.value > 0) {
    document.getElementById("reflection-text").textContent =
      `Seu maior bloco digital foi ${CHART_META[top.question.id][1].toLowerCase()}. Veja abaixo como ele se compara com o restante da sua rotina.`;
  } else {
    document.getElementById("reflection-text").textContent =
      "O gráfico abaixo ajuda a enxergar como diferentes partes da sua rotina se distribuem.";
  }

  document.getElementById("screen-week").textContent = formatHours(digital);
  document.getElementById("offline-week").textContent = formatHours(offline);
  document.getElementById("work-week").textContent = formatHours(work);
  document.getElementById("screen-month").textContent = formatHours(month);
  document.getElementById("screen-year").textContent = formatHours(year);
  document.getElementById("screen-days").textContent = `${Math.round(days)} dias inteiros`;

  renderInsights(weekly, digital, offline, work);
  renderChart(weekly);
  updateBehaviorInsight();
  requestFit();
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
  autoResetTimer = setTimeout(resetKiosk, IDLE_TIMEOUT_MS);
  resetIdleTimer();
}

function resetIdleTimer() {
  if (!kioskStarted || appShell.classList.contains("kiosk-hidden")) return;

  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    resetKiosk();
  }, IDLE_TIMEOUT_MS);
}

["pointerdown", "pointermove", "keydown", "touchstart"].forEach(eventName => {
  document.addEventListener(eventName, resetIdleTimer, { passive: true });
});

function resetKiosk() {
  clearTimeout(autoResetTimer);
  clearTimeout(idleTimer);
  Object.keys(answers).forEach(key => delete answers[key]);
  behaviorAnswers.overrun = null;
  behaviorAnswers.bedtime = null;
  currentQuestion = 0;

  document.querySelectorAll(".quick-options button").forEach(button => {
    button.classList.remove("selected");
  });

  updateBehaviorInsight();
  showScreen("welcome");
  resetIdleTimer();
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
  requestFit();
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
  requestFit();
});

document.querySelectorAll(".quick-options").forEach(group => {
  group.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;

    group.querySelectorAll("button").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    behaviorAnswers[group.dataset.behavior] = button.dataset.value;
    updateBehaviorInsight();
    requestFit();
  });
});

document.getElementById("restart-btn").addEventListener("click", resetKiosk);
