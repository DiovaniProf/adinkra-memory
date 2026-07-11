"use strict";


/* ==========================================================
   CONFIGURAÇÕES DOS ARQUIVOS
========================================================== */

/*
    A pasta deve estar no mesmo nível do index.html
    e deve ser chamada exatamente imagens.
*/

const IMAGE_FOLDER = "imagens";


/*
    A imagem utilizada no verso das cartas
    deve possuir o nome capa.
*/

const CARD_BACK_ID = "capa";


const TOTAL_PAIRS = 10;

const MAX_SIMULTANEOUS_LOADS = 5;


/*
    O sistema procura automaticamente os arquivos
    nestes formatos.
*/

const IMAGE_EXTENSIONS = [
    "png",
    "webp",
    "jpg",
    "jpeg",
    "PNG",
    "WEBP",
    "JPG",
    "JPEG"
];


/* ==========================================================
   SIGNIFICADOS E ORGANIZAÇÃO DOS PARES
========================================================== */

const MEANINGS = [
    {
        symbolId: "img01",
        illustrationId: "img02",

        name: "Sankofa",

        translation:
            "Volte e busque",

        description:
            "Símbolo da importância de aprender com o passado. " +
            "Toda experiência de vida pode nos tornar mais sábios. " +
            "Mesmo uma experiência difícil pode ensinar como não proceder."
    },

    {
        symbolId: "img03",
        illustrationId: "img04",

        name: "Duafe",

        translation:
            "Pente de madeira",

        description:
            "Símbolo de beleza, limpeza e cuidado. Também representa " +
            "qualidades como bondade, amor, atenção e valorização pessoal."
    },

    {
        symbolId: "img05",
        illustrationId: "img06",

        name: "Fafanto",

        translation:
            "Borboleta",

        description:
            "Símbolo de transformação e mudança. Representa beleza, " +
            "graça, crescimento e a importância de acolher as mudanças " +
            "com resiliência e elegância."
    },

    {
        symbolId: "img07",
        illustrationId: "img08",

        name: "Ohene Kyiniie",

        translation:
            "Guarda-chuva do rei",

        description:
            "Símbolo de liderança e proteção. Recorda que a verdadeira " +
            "liderança envolve responsabilidade, cuidado e segurança " +
            "para todas as pessoas da comunidade."
    },

    {
        symbolId: "img09",
        illustrationId: "img10",

        name: "Nkonsonkonson",

        translation:
            "Elo de corrente",

        description:
            "Símbolo de unidade e relações humanas. Lembra que cada pessoa " +
            "pode contribuir para a comunidade e que, quando existe união, " +
            "há mais força para enfrentar os desafios."
    },

    {
        symbolId: "img11",
        illustrationId: "img12",

        name: "Ananse Ntontan",

        translation:
            "Teia de aranha",

        description:
            "Símbolo de sabedoria, criatividade, inteligência e engenhosidade. " +
            "Enfatiza o pensamento estratégico, a inovação e a capacidade " +
            "de adaptar-se e superar desafios."
    },

    {
        symbolId: "img13",
        illustrationId: "img14",

        name: "Abe Dua",

        translation:
            "Palmeira",

        description:
            "Símbolo de riqueza, resistência e engenhosidade. Assim como " +
            "diferentes partes da palmeira podem ser aproveitadas, ensina " +
            "sobre recursos, sustentabilidade e prosperidade."
    },

    {
        symbolId: "img15",
        illustrationId: "img16",

        name: "Kete Pa",

        translation:
            "Boa cama",

        description:
            "Símbolo de um bom casamento, harmonia, acolhimento, " +
            "tranquilidade e bom descanso."
    },

    {
        symbolId: "img17",
        illustrationId: "img18",

        name: "Dwennimmen",

        translation:
            "Chifres de carneiro",

        description:
            "Símbolo de força unida à humildade. Ensina que até mesmo " +
            "as pessoas fortes precisam agir com respeito, equilíbrio " +
            "e humildade."
    },

    {
        symbolId: "img19",
        illustrationId: "img20",

        name: "Denkyem",

        translation:
            "Crocodilo",

        description:
            "Símbolo de adaptabilidade. O crocodilo vive na água, " +
            "mas respira o ar, demonstrando a capacidade de ajustar-se " +
            "às diferentes circunstâncias."
    }
];


/* ==========================================================
   PRODUÇÃO DAS 20 CARTAS
========================================================== */

/*
    Relação automática:

    img01 + img02 = par 1
    img03 + img04 = par 2
    img05 + img06 = par 3
    ...
    img19 + img20 = par 10
*/

const CARDS = MEANINGS.flatMap(
    (meaning, meaningIndex) => {
        const pairNumber =
            meaningIndex + 1;


        return [
            {
                id:
                    meaning.symbolId,

                pair:
                    pairNumber,

                type:
                    "symbol",

                alt:
                    `Símbolo ${meaning.name}`
            },

            {
                id:
                    meaning.illustrationId,

                pair:
                    pairNumber,

                type:
                    "illustration",

                alt:
                    `Representação de ${meaning.translation}`
            }
        ];
    }
);


/* ==========================================================
   ENDEREÇOS DAS IMAGENS
========================================================== */

function createImageCandidates(fileName) {
    return IMAGE_EXTENSIONS.map(
        (extension) =>
            `${IMAGE_FOLDER}/${fileName}.${extension}`
    );
}


/* ==========================================================
   RECURSOS QUE SERÃO CARREGADOS
========================================================== */

const RESOURCES = [
    ...CARDS.map(
        (card) => ({
            id:
                card.id,

            alt:
                card.alt,

            candidates:
                createImageCandidates(
                    card.id
                )
        })
    ),

    {
        id:
            CARD_BACK_ID,

        alt:
            "Imagem da capa das cartas",

        candidates:
            createImageCandidates(
                CARD_BACK_ID
            )
    }
];


/* ==========================================================
   SELETORES
========================================================== */

const $ = (id) =>
    document.getElementById(id);


const initialScreen =
    $("initialScreen");

const gameScreen =
    $("gameScreen");

const meaningScreen =
    $("meaningScreen");

const resultModal =
    $("resultModal");


const allScreens = [
    initialScreen,
    gameScreen,
    meaningScreen
];


const previewImages = [
    $("previewImage1"),
    $("previewImage2"),
    $("previewImage3")
];


const previewCards = [
    ...document.querySelectorAll(
        ".preview-card"
    )
];


/* ==========================================================
   CACHE DAS IMAGENS
========================================================== */

const imageCache =
    new Map();


/* ==========================================================
   ESTADO DO CARREGAMENTO
========================================================== */

let resourcesReady =
    false;


let loadingInProgress =
    false;


let missingFilesCount =
    0;


/* ==========================================================
   ESTADO DA PARTIDA
========================================================== */

let firstCard =
    null;


let secondCard =
    null;


let boardLocked =
    false;


let moves =
    0;


let matchedPairs =
    0;


let elapsedSeconds =
    0;


let timerInterval =
    null;


let timerStarted =
    false;


let meaningRendered =
    false;


/* ==========================================================
   IMAGEM PROVISÓRIA DE SEGURANÇA
========================================================== */

function createFallbackImage(
    resourceId,
    isCardBack = false
) {
    const displayText =
        isCardBack
            ? "◈"
            : resourceId
                .replace("img", "")
                .toUpperCase();


    const bottomText =
        isCardBack
            ? "ADINKRA"
            : resourceId.toUpperCase();


    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="960"
            height="540"
            viewBox="0 0 960 540"
        >
            <defs>
                <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#241006"
                    />

                    <stop
                        offset="52%"
                        stop-color="#713111"
                    />

                    <stop
                        offset="100%"
                        stop-color="#d78329"
                    />
                </linearGradient>
            </defs>

            <rect
                width="960"
                height="540"
                rx="38"
                fill="url(#gradient)"
            />

            <rect
                x="22"
                y="22"
                width="916"
                height="496"
                rx="28"
                fill="none"
                stroke="#f5c65f"
                stroke-width="7"
            />

            <circle
                cx="480"
                cy="255"
                r="150"
                fill="#160a05"
                fill-opacity="0.55"
                stroke="#ffe8a6"
                stroke-width="8"
            />

            <text
                x="480"
                y="310"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="${isCardBack ? 130 : 150}"
                font-weight="900"
                fill="#fff4cc"
            >
                ${displayText}
            </text>

            <rect
                x="325"
                y="430"
                width="310"
                height="58"
                rx="29"
                fill="#140906"
                fill-opacity="0.58"
            />

            <text
                x="480"
                y="468"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="25"
                font-weight="800"
                letter-spacing="5"
                fill="#fff4cc"
            >
                ${bottomText}
            </text>
        </svg>
    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


/* ==========================================================
   CARREGAR UMA IMAGEM DA PASTA
========================================================== */

function loadImageFromCandidates(resource) {
    return new Promise(
        (resolve) => {
            let candidateIndex =
                0;


            function finishWithFallback() {
                missingFilesCount += 1;


                const fallback =
                    new Image();


                fallback.alt =
                    resource.alt;


                fallback.onload =
                    () => {
                        imageCache.set(
                            resource.id,
                            fallback
                        );


                        resolve({
                            resource,
                            usedFallback: true
                        });
                    };


                fallback.src =
                    createFallbackImage(
                        resource.id,

                        resource.id ===
                            CARD_BACK_ID
                    );
            }


            function tryNextCandidate() {
                if (
                    candidateIndex >=
                    resource.candidates.length
                ) {
                    finishWithFallback();

                    return;
                }


                const candidate =
                    resource.candidates[
                        candidateIndex
                    ];


                candidateIndex += 1;


                const image =
                    new Image();


                image.alt =
                    resource.alt;


                image.loading =
                    "eager";


                image.decoding =
                    "async";


                image.onload =
                    async () => {
                        try {
                            if (
                                typeof image.decode ===
                                "function"
                            ) {
                                await image.decode();
                            }

                        } catch (error) {
                            /*
                                A imagem já está disponível
                                após o evento load.
                            */
                        }


                        imageCache.set(
                            resource.id,
                            image
                        );


                        resolve({
                            resource,
                            usedFallback: false
                        });
                    };


                image.onerror =
                    tryNextCandidate;


                image.src =
                    candidate;
            }


            tryNextCandidate();
        }
    );
}


/* ==========================================================
   PRÉ-CARREGAR TODAS AS IMAGENS
========================================================== */

async function preloadAllResources() {
    if (loadingInProgress) {
        return;
    }


    loadingInProgress =
        true;


    resourcesReady =
        false;


    missingFilesCount =
        0;


    imageCache.clear();


    $("startButton").hidden =
        true;


    $("startButton").disabled =
        true;


    let nextResourceIndex =
        0;


    let completedResources =
        0;


    updateLoadingProgress(
        completedResources
    );


    async function worker() {
        while (true) {
            const currentIndex =
                nextResourceIndex;


            nextResourceIndex += 1;


            if (
                currentIndex >=
                RESOURCES.length
            ) {
                return;
            }


            const resource =
                RESOURCES[currentIndex];


            $("loadingText").textContent =
                resource.id === CARD_BACK_ID
                    ? "Preparando a imagem capa..."
                    : `Preparando ${resource.id}...`;


            await loadImageFromCandidates(
                resource
            );


            completedResources += 1;


            updateLoadingProgress(
                completedResources
            );
        }
    }


    const workerCount =
        Math.min(
            MAX_SIMULTANEOUS_LOADS,
            RESOURCES.length
        );


    const workers =
        Array.from(
            {
                length: workerCount
            },

            () => worker()
        );


    await Promise.all(
        workers
    );


    loadingInProgress =
        false;


    resourcesReady =
        true;


    finishLoading();
}


/* ==========================================================
   ATUALIZAR CARREGAMENTO
========================================================== */

function updateLoadingProgress(
    completedResources
) {
    const percentage =
        Math.round(
            (
                completedResources /
                RESOURCES.length
            ) * 100
        );


    $("loadingPercentage").textContent =
        `${percentage}%`;


    $("loadingCounter").textContent =
        `${completedResources} de ` +
        `${RESOURCES.length} recursos preparados`;


    $("loadingBar").style.width =
        `${percentage}%`;


    $("loadingTrack").setAttribute(
        "aria-valuenow",
        String(completedResources)
    );
}


/* ==========================================================
   FINALIZAR CARREGAMENTO
========================================================== */

function finishLoading() {
    $("loadingPercentage").textContent =
        "100%";


    $("loadingBar").style.width =
        "100%";


    $("loadingCounter").textContent =
        `${RESOURCES.length} de ` +
        `${RESOURCES.length} recursos preparados`;


    if (missingFilesCount === 0) {
        $("loadingText").textContent =
            "Todas as imagens estão carregadas e prontas.";


        $("localModeInformation").innerHTML = `
            <span aria-hidden="true">✓</span>

            <p>
                As imagens <strong>img01 a img20</strong>
                e a imagem <strong>capa</strong>
                foram encontradas na pasta
                <strong>imagens</strong>.
            </p>
        `;

    } else {
        $("loadingText").textContent =
            "O jogo está pronto com representações provisórias.";


        $("localModeInformation").innerHTML = `
            <span aria-hidden="true">!</span>

            <p>
                ${missingFilesCount}
                arquivo(s) não foram encontrados.
                Confira os nomes dos arquivos na pasta
                <strong>imagens</strong>.
            </p>
        `;
    }


    refreshInitialPreview(
        false
    );


    $("startButton").hidden =
        false;


    $("startButton").disabled =
        false;


    registerServiceWorker();


    window.setTimeout(
        () => {
            $("startButton").focus();
        },

        100
    );
}


/* ==========================================================
   EMBARALHAR
========================================================== */

function shuffle(items) {
    const shuffled =
        [...items];


    for (
        let index =
            shuffled.length - 1;

        index > 0;

        index -= 1
    ) {
        const randomIndex =
            Math.floor(
                Math.random() *
                (index + 1)
            );


        [
            shuffled[index],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[index]
        ];
    }


    return shuffled;
}


/* ==========================================================
   CLONAR IMAGEM CARREGADA
========================================================== */

function cloneCachedImage(
    resourceId,
    altText
) {
    const originalImage =
        imageCache.get(
            resourceId
        );


    if (!originalImage) {
        throw new Error(
            `Imagem ${resourceId} não está disponível.`
        );
    }


    const imageCopy =
        originalImage.cloneNode(true);


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
   ALTERAR AS TRÊS IMAGENS DA ABERTURA
========================================================== */

function refreshInitialPreview(
    useAnimation = true
) {
    if (!resourcesReady) {
        return;
    }


    const illustrationCards =
        CARDS.filter(
            (card) =>
                card.type ===
                "illustration"
        );


    const selectedCards =
        shuffle(
            illustrationCards
        ).slice(0, 3);


    if (useAnimation) {
        previewCards.forEach(
            (previewCard) => {
                previewCard.classList.add(
                    "preview-changing"
                );
            }
        );
    }


    const delay =
        useAnimation
            ? 250
            : 0;


    window.setTimeout(
        () => {
            selectedCards.forEach(
                (
                    selectedCard,
                    index
                ) => {
                    const image =
                        imageCache.get(
                            selectedCard.id
                        );


                    if (!image) {
                        return;
                    }


                    previewImages[index].src =
                        image.currentSrc ||
                        image.src;


                    previewImages[index].alt =
                        selectedCard.alt;
                }
            );


            previewCards.forEach(
                (previewCard) => {
                    previewCard.classList.remove(
                        "preview-changing"
                    );
                }
            );
        },

        delay
    );
}


/* ==========================================================
   EXIBIR UMA TELA
========================================================== */

function showOnlyScreen(targetScreen) {
    allScreens.forEach(
        (screen) => {
            const isTarget =
                screen === targetScreen;


            screen.hidden =
                !isTarget;


            screen.setAttribute(
                "aria-hidden",
                isTarget
                    ? "false"
                    : "true"
            );


            screen.classList.remove(
                "is-visible"
            );
        }
    );


    if (
        targetScreen !== initialScreen
    ) {
        window.requestAnimationFrame(
            () => {
                targetScreen.classList.add(
                    "is-visible"
                );
            }
        );
    }


    document.body.classList.toggle(
        "page-locked",
        targetScreen === initialScreen
    );
}


/* ==========================================================
   ABRIR O JOGO
========================================================== */

function openGameScreen() {
    if (!resourcesReady) {
        return;
    }


    closeResultModal();


    resetGameState();


    createBoard();


    showOnlyScreen(
        gameScreen
    );


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });


    window.setTimeout(
        () => {
            $("memoryGrid")
                .querySelector(
                    ".memory-card"
                )
                ?.focus();
        },

        100
    );
}


/* ==========================================================
   VOLTAR À TELA INICIAL
========================================================== */

function returnToInitialScreen() {
    stopTimer();


    closeResultModal();


    refreshInitialPreview(
        true
    );


    showOnlyScreen(
        initialScreen
    );


    $("loadingText").textContent =
        "As imagens continuam prontas na memória do navegador.";


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });


    window.setTimeout(
        () => {
            $("startButton").focus();
        },

        300
    );
}


/* ==========================================================
   CRIAR TABULEIRO
========================================================== */

function createBoard() {
    const memoryGrid =
        $("memoryGrid");


    memoryGrid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    const shuffledCards =
        shuffle(
            CARDS
        );


    shuffledCards.forEach(
        (
            cardData,
            index
        ) => {
            const cardButton =
                document.createElement(
                    "button"
                );


            cardButton.type =
                "button";


            cardButton.className =
                `memory-card ${cardData.type}-card`;


            cardButton.dataset.id =
                cardData.id;


            cardButton.dataset.pair =
                String(
                    cardData.pair
                );


            cardButton.setAttribute(
                "aria-label",
                `Carta ${index + 1}, fechada`
            );


            const cardInner =
                document.createElement(
                    "span"
                );


            cardInner.className =
                "memory-card-inner";


            /*
                VERSO DA CARTA — imagem capa.
            */

            const cardBack =
                document.createElement(
                    "span"
                );


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
                FRENTE DA CARTA — img01 até img20.
            */

            const cardFront =
                document.createElement(
                    "span"
                );


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
                    flipCard(
                        cardButton
                    );
                }
            );


            fragment.appendChild(
                cardButton
            );
        }
    );


    memoryGrid.appendChild(
        fragment
    );
}


/* ==========================================================
   VIRAR CARTA
========================================================== */

function flipCard(card) {
    const alreadyFlipped =
        card.classList.contains(
            "is-flipped"
        );


    const alreadyMatched =
        card.classList.contains(
            "is-matched"
        );


    if (
        boardLocked ||
        alreadyFlipped ||
        alreadyMatched
    ) {
        return;
    }


    startTimer();


    card.classList.add(
        "is-flipped"
    );


    card.setAttribute(
        "aria-label",
        `Carta aberta: ${card.dataset.id}`
    );


    if (!firstCard) {
        firstCard =
            card;


        $("gameInstruction").textContent =
            "Agora selecione a segunda carta.";


        return;
    }


    secondCard =
        card;


    moves += 1;


    updateGameStatus();


    checkSelectedPair();
}


/* ==========================================================
   VERIFICAR PAR
========================================================== */

function checkSelectedPair() {
    const isMatchingPair =
        firstCard.dataset.pair ===
        secondCard.dataset.pair;


    if (isMatchingPair) {
        registerMatchedPair();

    } else {
        hideIncorrectCards();
    }
}


/* ==========================================================
   PAR ENCONTRADO
========================================================== */

function registerMatchedPair() {
    boardLocked =
        true;


    const matchedCards = [
        firstCard,
        secondCard
    ];


    matchedCards.forEach(
        (card) => {
            card.classList.add(
                "is-matched"
            );


            card.disabled =
                true;


            card.setAttribute(
                "aria-label",
                "Carta encontrada"
            );
        }
    );


    matchedPairs += 1;


    updateGameStatus();


    $("gameInstruction").textContent =
        "Muito bem! Você encontrou um par.";


    window.setTimeout(
        () => {
            clearSelectedCards();


            boardLocked =
                false;


            if (
                matchedPairs ===
                TOTAL_PAIRS
            ) {
                finishGame();

            } else {
                $("gameInstruction").textContent =
                    "Continue procurando os pares restantes.";
            }
        },

        650
    );
}


/* ==========================================================
   PAR INCORRETO
========================================================== */

function hideIncorrectCards() {
    boardLocked =
        true;


    firstCard.classList.add(
        "is-wrong"
    );


    secondCard.classList.add(
        "is-wrong"
    );


    $("gameInstruction").textContent =
        "As imagens não formam um par. Observe novamente.";


    window.setTimeout(
        () => {
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


            boardLocked =
                false;


            $("gameInstruction").textContent =
                "Selecione duas novas cartas.";
        },

        1000
    );
}


/* ==========================================================
   LIMPAR CARTAS SELECIONADAS
========================================================== */

function clearSelectedCards() {
    firstCard =
        null;


    secondCard =
        null;
}


/* ==========================================================
   CRONÔMETRO
========================================================== */

function startTimer() {
    if (timerStarted) {
        return;
    }


    timerStarted =
        true;


    timerInterval =
        window.setInterval(
            () => {
                elapsedSeconds += 1;


                $("timer").textContent =
                    formatTime(
                        elapsedSeconds
                    );
            },

            1000
        );
}


function stopTimer() {
    if (
        timerInterval !== null
    ) {
        window.clearInterval(
            timerInterval
        );
    }


    timerInterval =
        null;


    timerStarted =
        false;
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
   ATUALIZAR INFORMAÇÕES
========================================================== */

function updateGameStatus() {
    $("movesCounter").textContent =
        String(moves);


    $("pairsCounter").textContent =
        String(matchedPairs);


    const percentage =
        (
            matchedPairs /
            TOTAL_PAIRS
        ) * 100;


    $("pairsProgressBar").style.width =
        `${percentage}%`;


    $("pairsProgress").setAttribute(
        "aria-valuenow",
        String(matchedPairs)
    );
}


/* ==========================================================
   REDEFINIR PARTIDA
========================================================== */

function resetGameState() {
    stopTimer();


    firstCard =
        null;


    secondCard =
        null;


    boardLocked =
        false;


    moves =
        0;


    matchedPairs =
        0;


    elapsedSeconds =
        0;


    $("movesCounter").textContent =
        "0";


    $("timer").textContent =
        "00:00";


    $("pairsCounter").textContent =
        "0";


    $("pairsProgressBar").style.width =
        "0%";


    $("pairsProgress").setAttribute(
        "aria-valuenow",
        "0"
    );


    $("gameInstruction").textContent =
        "Selecione duas cartas para encontrar os pares correspondentes.";


    $("completionPanel").hidden =
        true;
}


/* ==========================================================
   REINICIAR JOGO
========================================================== */

function restartGame() {
    closeResultModal();


    resetGameState();


    createBoard();


    showOnlyScreen(
        gameScreen
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    window.setTimeout(
        () => {
            $("memoryGrid")
                .querySelector(
                    ".memory-card"
                )
                ?.focus();
        },

        100
    );
}


/* ==========================================================
   FINALIZAR PARTIDA
========================================================== */

function finishGame() {
    stopTimer();


    $("finalMoves").textContent =
        String(moves);


    $("finalTime").textContent =
        formatTime(
            elapsedSeconds
        );


    $("gameInstruction").textContent =
        "Parabéns! Todos os pares foram encontrados.";


    $("completionPanel").hidden =
        false;


    window.setTimeout(
        openResultModal,

        500
    );
}


/* ==========================================================
   MODAL
========================================================== */

function openResultModal() {
    resultModal.hidden =
        false;


    resultModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "page-locked"
    );


    window.setTimeout(
        () => {
            $("modalMeaningButton").focus();
        },

        60
    );
}


function closeResultModal() {
    resultModal.hidden =
        true;


    resultModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.toggle(
        "page-locked",
        !initialScreen.hidden
    );
}


/* ==========================================================
   CRIAR TELA DE SIGNIFICADOS
========================================================== */

function renderMeaningScreen() {
    if (meaningRendered) {
        return;
    }


    meaningRendered =
        true;


    const meaningGrid =
        $("meaningGrid");


    meaningGrid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    MEANINGS.forEach(
        (
            meaning,
            index
        ) => {
            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "meaning-card";


            const imagesContainer =
                document.createElement(
                    "div"
                );


            imagesContainer.className =
                "meaning-images";


            const symbolFigure =
                createMeaningFigure(
                    meaning.symbolId,

                    `Símbolo ${meaning.name}`,

                    "SÍMBOLO",

                    true
                );


            const illustrationFigure =
                createMeaningFigure(
                    meaning.illustrationId,

                    `Representação de ${meaning.translation}`,

                    "REPRESENTAÇÃO",

                    false
                );


            imagesContainer.append(
                symbolFigure,
                illustrationFigure
            );


            const meaningBody =
                document.createElement(
                    "div"
                );


            meaningBody.className =
                "meaning-body";


            const meaningNumber =
                document.createElement(
                    "p"
                );


            meaningNumber.className =
                "meaning-number";


            meaningNumber.textContent =
                `ADINKRA ${String(
                    index + 1
                ).padStart(2, "0")}`;


            const meaningTitle =
                document.createElement(
                    "h3"
                );


            meaningTitle.textContent =
                meaning.name;


            const meaningTranslation =
                document.createElement(
                    "p"
                );


            meaningTranslation.className =
                "meaning-translation";


            meaningTranslation.textContent =
                `“${meaning.translation}”`;


            const meaningDescription =
                document.createElement(
                    "p"
                );


            meaningDescription.className =
                "meaning-description";


            meaningDescription.textContent =
                meaning.description;


            meaningBody.append(
                meaningNumber,
                meaningTitle,
                meaningTranslation,
                meaningDescription
            );


            article.append(
                imagesContainer,
                meaningBody
            );


            fragment.appendChild(
                article
            );
        }
    );


    meaningGrid.appendChild(
        fragment
    );
}


/* ==========================================================
   CRIAR IMAGEM DA TELA DE SIGNIFICADOS
========================================================== */

function createMeaningFigure(
    imageId,
    altText,
    labelText,
    isSymbol
) {
    const figure =
        document.createElement(
            "figure"
        );


    figure.className =
        isSymbol
            ? "meaning-image-box symbol"
            : "meaning-image-box";


    const image =
        cloneCachedImage(
            imageId,
            altText
        );


    const caption =
        document.createElement(
            "figcaption"
        );


    caption.className =
        "meaning-image-label";


    caption.textContent =
        labelText;


    figure.append(
        image,
        caption
    );


    return figure;
}


/* ==========================================================
   ABRIR SIGNIFICADOS
========================================================== */

function openMeaningScreen() {
    closeResultModal();


    renderMeaningScreen();


    showOnlyScreen(
        meaningScreen
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================================
   VOLTAR AO JOGO CONCLUÍDO
========================================================== */

function backToCompletedGame() {
    showOnlyScreen(
        gameScreen
    );


    window.setTimeout(
        () => {
            $("completionPanel")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
        },

        100
    );
}


/* ==========================================================
   SERVICE WORKER
========================================================== */

function registerServiceWorker() {
    const serviceWorkerSupported =
        "serviceWorker" in navigator;


    const allowedAddress =
        window.location.protocol === "https:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";


    if (
        !serviceWorkerSupported ||
        !allowedAddress
    ) {
        return;
    }


    navigator.serviceWorker
        .register("sw.js")
        .catch(
            () => {
                /*
                    O jogo funciona normalmente
                    sem o Service Worker.
                */
            }
        );
}


/* ==========================================================
   EVENTOS
========================================================== */

$("startButton").addEventListener(
    "click",
    openGameScreen
);


$("restartButton").addEventListener(
    "click",
    restartGame
);


$("homeButton").addEventListener(
    "click",
    returnToInitialScreen
);


$("accessMeaningButton").addEventListener(
    "click",
    openMeaningScreen
);


$("modalMeaningButton").addEventListener(
    "click",
    openMeaningScreen
);


$("playAgainButton").addEventListener(
    "click",
    restartGame
);


$("modalHomeButton").addEventListener(
    "click",
    returnToInitialScreen
);


$("backToGameButton").addEventListener(
    "click",
    backToCompletedGame
);


$("meaningHomeButton").addEventListener(
    "click",
    returnToInitialScreen
);


$("meaningPlayAgainButton").addEventListener(
    "click",
    restartGame
);


$("modalOverlay").addEventListener(
    "click",
    closeResultModal
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
