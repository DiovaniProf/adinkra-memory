/* ==========================================================
   CONFIGURAÇÃO DAS IMAGENS
   ========================================================== */
const IMAGE_URLS = {
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
  img20: "https://i.postimg.cc/fLDdggD7/img20.png",
  capa: "https://i.postimg.cc/zXL4Tfbn/capa.png",
};

/* ==========================================================
   CARTAS — Cada par: img01+img02, img03+img04, ... img19+img20
   ========================================================== */
const CARDS = [
  { id: "img01", pair: 1, type: "symbol", alt: "Símbolo Adinkra 1" },
  { id: "img02", pair: 1, type: "illustration", alt: "Representação Adinkra 1" },
  { id: "img03", pair: 2, type: "symbol", alt: "Símbolo Adinkra 2" },
  { id: "img04", pair: 2, type: "illustration", alt: "Representação Adinkra 2" },
  { id: "img05", pair: 3, type: "symbol", alt: "Símbolo Adinkra 3" },
  { id: "img06", pair: 3, type: "illustration", alt: "Representação Adinkra 3" },
  { id: "img07", pair: 4, type: "symbol", alt: "Símbolo Adinkra 4" },
  { id: "img08", pair: 4, type: "illustration", alt: "Representação Adinkra 4" },
  { id: "img09", pair: 5, type: "symbol", alt: "Símbolo Adinkra 5" },
  { id: "img10", pair: 5, type: "illustration", alt: "Representação Adinkra 5" },
  { id: "img11", pair: 6, type: "symbol", alt: "Símbolo Adinkra 6" },
  { id: "img12", pair: 6, type: "illustration", alt: "Representação Adinkra 6" },
  { id: "img13", pair: 7, type: "symbol", alt: "Símbolo Adinkra 7" },
  { id: "img14", pair: 7, type: "illustration", alt: "Representação Adinkra 7" },
  { id: "img15", pair: 8, type: "symbol", alt: "Símbolo Adinkra 8" },
  { id: "img16", pair: 8, type: "illustration", alt: "Representação Adinkra 8" },
  { id: "img17", pair: 9, type: "symbol", alt: "Símbolo Adinkra 9" },
  { id: "img18", pair: 9, type: "illustration", alt: "Representação Adinkra 9" },
  { id: "img19", pair: 10, type: "symbol", alt: "Símbolo Adinkra 10" },
  { id: "img20", pair: 10, type: "illustration", alt: "Representação Adinkra 10" },
];

const CARD_BACK_ID = "capa";
const TOTAL_PAIRS = 10;

/* ==========================================================
   SIGNIFICADOS
   ========================================================== */
const MEANINGS = [
  {
    symbolId: "img01",
    illustrationId: "img02",
    name: "Gye Nyame",
    translation: "Exceto Deus",
    description: "Expressa a onipotência e supremacia de Deus. Ensina que nada acontece sem a vontade divina, promovendo humildade e fé.",
  },
  {
    symbolId: "img03",
    illustrationId: "img04",
    name: "Sankofa",
    translation: "Volte e busque",
    description: "Representa a importância de resgatar o passado para construir o futuro. Ensina que é válido retornar para buscar o que foi deixado para trás.",
  },
  {
    symbolId: "img05",
    illustrationId: "img06",
    name: "Dwennimmen",
    translation: "Chifres do carneiro",
    description: "Simboliza a força e a humildade. Lembra que a verdadeira força está em ser humilde, mas também em saber se defender quando necessário.",
  },
  {
    symbolId: "img07",
    illustrationId: "img08",
    name: "Funtunfunefu",
    translation: "Denkyem e Osebo",
    description: "Representa a democracia e a unidade na diversidade. Ensina que a cooperação mútua é essencial para o bem comum.",
  },
  {
    symbolId: "img09",
    illustrationId: "img10",
    name: "Epa",
    translation: "Grilhões",
    description: "Simboliza a escravidão, a lei e a autoridade. Também representa a justiça e a necessidade de liberdade com responsabilidade.",
  },
  {
    symbolId: "img11",
    illustrationId: "img12",
    name: "Kintinkantan",
    translation: "Pride",
    description: "Representa a exaltação da dignidade e da autoestima. Ensina a valorizar as próprias raízes e a cultura com orgulho.",
  },
  {
    symbolId: "img13",
    illustrationId: "img14",
    name: "Nkyinkyin",
    translation: "Tortuosidades",
    description: "Simboliza a capacidade de se adaptar e superar obstáculos. Representa a resiliência diante das dificuldades da vida.",
  },
  {
    symbolId: "img15",
    illustrationId: "img16",
    name: "Nea Onnim",
    translation: "Aquele que não sabe",
    description: "Representa o aprendizado contínuo e a sabedoria. Ensina que reconhecer a própria ignorância é o primeiro passo para o conhecimento.",
  },
  {
    symbolId: "img17",
    illustrationId: "img18",
    name: "Se Wo Were Fi",
    translation: "Se você esquecer",
    description: "Simboliza a importância da memória e da gratidão. Lembra a necessidade de honrar as origens e as pessoas que nos ajudaram.",
  },
  {
    symbolId: "img19",
    illustrationId: "img20",
    name: "Tamfo Bebre",
    translation: "O inimigo sofrerá",
    description: "Representa a justiça e o equilíbrio kármico. Ensina que as más ações trazem consequências negativas, incentivando a bondade.",
  },
];

/* ==========================================================
   CACHE DE IMAGENS
   ========================================================== */
const imageCache = {};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(src);
    img.src = src;
  });
}

function cloneCachedImage(id, alt) {
  const cached = imageCache[id];
  if (!cached) return document.createElement("img");
  const clone = cached.cloneNode(true);
  clone.alt = alt || "";
  clone.removeAttribute("id");
  return clone;
}

/* ==========================================================
   UTILITÁRIOS
   ========================================================== */
function $(id) {
  return document.getElementById(id);
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ==========================================================
   ELEMENTOS DO DOM
   ========================================================== */
const initialScreen = $("initialScreen");
const gameScreen = $("gameScreen");
const meaningScreen = $("meaningScreen");
const resultModal = $("resultModal");
const memoryGrid = $("memoryGrid");
const loadingBar = $("loadingBar");
const loadingText = $("loadingText");
const loadingPercentage = $("loadingPercentage");
const loadingCounter = $("loadingCounter");
const loadingTrack = $("loadingTrack");
const startButton = $("startButton");
const localModeInfo = $("localModeInformation");

/* ==========================================================
   ESTADO DO JOGO
   ========================================================== */
let firstCard = null;
let secondCard = null;
let boardLocked = false;
let moves = 0;
let matchedPairs = 0;
let elapsedSeconds = 0;
let timerInterval = null;
let timerStarted = false;
let meaningRendered = false;
let preloadComplete = false;

/* ==========================================================
   PRÉ-CARREGAMENTO
   ========================================================== */
async function preloadAllResources() {
  const allIds = Object.keys(IMAGE_URLS);
  const total = allIds.length;
  let loaded = 0;

  loadingTrack.setAttribute("aria-valuemax", String(total));

  const updateProgress = () => {
    loaded++;
    const pct = Math.round((loaded / total) * 100);
    loadingBar.style.width = `${pct}%`;
    loadingPercentage.textContent = `${pct}%`;
    loadingCounter.textContent = `${loaded} de ${total} recursos preparados`;
    loadingTrack.setAttribute("aria-valuenow", String(loaded));
  };

  const promises = allIds.map((id) =>
    loadImage(IMAGE_URLS[id])
      .then((img) => {
        imageCache[id] = img;
        updateProgress();
      })
      .catch(() => {
        updateProgress();
      })
  );

  await Promise.all(promises);

  loadingText.textContent = "Imagens preparadas!";
  localModeInfo.style.display = "flex";
  startButton.hidden = false;
  startButton.disabled = false;
  preloadComplete = true;

  /* Atualiza prévia com 3 imagens aleatórias */
  const previewIds = ["img01", "img03", "img05"];
  $("previewImage1").src = IMAGE_URLS[previewIds[0]];
  $("previewImage2").src = IMAGE_URLS[previewIds[1]];
  $("previewImage3").src = IMAGE_URLS[previewIds[2]];
}

/* ==========================================================
   NAVEGAÇÃO ENTRE TELAS
   ========================================================== */
function showOnlyScreen(screen) {
  [initialScreen, gameScreen, meaningScreen].forEach((s) => {
    if (s === screen) {
      s.hidden = false;
      s.setAttribute("aria-hidden", "false");
      window.setTimeout(() => s.classList.add("is-visible"), 30);
    } else {
      s.hidden = true;
      s.setAttribute("aria-hidden", "true");
      s.classList.remove("is-visible");
    }
  });
  document.body.classList.toggle("page-locked", screen === initialScreen);
}

function openGameScreen() {
  createBoard();
  showOnlyScreen(gameScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.setTimeout(() => {
    memoryGrid.querySelector(".memory-card")?.focus();
  }, 100);
}

function returnToInitialScreen() {
  closeResultModal();
  resetGameState();
  showOnlyScreen(initialScreen);
}

/* ==========================================================
   CRIAR TABULEIRO
   ========================================================== */
function createBoard() {
  memoryGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const shuffledCards = shuffle(CARDS);

  shuffledCards.forEach((cardData, index) => {
    const cardButton = document.createElement("button");
    cardButton.type = "button";
    cardButton.className = `memory-card ${cardData.type}-card`;
    cardButton.dataset.id = cardData.id;
    cardButton.dataset.pair = String(cardData.pair);
    cardButton.setAttribute("aria-label", `Carta ${index + 1}, fechada`);

    const cardInner = document.createElement("span");
    cardInner.className = "memory-card-inner";

    /* VERSO DA CARTA — capa */
    const cardBack = document.createElement("span");
    cardBack.className = "memory-card-face memory-card-back";
    cardBack.setAttribute("aria-hidden", "true");
    cardBack.appendChild(cloneCachedImage(CARD_BACK_ID, ""));

    /* FRENTE DA CARTA */
    const cardFront = document.createElement("span");
    cardFront.className = "memory-card-face memory-card-front";
    cardFront.appendChild(cloneCachedImage(cardData.id, cardData.alt));

    cardInner.append(cardBack, cardFront);
    cardButton.appendChild(cardInner);
    cardButton.addEventListener("click", () => flipCard(cardButton));
    fragment.appendChild(cardButton);
  });

  memoryGrid.appendChild(fragment);
}

/* ==========================================================
   VIRAR CARTA
   ========================================================== */
function flipCard(card) {
  const alreadyFlipped = card.classList.contains("is-flipped");
  const alreadyMatched = card.classList.contains("is-matched");
  if (boardLocked || alreadyFlipped || alreadyMatched) return;

  startTimer();
  card.classList.add("is-flipped");
  card.setAttribute("aria-label", `Carta aberta: ${card.dataset.id}`);

  if (!firstCard) {
    firstCard = card;
    $("gameInstruction").textContent = "Agora selecione a segunda carta.";
    return;
  }

  secondCard = card;
  moves += 1;
  updateGameStatus();
  checkSelectedPair();
}

/* ==========================================================
   VERIFICAR PAR
   ========================================================== */
function checkSelectedPair() {
  const isMatchingPair = firstCard.dataset.pair === secondCard.dataset.pair;
  if (isMatchingPair) {
    registerMatchedPair();
  } else {
    hideIncorrectCards();
  }
}

function registerMatchedPair() {
  boardLocked = true;
  const matchedCards = [firstCard, secondCard];
  matchedCards.forEach((card) => {
    card.classList.add("is-matched");
    card.disabled = true;
    card.setAttribute("aria-label", "Carta encontrada");
  });

  matchedPairs += 1;
  updateGameStatus();
  $("gameInstruction").textContent = "Muito bem! Você encontrou um par.";

  window.setTimeout(() => {
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

  window.setTimeout(() => {
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
  timerInterval = window.setInterval(() => {
    elapsedSeconds += 1;
    $("timer").textContent = formatTime(elapsedSeconds);
  }, 1000);
}

function stopTimer() {
  if (timerInterval !== null) {
    window.clearInterval(timerInterval);
  }
  timerInterval = null;
  timerStarted = false;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/* ==========================================================
   ATUALIZAR INFORMAÇÕES
   ========================================================== */
function updateGameStatus() {
  $("movesCounter").textContent = String(moves);
  $("pairsCounter").textContent = String(matchedPairs);
  const percentage = (matchedPairs / TOTAL_PAIRS) * 100;
  $("pairsProgressBar").style.width = `${percentage}%`;
  $("pairsProgress").setAttribute("aria-valuenow", String(matchedPairs));
}

/* ==========================================================
   REDEFINIR PARTIDA
   ========================================================== */
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

function restartGame() {
  closeResultModal();
  resetGameState();
  createBoard();
  showOnlyScreen(gameScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.setTimeout(() => {
    memoryGrid.querySelector(".memory-card")?.focus();
  }, 100);
}

/* ==========================================================
   FINALIZAR PARTIDA
   ========================================================== */
function finishGame() {
  stopTimer();
  $("finalMoves").textContent = String(moves);
  $("finalTime").textContent = formatTime(elapsedSeconds);
  $("gameInstruction").textContent = "Parabéns! Todos os pares foram encontrados.";
  $("completionPanel").hidden = false;
  window.setTimeout(openResultModal, 500);
}

/* ==========================================================
   MODAL
   ========================================================== */
function openResultModal() {
  resultModal.hidden = false;
  resultModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("page-locked");
  window.setTimeout(() => {
    $("modalMeaningButton").focus();
  }, 60);
}

function closeResultModal() {
  resultModal.hidden = true;
  resultModal.setAttribute("aria-hidden", "true");
  document.body.classList.toggle("page-locked", !initialScreen.hidden);
}

/* ==========================================================
   CRIAR TELA DE SIGNIFICADOS
   ========================================================== */
function renderMeaningScreen() {
  if (meaningRendered) return;
  meaningRendered = true;
  const meaningGrid = $("meaningGrid");
  meaningGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  MEANINGS.forEach((meaning, index) => {
    const article = document.createElement("article");
    article.className = "meaning-card";

    const imagesContainer = document.createElement("div");
    imagesContainer.className = "meaning-images";

    const symbolFigure = createMeaningFigure(meaning.symbolId, `Símbolo ${meaning.name}`, "SÍMBOLO", true);
    const illustrationFigure = createMeaningFigure(meaning.illustrationId, `Representação de ${meaning.translation}`, "REPRESENTAÇÃO", false);

    imagesContainer.append(symbolFigure, illustrationFigure);

    const meaningBody = document.createElement("div");
    meaningBody.className = "meaning-body";

    const meaningNumber = document.createElement("p");
    meaningNumber.className = "meaning-number";
    meaningNumber.textContent = `ADINKRA ${String(index + 1).padStart(2, "0")}`;

    const meaningTitle = document.createElement("h3");
    meaningTitle.textContent = meaning.name;

    const meaningTranslation = document.createElement("p");
    meaningTranslation.className = "meaning-translation";
    meaningTranslation.textContent = `“${meaning.translation}”`;

    const meaningDescription = document.createElement("p");
    meaningDescription.className = "meaning-description";
    meaningDescription.textContent = meaning.description;

    meaningBody.append(meaningNumber, meaningTitle, meaningTranslation, meaningDescription);
    article.append(imagesContainer, meaningBody);
    fragment.appendChild(article);
  });

  meaningGrid.appendChild(fragment);
}

function createMeaningFigure(imageId, altText, labelText, isSymbol) {
  const figure = document.createElement("figure");
  figure.className = isSymbol ? "meaning-image-box symbol" : "meaning-image-box";
  const image = cloneCachedImage(imageId, altText);
  const caption = document.createElement("figcaption");
  caption.className = "meaning-image-label";
  caption.textContent = labelText;
  figure.append(image, caption);
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
  window.setTimeout(() => {
    $("completionPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resultModal.hidden) {
    closeResultModal();
  }
});

/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */
preloadAllResources();
