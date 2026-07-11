"use strict";


/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const TOTAL_PAIRS = 10;

const CARD_BACK_ID = "cardBack";

const CARD_BACK_PATH =
    "imagens/verso-adinkra.webp";


const BACKGROUND_ID = "backgroundLines";

const BACKGROUND_PATH =
    "imagens/fundo-tracos-adinkra.webp";


const MAX_SIMULTANEOUS_LOADS = 5;


/* ==========================================================
   BANCO DE CARTAS

   img01 combina com img02
   img03 combina com img04
   e assim sucessivamente.
========================================================== */

const CARDS = [
    {
        id: "img01",
        pair: 1,
        type: "symbol",
        src: "imagens/img01.webp",
        alt: "Símbolo correspondente ao pato"
    },
    {
        id: "img02",
        pair: 1,
        type: "illustration",
        src: "imagens/img02.webp",
        alt: "Pato com a cabeça voltada para trás"
    },

    {
        id: "img03",
        pair: 2,
        type: "symbol",
        src: "imagens/img03.webp",
        alt: "Símbolo correspondente ao pente"
    },
    {
        id: "img04",
        pair: 2,
        type: "illustration",
        src: "imagens/img04.webp",
        alt: "Pente de madeira"
    },

    {
        id: "img05",
        pair: 3,
        type: "symbol",
        src: "imagens/img05.webp",
        alt: "Símbolo correspondente à borboleta"
    },
    {
        id: "img06",
        pair: 3,
        type: "illustration",
        src: "imagens/img06.webp",
        alt: "Borboleta colorida"
    },

    {
        id: "img07",
        pair: 4,
        type: "symbol",
        src: "imagens/img07.webp",
        alt: "Símbolo correspondente ao guarda-chuva"
    },
    {
        id: "img08",
        pair: 4,
        type: "illustration",
        src: "imagens/img08.webp",
        alt: "Guarda-chuva colorido"
    },

    {
        id: "img09",
        pair: 5,
        type: "symbol",
        src: "imagens/img09.webp",
        alt: "Símbolo correspondente à corrente"
    },
    {
        id: "img10",
        pair: 5,
        type: "illustration",
        src: "imagens/img10.webp",
        alt: "Quatro elos de corrente"
    },

    {
        id: "img11",
        pair: 6,
        type: "symbol",
        src: "imagens/img11.webp",
        alt: "Símbolo correspondente à teia"
    },
    {
        id: "img12",
        pair: 6,
        type: "illustration",
        src: "imagens/img12.webp",
        alt: "Teia de aranha"
    },

    {
        id: "img13",
        pair: 7,
        type: "symbol",
        src: "imagens/img13.webp",
        alt: "Símbolo correspondente à palmeira"
    },
    {
        id: "img14",
        pair: 7,
        type: "illustration",
        src: "imagens/img14.webp",
        alt: "Palmeira em uma praia"
    },

    {
        id: "img15",
        pair: 8,
        type: "symbol",
        src: "imagens/img15.webp",
        alt: "Símbolo correspondente à cama"
    },
    {
        id: "img16",
        pair: 8,
        type: "illustration",
        src: "imagens/img16.webp",
        alt: "Cama em um quarto de rancho"
    },

    {
        id: "img17",
        pair: 9,
        type: "symbol",
        src: "imagens/img17.webp",
        alt: "Símbolo correspondente ao bode"
    },
    {
        id: "img18",
        pair: 9,
        type: "illustration",
        src: "imagens/img18.webp",
        alt: "Bode adulto com chifres longos"
    },

    {
        id: "img19",
        pair: 10,
        type: "symbol",
        src: "imagens/img19.webp",
        alt: "Símbolo correspondente ao crocodilo"
    },
    {
        id: "img20",
        pair: 10,
        type: "illustration",
        src: "imagens/img20.webp",
        alt: "Crocodilo em ambiente natural"
    }
];


/* ==========================================================
   RECURSOS QUE SERÃO PRÉ-CARREGADOS

   20 imagens das cartas
   1 imagem do verso
   1 imagem dos traços do fundo
========================================================== */

const RESOURCES = [
    ...CARDS.map((card) => ({
        id: card.id,
        src: card.src,
        alt: card.alt
    })),

    {
        id: CARD_BACK_ID,
        src: CARD_BACK_PATH,
        alt: "Arte do verso das cartas"
    },

    {
        id: BACKGROUND_ID,
        src: BACKGROUND_PATH,
        alt: "Traços decorativos do plano de fundo"
    }
];


/* ==========================================================
   ELEMENTOS DA INTERFACE
========================================================== */

const initialScreen =
    document.getElementById("initialScreen");

const gameScreen =
    document.getElementById("gameScreen");


const loadingText =
    document.getElementById("loadingText");

const loadingPercentage =
    document.getElementById("loadingPercentage");

const loadingCounter =
    document.getElementById("loadingCounter");

const loadingTrack =
    document.getElementById("loadingTrack");

const loadingBar =
    document.getElementById("loadingBar");


const startButton =
    document.getElementById("startButton");

const retryButton =
    document.getElementById("retryButton");


const restartButton =
    document.getElementById("restartButton");

const homeButton =
    document.getElementById("homeButton");


const movesCounter =
    document.getElementById("movesCounter");

const timer =
    document.getElementById("timer");

const pairsCounter =
    document.getElementById("pairsCounter");

const pairsProgress =
    document.getElementById("pairsProgress");

const pairsProgressBar =
    document.getElementById("pairsProgressBar");

const gameInstruction =
    document.getElementById("gameInstruction");

const memoryGrid =
    document.getElementById("memoryGrid");


const resultModal =
    document.getElementById("resultModal");

const finalMoves =
    document.getElementById("finalMoves");

const finalTime =
    document.getElementById("finalTime");

const playAgainButton =
    document.getElementById("playAgainButton");

const modalHomeButton =
    document.getElementById("modalHomeButton");


/* ==========================================================
   ESTADO DO JOGO
========================================================== */

const imageCache = new Map();


let resourcesReady = false;
let loadingInProgress = false;


let firstCard = null;
let secondCard = null;

let boardLocked = false;


let moves = 0;
let matchedPairs = 0;

let elapsedSeconds = 0;

let timerInterval = null;
let timerStarted = false;


/* ==========================================================
   CARREGAMENTO E DECODIFICAÇÃO DE UMA IMAGEM
========================================================== */

function loadAndDecodeImage(resource) {
    return new Promise((resolve, reject) => {
        const image = new Image();


        image.alt = resource.alt;

        image.decoding = "async";

        image.loading = "eager";


        image.onload = async () => {
            try {
                /*
                    Garante que a imagem esteja decodificada
                    antes de liberar o jogo.
                */

                if (
                    typeof image.decode === "function"
                ) {
                    await image.decode();
                }

            } catch (error) {
                /*
                    Mesmo que decode apresente erro,
                    o evento load confirma que a imagem
                    pode ser utilizada.
                */
            }


            imageCache.set(
                resource.id,
                image
            );


            resolve(resource);
        };


        image.onerror = () => {
            reject(
                new Error(
                    `Não foi possível carregar ${resource.src}`
                )
            );
        };


        image.src = resource.src;
    });
}


/* ==========================================================
   PRÉ-CARREGAMENTO DOS 22 RECURSOS
========================================================== */

async function preloadAllResources() {
    if (loadingInProgress) {
        return;
    }


    loadingInProgress = true;
    resourcesReady = false;


    imageCache.clear();


    startButton.hidden = true;
    startButton.disabled = true;

    retryButton.hidden = true;


    let nextResourceIndex = 0;
    let completedResources = 0;


    const errors = [];


    updateLoadingProgress(0);


    /*
        Cada trabalhador carrega uma imagem por vez.
        Existem no máximo cinco trabalhadores simultâneos.
    */

    async function worker() {
        while (true) {
            const currentIndex =
                nextResourceIndex;


            nextResourceIndex += 1;


            if (
                currentIndex >= RESOURCES.length
            ) {
                return;
            }


            const resource =
                RESOURCES[currentIndex];


            if (
                resource.id === CARD_BACK_ID
            ) {
                loadingText.textContent =
                    "Preparando o verso das cartas...";

            } else if (
                resource.id === BACKGROUND_ID
            ) {
                loadingText.textContent =
                    "Preparando os traços decorativos do fundo...";

            } else {
                loadingText.textContent =
                    `Preparando ${resource.id}...`;
            }


            try {
                await loadAndDecodeImage(
                    resource
                );

            } catch (error) {
                errors.push(error);

            } finally {
                completedResources += 1;


                updateLoadingProgress(
                    completedResources
                );
            }
        }
    }


    const workers = Array.from(
        {
            length: Math.min(
                MAX_SIMULTANEOUS_LOADS,
                RESOURCES.length
            )
        },

        () => worker()
    );


    await Promise.all(workers);


    loadingInProgress = false;


    if (
        errors.length > 0 ||
        imageCache.size !== RESOURCES.length
    ) {
        loadingText.textContent =
            "Algumas imagens não foram encontradas. Verifique a pasta imagens.";


        loadingCounter.textContent =
            `${imageCache.size} de ` +
            `${RESOURCES.length} recursos disponíveis`;


        retryButton.hidden = false;


        return;
    }


    finishLoading();
}


/* ==========================================================
   BARRA DE CARREGAMENTO
========================================================== */

function updateLoadingProgress(
    completedResources
) {
    const percentage = Math.round(
        (
            completedResources /
            RESOURCES.length
        ) * 100
    );


    loadingPercentage.textContent =
        `${percentage}%`;


    loadingCounter.textContent =
        `${completedResources} de ` +
        `${RESOURCES.length} recursos preparados`;


    loadingBar.style.width =
        `${percentage}%`;


    loadingTrack.setAttribute(
        "aria-valuenow",
        String(completedResources)
    );
}


/* ==========================================================
   CONCLUSÃO DO CARREGAMENTO
========================================================== */

function finishLoading() {
    resourcesReady = true;


    loadingText.textContent =
        "Todas as imagens estão carregadas e prontas para a partida.";


    loadingPercentage.textContent =
        "100%";


    loadingCounter.textContent =
        `${RESOURCES.length} de ` +
        `${RESOURCES.length} recursos preparados`;


    loadingBar.style.width =
        "100%";


    loadingTrack.setAttribute(
        "aria-valuenow",
        String(RESOURCES.length)
    );


    startButton.disabled = false;
    startButton.hidden = false;


    registerServiceWorker();


    window.setTimeout(() => {
        startButton.focus();
    }, 100);
}


/* ==========================================================
   ABRIR TELA DO JOGO
========================================================== */

function openGameScreen() {
    if (
        !resourcesReady ||
        imageCache.size !== RESOURCES.length
    ) {
        return;
    }


    closeResultModal();

    resetGameState();

    createBoard();


    gameScreen.hidden = false;


    gameScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    window.requestAnimationFrame(() => {
        gameScreen.classList.add(
            "is-visible"
        );
    });


    initialScreen.classList.add(
        "is-leaving"
    );


    document.body.classList.remove(
        "page-locked"
    );


    window.setTimeout(() => {
        initialScreen.hidden = true;


        window.scrollTo({
            top: 0,
            behavior: "auto"
        });


        memoryGrid
            .querySelector(".memory-card")
            ?.focus();

    }, 450);
}


/* ==========================================================
   RETORNAR À TELA INICIAL
========================================================== */

function returnToInitialScreen() {
    stopTimer();

    closeResultModal();


    gameScreen.classList.remove(
        "is-visible"
    );


    gameScreen.hidden = true;


    gameScreen.setAttribute(
        "aria-hidden",
        "true"
    );


    initialScreen.hidden = false;


    initialScreen.classList.remove(
        "is-leaving"
    );


    document.body.classList.add(
        "page-locked"
    );


    loadingText.textContent =
        "Todas as imagens continuam prontas na memória do navegador.";


    loadingPercentage.textContent =
        "100%";


    loadingCounter.textContent =
        `${RESOURCES.length} de ` +
        `${RESOURCES.length} recursos preparados`;


    window.setTimeout(() => {
        startButton.focus();
    }, 60);
}


/* ==========================================================
   EMBARALHAMENTO
========================================================== */

function shuffle(items) {
    const shuffledItems = [...items];


    for (
        let index = shuffledItems.length - 1;
        index > 0;
        index -= 1
    ) {
        const randomIndex =
            Math.floor(
                Math.random() * (index + 1)
            );


        [
            shuffledItems[index],
            shuffledItems[randomIndex]
        ] = [
            shuffledItems[randomIndex],
            shuffledItems[index]
        ];
    }


    return shuffledItems;
}


/* ==========================================================
   CLONAR IMAGEM ARMAZENADA NA MEMÓRIA
========================================================== */

function cloneCachedImage(
    resourceId,
    altText
) {
    const cachedImage =
        imageCache.get(resourceId);


    if (!cachedImage) {
        throw new Error(
            `A imagem ${resourceId} não está disponível no cache.`
        );
    }


    const imageCopy =
        cachedImage.cloneNode(true);


    imageCopy.alt =
        altText;


    imageCopy.draggable =
        false;


    imageCopy.loading =
        "eager";


    imageCopy.decoding =
        "sync";


    return imageCopy;
}


/* ==========================================================
   CRIAÇÃO DO TABULEIRO
========================================================== */

function createBoard() {
    memoryGrid.innerHTML = "";


    const boardFragment =
        document.createDocumentFragment();


    const shuffledCards =
        shuffle(CARDS);


    shuffledCards.forEach(
        (cardData, index) => {
            const cardButton =
                document.createElement("button");


            cardButton.type =
                "button";


            cardButton.className =
                `memory-card ${cardData.type}-card`;


            cardButton.dataset.id =
                cardData.id;


            cardButton.dataset.pair =
                String(cardData.pair);


            cardButton.setAttribute(
                "aria-label",
                `Carta ${index + 1}, fechada`
            );


            /*
                Estrutura interna da carta.
            */

            const cardInner =
                document.createElement("span");


            cardInner.className =
                "memory-card-inner";


            /*
                Verso da carta.
            */

            const cardBack =
                document.createElement("span");


            cardBack.className =
                "memory-card-face memory-card-back";


            cardBack.setAttribute(
                "aria-hidden",
                "true"
            );


            cardBack.appendChild(
                cloneCachedImage(
                    CARD_BACK_ID,
                    ""
                )
            );


            /*
                Frente da carta.
            */

            const cardFront =
                document.createElement("span");


            cardFront.className =
                "memory-card-face memory-card-front";


            cardFront.appendChild(
                cloneCachedImage(
                    cardData.id,
                    cardData.alt
                )
            );


            cardInner.append(
                cardBack,
                cardFront
            );


            cardButton.appendChild(
                cardInner
            );


            cardButton.addEventListener(
                "click",
                () => {
                    flipCard(cardButton);
                }
            );


            boardFragment.appendChild(
                cardButton
            );
        }
    );


    /*
        Insere todas as cartas em uma única operação.
    */

    memoryGrid.appendChild(
        boardFragment
    );
}


/* ==========================================================
   VIRAR CARTA
========================================================== */

function flipCard(selectedCard) {
    const isAlreadyFlipped =
        selectedCard.classList.contains(
            "is-flipped"
        );


    const isAlreadyMatched =
        selectedCard.classList.contains(
            "is-matched"
        );


    if (
        boardLocked ||
        isAlreadyFlipped ||
        isAlreadyMatched
    ) {
        return;
    }


    startTimer();


    selectedCard.classList.add(
        "is-flipped"
    );


    selectedCard.setAttribute(
        "aria-label",
        `Carta aberta: ${selectedCard.dataset.id}`
    );


    if (!firstCard) {
        firstCard = selectedCard;


        gameInstruction.textContent =
            "Agora selecione a segunda carta.";


        return;
    }


    secondCard = selectedCard;


    moves += 1;


    updateStatusPanel();


    checkSelectedPair();
}


/* ==========================================================
   VERIFICAR PAR
========================================================== */

function checkSelectedPair() {
    const cardsMatch =
        firstCard.dataset.pair ===
        secondCard.dataset.pair;


    if (cardsMatch) {
        registerMatchedPair();

        return;
    }


    hideIncorrectCards();
}


/* ==========================================================
   PAR ENCONTRADO
========================================================== */

function registerMatchedPair() {
    boardLocked = true;


    firstCard.classList.add(
        "is-matched"
    );


    secondCard.classList.add(
        "is-matched"
    );


    firstCard.disabled = true;
    secondCard.disabled = true;


    firstCard.setAttribute(
        "aria-label",
        "Carta encontrada"
    );


    secondCard.setAttribute(
        "aria-label",
        "Carta encontrada"
    );


    matchedPairs += 1;


    updateStatusPanel();


    gameInstruction.textContent =
        "Muito bem! Você encontrou um par.";


    window.setTimeout(() => {
        clearSelectedCards();


        boardLocked = false;


        if (
            matchedPairs === TOTAL_PAIRS
        ) {
            finishGame();

            return;
        }


        gameInstruction.textContent =
            "Continue procurando os pares restantes.";

    }, 620);
}


/* ==========================================================
   PAR INCORRETO
========================================================== */

function hideIncorrectCards() {
    boardLocked = true;


    firstCard.classList.add(
        "is-wrong"
    );


    secondCard.classList.add(
        "is-wrong"
    );


    gameInstruction.textContent =
        "As cartas não formam um par. Observe novamente.";


    window.setTimeout(() => {
        firstCard.classList.remove(
            "is-flipped",
            "is-wrong"
        );


        secondCard.classList.remove(
            "is-flipped",
            "is-wrong"
        );


        firstCard.setAttribute(
            "aria-label",
            "Carta fechada"
        );


        secondCard.setAttribute(
            "aria-label",
            "Carta fechada"
        );


        clearSelectedCards();


        boardLocked = false;


        gameInstruction.textContent =
            "Selecione duas novas cartas.";

    }, 980);
}


/* ==========================================================
   LIMPAR CARTAS SELECIONADAS
========================================================== */

function clearSelectedCards() {
    firstCard = null;
    secondCard = null;
}


/* ==========================================================
   CRONÔMETRO
========================================================== */

function startTimer() {
    if (timerStarted) {
        return;
    }


    timerStarted = true;


    timerInterval =
        window.setInterval(() => {
            elapsedSeconds += 1;


            timer.textContent =
                formatTime(elapsedSeconds);

        }, 1000);
}


function stopTimer() {
    if (
        timerInterval !== null
    ) {
        window.clearInterval(
            timerInterval
        );
    }


    timerInterval = null;
    timerStarted = false;
}


function formatTime(totalSeconds) {
    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    return (
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`
    );
}


/* ==========================================================
   ATUALIZAR PAINEL
========================================================== */

function updateStatusPanel() {
    movesCounter.textContent =
        String(moves);


    pairsCounter.textContent =
        String(matchedPairs);


    const progressPercentage =
        (
            matchedPairs /
            TOTAL_PAIRS
        ) * 100;


    pairsProgressBar.style.width =
        `${progressPercentage}%`;


    pairsProgress.setAttribute(
        "aria-valuenow",
        String(matchedPairs)
    );
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


    movesCounter.textContent =
        "0";


    timer.textContent =
        "00:00";


    pairsCounter.textContent =
        "0";


    pairsProgressBar.style.width =
        "0%";


    pairsProgress.setAttribute(
        "aria-valuenow",
        "0"
    );


    gameInstruction.textContent =
        "Selecione duas cartas para encontrar os pares correspondentes.";
}


/* ==========================================================
   REINICIAR JOGO
========================================================== */

function restartGame() {
    closeResultModal();


    resetGameState();


    createBoard();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    memoryGrid
        .querySelector(".memory-card")
        ?.focus();
}


/* ==========================================================
   FINALIZAR JOGO
========================================================== */

function finishGame() {
    stopTimer();


    finalMoves.textContent =
        String(moves);


    finalTime.textContent =
        formatTime(elapsedSeconds);


    gameInstruction.textContent =
        "Parabéns! Todos os pares foram encontrados.";


    window.setTimeout(() => {
        openResultModal();
    }, 560);
}


/* ==========================================================
   MODAL
========================================================== */

function openResultModal() {
    resultModal.hidden = false;


    resultModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "page-locked"
    );


    window.setTimeout(() => {
        playAgainButton.focus();
    }, 50);
}


function closeResultModal() {
    resultModal.hidden = true;


    resultModal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (!initialScreen.hidden) {
        document.body.classList.add(
            "page-locked"
        );

    } else {
        document.body.classList.remove(
            "page-locked"
        );
    }
}


/* ==========================================================
   CACHE OFFLINE
========================================================== */

function registerServiceWorker() {
    const isSupported =
        "serviceWorker" in navigator;


    const canRegister =
        window.location.protocol === "https:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";


    if (
        !isSupported ||
        !canRegister
    ) {
        return;
    }


    navigator.serviceWorker
        .register("sw.js")
        .catch(() => {
            /*
                O jogo continua funcionando normalmente
                mesmo sem o Service Worker.
            */
        });
}


/* ==========================================================
   EVENTOS
========================================================== */

startButton.addEventListener(
    "click",
    openGameScreen
);


retryButton.addEventListener(
    "click",
    preloadAllResources
);


restartButton.addEventListener(
    "click",
    restartGame
);


homeButton.addEventListener(
    "click",
    returnToInitialScreen
);


playAgainButton.addEventListener(
    "click",
    restartGame
);


modalHomeButton.addEventListener(
    "click",
    returnToInitialScreen
);


document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            !resultModal.hidden
        ) {
            closeResultModal();
        }
    }
);


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

preloadAllResources();