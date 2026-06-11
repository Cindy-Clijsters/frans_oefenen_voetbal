const STORAGE_KEY = "fransVoetbalGameV1";

const vocabulary = {
  places: [
    ["la gare", "het station"], ["le métro", "de metro"], ["l'arrêt", "de halte"], ["la ligne", "de lijn"],
    ["le cinéma", "de bioscoop"], ["la rue", "de straat"], ["le café", "het café"], ["la boucherie", "de slagerij"],
    ["le supermarché", "de supermarkt"], ["le magasin", "de winkel"], ["la poste", "het postkantoor"],
    ["l'école", "de school"], ["le terrain de foot", "het voetbalveld"], ["le club de foot", "de voetbalclub"],
    ["le restaurant", "het restaurant"], ["le bois", "het bos"], ["le zoo", "de dierentuin"], ["le parc", "het park"],
    ["la place", "het plein"], ["le rond-point", "de rotonde"], ["le carrefour", "het kruispunt"], ["les feux", "de verkeerslichten"],
    ["l'appartement", "het appartement"], ["la maison", "het huis"]
  ],
  objects: [
    ["une table", "een tafel"], ["une chaise", "een stoel"], ["une lampe", "een lamp"], ["une télé", "een tv"],
    ["des BD", "strips"], ["un message", "een bericht"], ["un cahier", "een schrift"], ["un stylo", "een pen"],
    ["une gomme", "een gom"], ["un jeu", "een spel"], ["une balle", "een bal"], ["un ballon", "een voetbal"],
    ["un vélo", "een fiets"], ["un sac à dos", "een rugzak"], ["un livre", "een boek"], ["une règle", "een lat"],
    ["une boîte", "een doos"], ["une tomate", "een tomaat"], ["une pomme", "een appel"], ["une banane", "een banaan"],
    ["une limonade", "een limonade"], ["un médicament", "een medicijn"], ["une robe", "een jurk"], ["un short", "een short"],
    ["un t-shirt", "een T-shirt"], ["des chaussures", "schoenen"], ["des baskets", "sneakers"], ["des balles de tennis", "tennisballen"]
  ],
  peopleAnimals: [
    ["la mère", "de moeder"], ["le père", "de vader"], ["mon oncle", "mijn oom"], ["la tante", "de tante"],
    ["les enfants", "de kinderen"], ["le garçon", "de jongen"], ["la fille", "het meisje"], ["les parents", "de ouders"],
    ["le docteur", "de dokter"], ["l'homme", "de man"], ["le lapin", "het konijn"], ["le chat", "de kat"],
    ["le chien", "de hond"], ["la tortue", "de schildpad"], ["le coq", "de haan"], ["l'éléphant", "de olifant"]
  ],
  descriptions: [
    ["rouge", "rood"], ["jaune", "geel"], ["bleu", "blauw"], ["vert", "groen"], ["noir", "zwart"],
    ["brun", "bruin"], ["gris", "grijs"], ["blanc", "wit"], ["orange", "oranje"], ["blond", "blond"],
    ["vieux / vieille", "oud"], ["joli / jolie", "mooi"], ["grand / grande", "groot"], ["petit / petite", "klein"],
    ["lourd / lourde", "zwaar"], ["chaud / chaude", "warm"], ["froid / froide", "koud"], ["trop", "te"],
    ["beaucoup", "veel"], ["fini", "klaar"]
  ],
  directions: [
    ["à droite", "naar rechts"], ["à gauche", "naar links"], ["tout droit", "rechtdoor"], ["au carrefour", "aan het kruispunt"],
    ["au rond-point", "aan de rotonde"], ["aux feux", "aan de verkeerslichten"], ["la première rue", "de eerste straat"],
    ["la deuxième rue", "de tweede straat"], ["à côté de", "naast"], ["près de", "dicht bij"], ["loin de", "ver van"],
    ["devant", "voor"], ["derrière", "achter"], ["dans", "in"], ["chez", "bij"]
  ]
};

const phrases = [
  ["Tu habites où ?", "Waar woon jij?"], ["J'habite rue de la Gare.", "Ik woon in de Stationsstraat."],
  ["J'habite près de l'école.", "Ik woon dicht bij de school."], ["J'habite loin du cinéma.", "Ik woon ver van de bioscoop."],
  ["Je cherche la gare.", "Ik zoek het station."], ["Je cherche le cinéma.", "Ik zoek de bioscoop."],
  ["Excusez-moi, Monsieur.", "Pardon, meneer."], ["Excusez-moi, Madame.", "Pardon, mevrouw."],
  ["C'est facile.", "Het is gemakkelijk."], ["C'est tout près.", "Het is heel dichtbij."],
  ["Ce n'est pas loin.", "Het is niet ver."], ["Allez tout droit.", "Ga rechtdoor."],
  ["Tournez à gauche.", "Sla linksaf."], ["Tournez à droite.", "Sla rechtsaf."],
  ["Prenez la première rue à gauche.", "Neem de eerste straat links."],
  ["Prenez la deuxième rue à droite.", "Neem de tweede straat rechts."],
  ["Merci.", "Dank je."], ["De rien.", "Graag gedaan."], ["Je ne comprends pas.", "Ik begrijp het niet."],
  ["Je prends le train.", "Ik neem de trein."], ["Je prends le bus.", "Ik neem de bus."],
  ["Nous prenons le métro.", "Wij nemen de metro."], ["Je suis à Bruxelles.", "Ik ben in Brussel."],
  ["Je prends la ligne numéro 5.", "Ik neem lijn nummer 5."], ["Il y a deux arrêts.", "Er zijn twee haltes."],
  ["Je suis là.", "Ik ben daar."], ["Tu es à la gare.", "Jij bent aan het station."],
  ["J'aimerais habiter dans une grande maison.", "Ik zou graag in een groot huis wonen."],
  ["Je voudrais avoir un jeu.", "Ik zou graag een spel hebben."],
  ["C'est trop cher.", "Het is te duur."], ["C'est trop lourd.", "Het is te zwaar."],
  ["C'est trop petit.", "Het is te klein."], ["C'est trop grand.", "Het is te groot."]
];

const leagues = [
  { name: "Straatvoetbal", club: "Straatteam Brussel", xpNeeded: 0 },
  { name: "Provinciale Liga", club: "FC Liège Jeugd", xpNeeded: 120 },
  { name: "Nationale Liga", club: "Olympique Lille Academy", xpNeeded: 280 },
  { name: "Champions League", club: "Paris Talent Club", xpNeeded: 480 },
  { name: "Wereldkampioenschap", club: "Europa Selectie", xpNeeded: 720 }
];

const missions = [
  { id: "m1", league: 0, city: "Bruxelles", type: "penalty", title: "Penalty in het straatstadion", goal: "Woordenschat: stad en plaatsen", pool: "places", reward: { xp: 60, coins: 20, card: "Stadionkaart Bruxelles" } },
  { id: "m2", league: 0, city: "Bruxelles", type: "dribble", title: "Dribbel naar de training", goal: "Richtingen: links, rechts, rechtdoor", pool: "directions", reward: { xp: 70, coins: 25, card: "Dribbelkaart" } },
  { id: "m3", league: 1, city: "Lille", type: "penalty", title: "Kleedkamerquiz", goal: "Voorwerpen en lidwoorden", pool: "objects", reward: { xp: 80, coins: 30, card: "Nieuwe schoenen" } },
  { id: "m4", league: 1, city: "Lille", type: "metro", title: "Metro Cup: lijn 5", goal: "Metro, lijn en haltes", pool: "metro", reward: { xp: 90, coins: 35, card: "Metro Cup kaart" } },
  { id: "m5", league: 2, city: "Paris", type: "penalty", title: "Scoutgesprek", goal: "Familie, personen en dieren", pool: "peopleAnimals", reward: { xp: 100, coins: 40, card: "Scoutkaart" } },
  { id: "m6", league: 2, city: "Paris", type: "dribble", title: "Vrije trap bij het kruispunt", goal: "Plaatsbepalingen en routes", pool: "directions", reward: { xp: 110, coins: 45, card: "Vrije trap specialist" } },
  { id: "m7", league: 3, city: "Lyon", type: "penalty", title: "Champions League interview", goal: "Korte zinnen begrijpen", pool: "phrases", reward: { xp: 120, coins: 55, card: "Interviewkaart" } },
  { id: "m8", league: 3, city: "Lyon", type: "penalty", title: "Uitrusting beschrijven", goal: "Kleuren en beschrijvingen", pool: "descriptions", reward: { xp: 130, coins: 60, card: "Gouden shirt" } },
  { id: "m9", league: 4, city: "Marseille", type: "metro", title: "Wereldbekerroute", goal: "Vervoer en routezinnen", pool: "metro", reward: { xp: 150, coins: 75, card: "Wereldkampioen" } },
  { id: "m10", league: 4, city: "Marseille", type: "penalty", title: "Finale penaltyreeks", goal: "Mix: woordenschat en communicatie", pool: "mixed", reward: { xp: 180, coins: 100, card: "Beker van Europa" } }
];

let state = loadState();
let currentMission = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let missionCorrect = 0;
let selectedAnswer = false;

const el = (id) => document.getElementById(id);

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  return {
    xp: 0,
    coins: 0,
    trophies: 0,
    cards: [],
    gear: "Basisschoenen",
    completed: [],
    mistakes: []
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderProfile();
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  el(`screen-${name}`).classList.add("active");
}

function renderProfile() {
  el("xp").textContent = state.xp;
  el("coins").textContent = state.coins;
  el("trophies").textContent = state.trophies;
  el("cards").textContent = state.cards.length;
  el("gear").textContent = state.gear;

  const activeLeague = [...leagues].reverse().find(l => state.xp >= l.xpNeeded) || leagues[0];
  el("clubName").textContent = activeLeague.club;

  el("leagueList").innerHTML = leagues.map((league, index) => {
    const unlocked = state.xp >= league.xpNeeded;
    return `<div class="league-item ${unlocked ? "" : "locked"}">
      <span>${index + 1}. ${league.name}</span>
      <strong>${unlocked ? "open" : league.xpNeeded + " XP"}</strong>
    </div>`;
  }).join("");

  if (!state.mistakes.length) {
    el("mistakeSummary").textContent = "Nog geen fouten. Start een missie.";
  } else {
    const last = state.mistakes.slice(-3).map(m => m.correct).join(", ");
    el("mistakeSummary").textContent = `${state.mistakes.length} fout(en). Laatste focus: ${last}`;
  }
}

function renderMissions() {
  el("missionGrid").innerHTML = missions.map(m => {
    const unlocked = state.xp >= leagues[m.league].xpNeeded;
    const completed = state.completed.includes(m.id);
    const typeLabel = m.type === "penalty" ? "Penalty Shooter" : m.type === "dribble" ? "Dribbel Challenge" : "Metro Cup";
    return `<article class="mission-card ${completed ? "completed" : ""} ${unlocked ? "" : "locked"}">
      <div class="badge-row">
        <span class="badge">${leagues[m.league].name}</span>
        <span class="badge">${m.city}</span>
      </div>
      <h3>${m.title}</h3>
      <p>${m.goal}</p>
      <p><strong>Speltype:</strong> ${typeLabel}</p>
      <div class="card-actions">
        <button class="primary-btn" ${unlocked ? "" : "disabled"} onclick="startMission('${m.id}')">
          ${completed ? "Speel opnieuw" : "Start missie"}
        </button>
      </div>
    </article>`;
  }).join("");
}

function startMission(id) {
  currentMission = missions.find(m => m.id === id);
  currentQuestions = createQuestions(currentMission);
  currentQuestionIndex = 0;
  missionCorrect = 0;
  selectedAnswer = false;

  el("missionLeague").textContent = `${leagues[currentMission.league].name} • ${currentMission.city}`;
  el("missionTitle").textContent = currentMission.title;
  el("missionGoal").textContent = currentMission.goal;
  el("questionTotal").textContent = currentQuestions.length;

  setVisualType(currentMission.type);
  showScreen("mission");
  renderQuestion();
}

function setVisualType(type) {
  const visual = el("gameVisual");
  visual.className = "game-visual";
  if (type === "dribble") visual.classList.add("dribble");
  if (type === "metro") visual.classList.add("metro");
  if (type === "penalty") visual.classList.add("penalty");
}

function createQuestions(mission) {
  if (mission.pool === "metro") return shuffle(makeMetroQuestions()).slice(0, 5);
  if (mission.pool === "phrases") return shuffle(makeTranslationQuestions(phrases, "Welke Nederlandse betekenis past?")).slice(0, 5);
  if (mission.pool === "mixed") {
    return shuffle([
      ...makeTranslationQuestions(vocabulary.places, "Wat betekent dit woord?"),
      ...makeTranslationQuestions(vocabulary.objects, "Wat betekent dit woord?"),
      ...makeTranslationQuestions(phrases, "Welke Nederlandse betekenis past?"),
      ...makeArticleQuestions()
    ]).slice(0, 7);
  }
  if (mission.type === "dribble") return shuffle(makeDirectionQuestions()).slice(0, 5);
  if (mission.pool === "objects") {
    return shuffle([...makeTranslationQuestions(vocabulary.objects, "Wat betekent dit woord?"), ...makeArticleQuestions()]).slice(0, 5);
  }
  return shuffle(makeTranslationQuestions(vocabulary[mission.pool], "Wat betekent dit woord?")).slice(0, 5);
}

function makeTranslationQuestions(items, intro) {
  return items.map(([fr, nl]) => {
    const wrong = shuffle(allDutchAnswers().filter(x => x !== nl)).slice(0, 3);
    return {
      prompt: `${intro} “${fr}”`,
      options: shuffle([nl, ...wrong]),
      answer: nl,
      explanation: `“${fr}” betekent “${nl}”. Herhaal luidop: ${fr}.`,
      focus: fr
    };
  });
}

function makeArticleQuestions() {
  const items = [...vocabulary.places, ...vocabulary.objects, ...vocabulary.peopleAnimals];
  return items.map(([fr]) => {
    const parts = fr.split(" ");
    const article = parts[0];
    if (!["le", "la", "un", "une", "des", "les"].includes(article)) return null;
    const noun = parts.slice(1).join(" ");
    return {
      prompt: `Kies het juiste lidwoord: ___ ${noun}`,
      options: shuffle(["le", "la", "un", "une", "des", "les"].filter((v, i, a) => a.indexOf(v) === i).slice(0, 5).concat(article).filter((v, i, a) => a.indexOf(v) === i)).slice(0, 4),
      answer: article,
      explanation: `Het juiste antwoord is “${fr}”. Let op het lidwoord: ${article}.`,
      focus: fr
    };
  }).filter(Boolean);
}

function makeDirectionQuestions() {
  const qs = [
    ["De trainer zegt: ga rechtdoor.", "Allez tout droit.", ["Tournez à gauche.", "Tournez à droite.", "Je prends le train."]],
    ["De scout wijst naar links.", "Tournez à gauche.", ["Tournez à droite.", "Allez tout droit.", "Je suis là."]],
    ["Je moet rechtsaf slaan.", "Tournez à droite.", ["Tournez à gauche.", "C'est facile.", "De rien."]],
    ["Neem de eerste straat links.", "Prenez la première rue à gauche.", ["Prenez la deuxième rue à droite.", "Allez tout droit.", "Je cherche la gare."]],
    ["Neem de tweede straat rechts.", "Prenez la deuxième rue à droite.", ["Prenez la première rue à gauche.", "Tournez à gauche.", "Merci."]],
    ["Aan de verkeerslichten.", "aux feux", ["au rond-point", "au carrefour", "à côté de"]],
    ["Aan de rotonde.", "au rond-point", ["aux feux", "derrière", "dans"]],
    ["Dicht bij de school.", "près de l'école", ["loin du cinéma", "dans la maison", "devant le parc"]]
  ];
  return qs.map(([nl, answer, wrong]) => ({
    prompt: `Dribbelroute: ${nl}`,
    options: shuffle([answer, ...wrong]),
    answer,
    explanation: `Routezin: “${answer}”. Zo blijft je speler vrij van de verdediger.`,
    focus: answer
  }));
}

function makeMetroQuestions() {
  const qs = [
    ["Ik neem lijn nummer 5.", "Je prends la ligne numéro 5.", ["Je prends le bus.", "Je suis là.", "C'est trop lourd."]],
    ["Er zijn drie haltes.", "Il y a trois arrêts.", ["Il y a deux ballons.", "Je cherche le cinéma.", "De rien."]],
    ["Wij nemen de metro.", "Nous prenons le métro.", ["Je prends le train.", "Tu es à la gare.", "Merci."]],
    ["Ik neem de trein.", "Je prends le train.", ["Nous prenons le métro.", "Je voudrais avoir un jeu.", "C'est facile."]],
    ["Ik neem de bus.", "Je prends le bus.", ["Je prends la ligne numéro 5.", "Allez tout droit.", "J'habite rue de la Gare."]],
    ["Ik ben aangekomen.", "Je suis arrivé.", ["Je suis à Bruxelles.", "Tu es à la gare.", "Je ne comprends pas."]],
    ["Ik wacht aan de halte.", "J'attends à l'arrêt.", ["Je change à Arts-Loi.", "C'est trop cher.", "Le ballon est rouge."]],
    ["Ik stap over in Arts-Loi.", "Je change à Arts-Loi.", ["Je prends la ligne numéro 5.", "Il y a deux arrêts.", "Tournez à droite."]]
  ];
  return qs.map(([nl, answer, wrong]) => ({
    prompt: `Metro Cup: ${nl}`,
    options: shuffle([answer, ...wrong]),
    answer,
    explanation: `Correcte metrozin: “${answer}”.`,
    focus: answer
  }));
}

function allDutchAnswers() {
  return Object.values(vocabulary).flat().map(item => item[1]).concat(phrases.map(p => p[1]));
}

function renderQuestion() {
  selectedAnswer = false;
  const q = currentQuestions[currentQuestionIndex];
  el("questionIndex").textContent = currentQuestionIndex + 1;
  el("questionPrompt").textContent = q.prompt;
  el("feedback").textContent = "";
  el("feedback").className = "feedback";
  el("nextBtn").classList.add("hidden");
  setVisualType(currentMission.type);

  el("answerOptions").innerHTML = q.options.map(option =>
    `<button class="answer-btn" onclick="answerQuestion('${escapeForClick(option)}')">${option}</button>`
  ).join("");
}

function answerQuestion(option) {
  if (selectedAnswer) return;
  selectedAnswer = true;

  const q = currentQuestions[currentQuestionIndex];
  const correct = option === q.answer;
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add("correct");
    if (btn.textContent === option && !correct) btn.classList.add("wrong");
  });

  const visual = el("gameVisual");
  visual.classList.add(correct ? "correct" : "wrong");

  if (correct) {
    missionCorrect++;
    el("goalText").textContent = currentMission.type === "penalty" ? "GOAL!" : "Verder!";
    el("feedback").textContent = `Juist. ${q.explanation}`;
    el("feedback").classList.add("good");
  } else {
    el("goalText").textContent = currentMission.type === "penalty" ? "Redding!" : "Botsing!";
    el("feedback").textContent = `Nog niet juist. Jij koos “${option}”. ${q.explanation}`;
    el("feedback").classList.add("bad");
    state.mistakes.push({
      prompt: q.prompt,
      selected: option,
      correct: q.answer,
      explanation: q.explanation,
      focus: q.focus,
      date: new Date().toISOString()
    });
    state.mistakes = state.mistakes.slice(-30);
    saveState();
  }

  el("nextBtn").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuestions.length) finishMission();
  else renderQuestion();
}

function finishMission() {
  const percentage = Math.round((missionCorrect / currentQuestions.length) * 100);
  const rewardMultiplier = percentage >= 80 ? 1 : percentage >= 60 ? 0.75 : 0.45;
  const xp = Math.round(currentMission.reward.xp * rewardMultiplier);
  const coins = Math.round(currentMission.reward.coins * rewardMultiplier);
  const trophyEarned = percentage >= 80;

  state.xp += xp;
  state.coins += coins;

  if (!state.cards.includes(currentMission.reward.card) && percentage >= 60) {
    state.cards.push(currentMission.reward.card);
  }

  if (trophyEarned && !state.completed.includes(currentMission.id)) {
    state.trophies++;
  }

  if (!state.completed.includes(currentMission.id) && percentage >= 60) {
    state.completed.push(currentMission.id);
  }

  if (state.xp >= 280) state.gear = "Snelle dribbelschoenen";
  if (state.xp >= 480) state.gear = "Champions League shirt";
  if (state.xp >= 720) state.gear = "Wereldkampioen tenue";

  saveState();

  el("resultTitle").textContent = trophyEarned ? "Missie gewonnen" : "Missie gespeeld";
  el("resultText").textContent = `Score: ${missionCorrect}/${currentQuestions.length}. ${percentage >= 60 ? "Je scout is tevreden." : "Oefen je fouten en probeer opnieuw."}`;
  el("rewardXp").textContent = `+${xp}`;
  el("rewardCoins").textContent = `+${coins}`;
  el("rewardTrophy").textContent = trophyEarned ? "Beker" : "-";
  el("rewardCard").textContent = percentage >= 60 ? currentMission.reward.card : "-";
  showScreen("result");
}

function retryMistakes() {
  if (!state.mistakes.length) return;
  currentMission = {
    id: "mistakes",
    league: 0,
    city: "Rematch",
    type: "penalty",
    title: "Foutenrematch met de trainer",
    goal: "Herhaal wat eerder fout ging",
    reward: { xp: 40, coins: 10, card: "Comebackkaart" }
  };
  currentQuestions = state.mistakes.slice(-7).map(m => ({
    prompt: m.prompt,
    options: shuffle([m.correct, ...allPossibleAnswers().filter(a => a !== m.correct).slice(0, 3)]),
    answer: m.correct,
    explanation: m.explanation,
    focus: m.focus
  }));
  currentQuestionIndex = 0;
  missionCorrect = 0;

  el("missionLeague").textContent = "Training • Foutenanalyse";
  el("missionTitle").textContent = currentMission.title;
  el("missionGoal").textContent = currentMission.goal;
  el("questionTotal").textContent = currentQuestions.length;
  setVisualType("penalty");
  showScreen("mission");
  renderQuestion();
}

function allPossibleAnswers() {
  return [
    ...allDutchAnswers(),
    ...phrases.map(p => p[0]),
    ...Object.values(vocabulary).flat().map(p => p[0]),
    "Tournez à gauche.",
    "Tournez à droite.",
    "Allez tout droit.",
    "Je prends la ligne numéro 5."
  ];
}

function resetGame() {
  if (!confirm("Wil je alle voortgang wissen?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  renderProfile();
  renderMissions();
  showScreen("home");
}

function escapeForClick(text) {
  return text.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

el("startBtn").addEventListener("click", () => {
  renderMissions();
  showScreen("map");
});

el("backToMapBtn").addEventListener("click", () => {
  renderMissions();
  showScreen("map");
});

el("continueBtn").addEventListener("click", () => {
  renderMissions();
  showScreen("map");
});

el("nextBtn").addEventListener("click", nextQuestion);
el("resetBtn").addEventListener("click", resetGame);
el("retryMistakesBtn").addEventListener("click", retryMistakes);

renderProfile();
renderMissions();
