// ==========================================================
// CONFIGURAÇÃO — URLs DIRETOS (sem pasta local)
// ==========================================================
const IMAGE_URLS = {
  capa: "https://i.postimg.cc/zXL4Tfbn/capa.png",
  img01: "https://i.postimg.cc/d16CMmV4/img01.jpg",
  img02: "https://i.postimg.cc/k4qShhq2/img02.png",
  img03: "https://i.postimg.cc/26GWpFSQ/img03.jpg",
  img04: "https://i.postimg.cc/cH03550r/img04.png",
  img05: "https://i.postimg.cc/0QPSHHPZ/img05.jpg",
  img06: "https://i.postimg.cc/B64Fww4B/img06.png",
  img07: "https://i.postimg.cc/MTqBrrqd/img07.jpg",
  img08: "https://i.postimg.cc/d1wCSSwH/img08.png",
  img09: "https://i.postimg.cc/NMDXh7jx/img09.jpg",
  img10: "https://i.postimg.cc/HxdMPPdJ/img10.png",
  img11: "https://i.postimg.cc/zB8hPP82/img11.jpg",
  img12: "https://i.postimg.cc/mDB966BN/img12.png",
  img13: "https://i.postimg.cc/DZnGYYnC/img13.jpg",
  img14: "https://i.postimg.cc/qR4KZZ4s/img14.png",
  img15: "https://i.postimg.cc/C1S866S6/img15.jpg",
  img16: "https://i.postimg.cc/W3TZffTr/img16.png",
  img17: "https://i.postimg.cc/ZRHNkF5j/img17.jpg",
  img18: "https://i.postimg.cc/76wzQQwb/img18.png",
  img19: "https://i.postimg.cc/Qtm7Lkdm/img19.jpg",
  img20: "https://i.postimg.cc/fLDdggD7/img20.png"
};

// Cada carta sabe quem é seu par
const PAIRS = [
  { id: "img01", pair: "img02", alt: "Gye Nyame", url: IMAGE_URLS.img01 },
  { id: "img02", pair: "img01", alt: "Gye Nyame", url: IMAGE_URLS.img02 },
  { id: "img03", pair: "img04", alt: "Sankofa", url: IMAGE_URLS.img03 },
  { id: "img04", pair: "img03", alt: "Sankofa", url: IMAGE_URLS.img04 },
  { id: "img05", pair: "img06", alt: "Dwennimmen", url: IMAGE_URLS.img05 },
  { id: "img06", pair: "img05", alt: "Dwennimmen", url: IMAGE_URLS.img06 },
  { id: "img07", pair: "img08", alt: "Adinkrahene", url: IMAGE_URLS.img07 },
  { id: "img08", pair: "img07", alt: "Adinkrahene", url: IMAGE_URLS.img08 },
  { id: "img09", pair: "img10", alt: "Nkyinkyim", url: IMAGE_URLS.img09 },
  { id: "img10", pair: "img09", alt: "Nkyinkyim", url: IMAGE_URLS.img10 },
  { id: "img11", pair: "img12", alt: "Funtunfunefu", url: IMAGE_URLS.img11 },
  { id: "img12", pair: "img11", alt: "Funtunfunefu", url: IMAGE_URLS.img12 },
  { id: "img13", pair: "img14", alt: "Akoben", url: IMAGE_URLS.img13 },
  { id: "img14", pair: "img13", alt: "Akoben", url: IMAGE_URLS.img14 },
  { id: "img15", pair: "img16", alt: "Kete Pa", url: IMAGE_URLS.img15 },
  { id: "img16", pair: "img15", alt: "Kete Pa", url: IMAGE_URLS.img16 },
  { id: "img17", pair: "img18", alt: "Nyame Nti", url: IMAGE_URLS.img17 },
  { id: "img18", pair: "img17", alt: "Nyame Nti", url: IMAGE_URLS.img18 },
  { id: "img19", pair: "img20", alt: "Akoma", url: IMAGE_URLS.img19 },
  { id: "img20", pair: "img19", alt: "Akoma", url: IMAGE_URLS.img20 }
];

const MEANINGS = [
  { symbolId: "img01", illustrationId: "img02", name: "Gye Nyame", translation: "Supremacia de Deus", description: "Representa o reconhecimento da onipotência e supremacia de Deus. Ensina humildade e fé no divino." },
  { symbolId: "img03", illustrationId: "img04", name: "Sankofa", translation: "Retornar e buscar", description: "Símbolo do aprendizado com o passado. Ensina que é permitido voltar atrás para buscar o que se esqueceu." },
  { symbolId: "img05", illustrationId: "img06", name: "Dwennimmen", translation: "Força e Humildade", description: "Representa a força combinada com a humildade, como o búfalo que é forte mas modesto." },
  { symbolId: "img07", illustrationId: "img08", name: "Adinkrahene", translation: "Liderança", description: "Símbolo da grandeza e da liderança carismática. Inspira autoridade exercida com sabedoria." },
  { symbolId: "img09", illustrationId: "img10", name: "Nkyinkyim", translation: "Iniciativa e Dinamismo", description: "Representa a versatilidade e a capacidade de se adaptar aos diferentes caminhos da vida." },
  { symbolId: "img11", illustrationId: "img12", name: "Funtunfunefu Denkyemfunefu", translation: "Democracia e Unidade", description: "Dois crocodilos que compartilham o mesmo estômago. Simboliza a união na diversidade e a cooperação." },
  { symbolId: "img13", illustrationId: "img14", name: "Akoben", translation: "Chamada à Ação", description: "Representa o grito de guerra que mobiliza para a ação. Inspira coragem e protagonismo." },
  { symbolId: "img15", illustrationId: "img16", name: "Kete Pa", translation: "Bom Leito", description: "Simboliza o amor e o cuidado no matrimônio. Representa a importância da base familiar estável." },
  { symbolId: "img17", illustrationId: "img18", name: "Nyame Nti", translation: "Pela Graça de Deus", description: "Representa a fé e a confiança na providência divina para todas as coisas." },
  { symbolId: "img19", illustrationId: "img20", name: "Akoma", translation: "Coração", description: "Simboliza a paciência, a tolerância e o amor. Ensina a levar a vida com leveza e compreensão." }
];

const TOTAL_PAIRS = 10;

/* ==========================================================
ELEMENTOS
========================================================== */
const $ = (id) => document.getElementById(id);
const initialScreen = $("initialScreen");
const gameScreen = $("gameScreen");
const meaningScreen = $("meaningScreen");
const resultModal = $("resultModal");

/* ==========================================================
ESTADO DO JOGO
========================================================== */
let firstCard = null;
let secondCard = null;
let boardLocked = false;
let moves = 0;
let matchedPairs = 0;
let elapsedSeconds = 0;
let timerStarted = false;
let timerInterval = null;
let meaningRendered = false;

/* ==========================================================
UTILIDADES
========================================================== */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function showOnlyScreen(screen) {
  [initialScreen, gameScreen, meaningScreen].forEach((s) => {
    s.hidden = true;
    s.setAttribute("aria-hidden", "true");
    s.classList.remove("is-visible");
  });
  screen.hidden = false;
  screen.setAttribute("aria-hidden", "false");
  // Força reflow para animação CSS
  void screen.offsetWidth;
  screen.classList.add("is-visible");
  document.body.classList.toggle("page-locked", screen === initialScreen);
}

/* ==========================================================
TELA INICIAL → JOGO
========================================================== */
function openGameScreen() {
  resetGameState();
  createBoard();
  showOnlyScreen(gameScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================
CRIAR TABULEIRO
========================================================== */
function createBoard() {
  const grid = $("memoryGrid");
  grid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const cards = shuffle(PAIRS);

  cards.forEach((card, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "memory-card";
    btn.dataset.id = card.id;
    btn.dataset.pair = card.pair;
    btn.setAttribute("aria-label", `Carta ${index + 1}, fechada`);

    const inner = document.createElement("span");
    inner.className = "memory-card-inner";

    // VERSO (capa)
    const back = document.createElement("span");
    back.className = "memory-card-face memory-card-back";
    back.setAttribute("aria-hidden", "true");
    const backImg = document.createElement("img");
    backImg.src = IMAGE_URLS.capa;
    backImg.alt = "";
    backImg.loading = "eager";
    back.appendChild(backImg);

    // FRENTE (imagem do par)
    const front = document.createElement("span");
    front.className = "memory-card-face memory-card-front";
    const frontImg = document.createElement("img");
    frontImg.src = card.url;
    frontImg.alt = card.alt;
    frontImg.loading = "eager";
    front.appendChild(frontImg);

    inner.append(back, front);
    btn.appendChild(inner);
    btn.addEventListener("click", () => flipCard(btn));
    fragment.appendChild(btn);
  });

  grid.appendChild(fragment);
}

/* ==========================================================
JOGADA
========================================================== */
function flipCard(card) {
  if (boardLocked || card.classList.contains("is-flipped") || card.classList.contains("is-matched")) return;

  startTimer();
  card.classList.add("is-flipped");
  card.setAttribute("aria-label", `Carta aberta: ${card.dataset.id}`);

  if (!firstCard) {
    firstCard = card;
    $("gameInstruction").textContent = "Agora selecione a segunda carta.";
    return;
  }

  secondCard = card;
  moves++;
  updateGameStatus();
  checkSelectedPair();
}

function checkSelectedPair() {
  const isMatch = firstCard.dataset.pair === secondCard.dataset.id;
  if (isMatch) {
    registerMatchedPair();
  } else {
    hideIncorrectCards();
  }
}

function registerMatchedPair() {
  boardLocked = true;
  [firstCard, secondCard].forEach((c) => {
    c.classList.add("is-matched");
    c.disabled = true;
    c.setAttribute("aria-label", "Carta encontrada");
  });
  matchedPairs++;
  updateGameStatus();
  $("gameInstruction").textContent = "Muito bem! Você encontrou um par.";

  setTimeout(() => {
    clearSelectedCards();
    boardLocked = false;
    if (matchedPairs === TOTAL_PAIRS) {
      finishGame();
    } else {
      $("gameInstruction").textContent = "Continue procurando os pares restantes.";
    }
  }, 650);
}

function hideIncorrectCards() {
  boardLocked = true;
  firstCard.classList.add("is-wrong");
  secondCard.classList.add("is-wrong");
  $("gameInstruction").textContent = "As imagens não formam um par. Observe novamente.";

  setTimeout(() => {
    firstCard.classList.remove("is-flipped", "is-wrong");
    secondCard.classList.remove("is-flipped", "is-wrong");
    firstCard.setAttribute("aria-label", "Carta fechada");
    secondCard.setAttribute("aria-label", "Carta fechada");
    clearSelectedCards();
    boardLocked = false;
    $("gameInstruction").textContent = "Selecione duas novas cartas.";
  }, 1000);
}

function clearSelectedCards() {
  firstCard = null;
  secondCard = null;
}

/* ==========================================================
CRONÔMETRO
========================================================== */
function startTimer() {
  if (timerStarted) return;
  timerStarted = true;
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    $("timer").textContent = formatTime(elapsedSeconds);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  timerStarted = false;
}

/* ==========================================================
ATUALIZAR STATUS
========================================================== */
function updateGameStatus() {
  $("movesCounter").textContent = String(moves);
  $("pairsCounter").textContent = String(matchedPairs);
  const pct = (matchedPairs / TOTAL_PAIRS) * 100;
  $("pairsProgressBar").style.width = `${pct}%`;
  $("pairsProgress").setAttribute("aria-valuenow", String(matchedPairs));
}

function resetGameState() {
  stopTimer();
  firstCard = null;
  secondCard = null;
  boardLocked = false;
  moves = 0;
  matchedPairs = 0;
  elapsedSeconds = 0;
  $("movesCounter").textContent = "0";
  $("timer").textContent = "00:00";
  $("pairsCounter").textContent = "0";
  $("pairsProgressBar").style.width = "0%";
  $("pairsProgress").setAttribute("aria-valuenow", "0");
  $("gameInstruction").textContent = "Selecione duas cartas para encontrar os pares correspondentes.";
  $("completionPanel").hidden = true;
}

/* ==========================================================
REINICIAR / FINALIZAR
========================================================== */
function restartGame() {
  closeResultModal();
  resetGameState();
  createBoard();
  showOnlyScreen(gameScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function finishGame() {
  stopTimer();
  $("finalMoves").textContent = String(moves);
  $("finalTime").textContent = formatTime(elapsedSeconds);
  $("gameInstruction").textContent = "Parabéns! Todos os pares foram encontrados.";
  $("completionPanel").hidden = false;
  setTimeout(openResultModal, 500);
}

/* ==========================================================
MODAL
========================================================== */
function openResultModal() {
  resultModal.hidden = false;
  resultModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("page-locked");
  setTimeout(() => $("modalMeaningButton").focus(), 60);
}

function closeResultModal() {
  resultModal.hidden = true;
  resultModal.setAttribute("aria-hidden", "true");
  document.body.classList.toggle("page-locked", !initialScreen.hidden);
}

/* ==========================================================
TELA DE SIGNIFICADOS
========================================================== */
function renderMeaningScreen() {
  if (meaningRendered) return;
  meaningRendered = true;
  const grid = $("meaningGrid");
  grid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  MEANINGS.forEach((m, i) => {
    const article = document.createElement("article");
    article.className = "meaning-card";

    const imagesContainer = document.createElement("div");
    imagesContainer.className = "meaning-images";

    const symbolFig = createMeaningFigure(IMAGE_URLS[m.symbolId], `Símbolo ${m.name}`, "SÍMBOLO", true);
    const illustrationFig = createMeaningFigure(IMAGE_URLS[m.illustrationId], `Representação de ${m.translation}`, "REPRESENTAÇÃO", false);

    imagesContainer.append(symbolFig, illustrationFig);

    const body = document.createElement("div");
    body.className = "meaning-body";

    const number = document.createElement("p");
    number.className = "meaning-number";
    number.textContent = `ADINKRA ${String(i + 1).padStart(2, "0")}`;

    const title = document.createElement("h3");
    title.textContent = m.name;

    const translation = document.createElement("p");
    translation.className = "meaning-translation";
    translation.textContent = `“${m.translation}”`;

    const description = document.createElement("p");
    description.className = "meaning-description";
    description.textContent = m.description;

    body.append(number, title, translation, description);
    article.append(imagesContainer, body);
    fragment.appendChild(article);
  });

  grid.appendChild(fragment);
}

function createMeaningFigure(src, alt, label, isSymbol) {
  const figure = document.createElement("figure");
  figure.className = isSymbol ? "meaning-image-box symbol" : "meaning-image-box";
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";
  const caption = document.createElement("figcaption");
  caption.className = "meaning-image-label";
  caption.textContent = label;
  figure.append(img, caption);
  return figure;
}

function openMeaningScreen() {
  closeResultModal();
  renderMeaningScreen();
  showOnlyScreen(meaningScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToCompletedGame() {
  showOnlyScreen(gameScreen);
  setTimeout(() => $("completionPanel").scrollIntoView({ behavior: "smooth", block: "center" }), 100);
}

function returnToInitialScreen() {
  stopTimer();
  closeResultModal();
  showOnlyScreen(initialScreen);
  window.scrollTo({ top: 0, behavior: "auto" });
  setTimeout(() => $("startButton").focus(), 300);
}

/* ==========================================================
EVENTOS
========================================================== */
$("startButton").addEventListener("click", openGameScreen);
$("restartButton").addEventListener("click", restartGame);
$("homeButton").addEventListener("click", returnToInitialScreen);
$("accessMeaningButton").addEventListener("click", openMeaningScreen);
$("modalMeaningButton").addEventListener("click", openMeaningScreen);
$("playAgainButton").addEventListener("click", restartGame);
$("modalHomeButton").addEventListener("click", returnToInitialScreen);
$("backToGameButton").addEventListener("click", backToCompletedGame);
$("meaningHomeButton").addEventListener("click", returnToInitialScreen);
$("meaningPlayAgainButton").addEventListener("click", restartGame);
$("modalOverlay").addEventListener("click", closeResultModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !resultModal.hidden) {
    closeResultModal();
  }
});

/* ==========================================================
INICIALIZAÇÃO
========================================================== */
showOnlyScreen(initialScreen);
