"use strict";


/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const TOTAL_PAIRS = 10;

const CARD_BACK_ID = "cardBack";

const CARD_BACK_PATH =
    "imagens/capa.png";

const MAX_SIMULTANEOUS_LOADS = 5;


/* ==========================================================
   CORES DAS CARTAS PROVISÓRIAS
========================================================== */

const PALETTES = [
    ["#471608", "#a74317", "#f0a536"],
    ["#17213f", "#305da8", "#6bbcf3"],
    ["#371047", "#87399b", "#dc82e9"],
    ["#12382b", "#278663", "#7addae"],
    ["#4b161e", "#a52d45", "#f48192"],
    ["#393006", "#a58a16", "#f4d757"],
    ["#122f40", "#197c91", "#70d9e6"],
    ["#38210f", "#a05a21", "#efb36a"],
    ["#251847", "#6844a6", "#ad8bf1"],
    ["#18360f", "#4c992e", "#9de26d"]
];


/* ==========================================================
   PRODUÇÃO DAS CARTAS PROVISÓRIAS
========================================================== */

function placeholderImage(
    letter,
    type,
    index
) {
    const [
        dark,
        medium,
        light
    ] = PALETTES[
        index % PALETTES.length
    ];


    const label =
        type === "symbol"
            ? "SÍMBOLO"
            : "IMAGEM";


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
                        offset="0"
                        stop-color="${dark}"
                    />

                    <stop
                        offset="0.55"
                        stop-color="${medium}"
                    />

                    <stop
                        offset="1"
                        stop-color="${light}"
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
                x="20"
                y="20"
                width="920"
                height="500"
                rx="29"
                fill="none"
                stroke="#ffe7a0"
                stroke-width="5"
                opacity="0.75"
            />

            <circle
                cx="480"
                cy="245"
                r="150"
                fill="#120805"
                opacity="0.35"
                stroke="#ffe7a0"
                stroke-width="7"
            />

            <text
                x="480"
                y="315"
                text-anchor="middle"
                font-family="Arial"
                font-size="210"
                font-weight="900"
                fill="#fff7dd"
            >
                ${letter}
            </text>

            <rect
                x="330"
                y="427"
                width="300"
                height="58"
                rx="29"
                fill="#130906"
                opacity="0.6"
            />

            <text
                x="480"
                y="466"
                text-anchor="middle"
                font-family="Arial"
                font-size="26"
                font-weight="800"
                letter-spacing="7"
                fill="#fff4cc"
            >
                ${label}
            </text>
        </svg>
    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


/* ==========================================================
   CAPA PROVISÓRIA DE SEGURANÇA
========================================================== */

function fallbackBackImage() {
    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="960"
            height="540"
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
                        stop-color="#241006"
                    />

                    <stop
                        offset="1"
                        stop-color="#d27a22"
                    />
                </linearGradient>
            </defs>

            <rect
                width="960"
                height="540"
                rx="36"
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
                cy="270"
                r="145"
                fill="#1a0b05"
                opacity="0.58"
                stroke="#ffe8a6"
                stroke-width="8"
            />

            <text
                x="480"
                y="250"
                text-anchor="middle"
                font-family="Arial"
                font-size="60"
                font-weight="900"
                fill="#f5c65f"
            >
                ADINKRA
            </text>

            <text
                x="480"
                y="340"
                text-anchor="middle"
                font-family="Arial"
                font-size="80"
                fill="#ffe8a6"
            >
                ◈
            </text>
        </svg>
    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


/* ==========================================================
   DEFINIÇÃO DAS 20 CARTAS
========================================================== */

const CARD_DEFINITIONS =
    Array.from(
        { length: 10 },

        (_, pairIndex) => {
            const letter =
                String.fromCharCode(
                    65 + pairIndex
                );


            const pair =
                pairIndex + 1;


            return [
                {
                    id:
                        `img${String(
                            pairIndex * 2 + 1
                        ).padStart(2, "0")}`,

                    pair,
                    letter,

                    type: "symbol"
                },

                {
                    id:
                        `img${String(
                            pairIndex * 2 + 2
                        ).padStart(2, "0")}`,

                    pair,
                    letter,

                    type: "illustration"
                }
            ];
        }
    ).flat();


const CARDS =
    CARD_DEFINITIONS.map(
        (card) => ({
            ...card,

            src:
                placeholderImage(
                    card.letter,
                    card.type,
                    card.pair - 1
                ),

            alt:
                `Carta provisória ${card.letter}, ` +
                (
                    card.type === "symbol"
                        ? "símbolo"
                        : "imagem"
                )
        })
    );


/* ==========================================================
   RECURSOS DA TELA INICIAL
========================================================== */

const RESOURCES = [
    ...CARDS.map(
        (card) => ({
            id: card.id,
            src: card.src,
            alt: card.alt,
            letter: card.letter
        })
    ),

    {
        id: CARD_BACK_ID,

        src:
            CARD_BACK_PATH,

        alt:
            "Arte do verso das cartas"
    }
];


/* ==========================================================
   SIGNIFICADOS DAS ADINKRAS
========================================================== */

const MEANINGS = [
    {
        pair: 1,
        letter: "A",

        name:
            "Sankofa",

        translation:
            "Volte e busque",

        symbol:
            "https://i.postimg.cc/2bqyhWvZ/img01.jpg",

        illustration:
            "https://i.postimg.cc/hJZhXsJn/img02.png",

        description:
            "Símbolo da importância de aprender com o passado. " +
            "Essencialmente, toda experiência de vida deve torná-lo " +
            "mais sábio; mesmo uma experiência ruim ensina como não proceder."
    },

    {
        pair: 10,
        letter: "J",

        name:
            "Denkyem",

        translation:
            "Crocodilo",

        symbol:
            "https://i.postimg.cc/MMcHVBRf/img19.jpg",

        illustration:
            "https://i.postimg.cc/94gzDb4z/img20.png",

        description:
            "Símbolo de adaptabilidade. O crocodilo vive na água, " +
            "mas respira ar, demonstrando a capacidade de ajustar-se " +
            "às circunstâncias."
    },

    {
        pair: 9,
        letter: "I",

        name:
            "Dwennimmen",

        translation:
            "Chifres de carneiro",

        symbol:
            "https://i.postimg.cc/R63hKtfn/img17.jpg",

        illustration:
            "https://i.postimg.cc/4K2nYPKT/img18.png",

        description:
            "Símbolo de humildade unida à força. O carneiro luta " +
            "ferozmente contra um adversário, mas também se submete " +
            "humildemente ao abate, enfatizando que até os fortes " +
            "precisam ser humildes."
    },

    {
        pair: 5,
        letter: "E",

        name:
            "Nkonsonkonson",

        translation:
            "Elo de corrente",

        symbol:
            "https://i.postimg.cc/k6VGKS8V/img09.jpg",

        illustration:
            "https://i.postimg.cc/hJZhXsJg/img10.png",

        description:
            "Símbolo de unidade e relações humanas. Lembra a necessidade " +
            "de contribuir para a comunidade e que, na união, há força. " +
            "Representa o chamado à ação, a coragem, a determinação e a " +
            "prontidão para enfrentar desafios."
    },

    {
        pair: 2,
        letter: "B",

        name:
            "Duafe",

        translation:
            "Pente de madeira",

        symbol:
            "https://i.postimg.cc/47KyVcty/img03.jpg",

        illustration:
            "https://i.postimg.cc/d7NDh67Y/img04.png",

        description:
            "Símbolo de beleza e limpeza; também de qualidades femininas " +
            "como bondade, amor e cuidado."
    },

    {
        pair: 8,
        letter: "H",

        name:
            "Kete Pa",

        translation:
            "Boa cama",

        symbol:
            "https://i.postimg.cc/PLVNCyLm/img15.jpg",

        illustration:
            "https://i.postimg.cc/nsSMX2sc/img16.png",

        description:
            "Símbolo de um bom casamento e de um bom descanso."
    },

    {
        pair: 6,
        letter: "F",

        name:
            "Ananse Ntontan",

        translation:
            "Teia de aranha",

        symbol:
            "https://i.postimg.cc/06Xrzn67/img11.jpg",

        illustration:
            "https://i.postimg.cc/KKp41fKR/img12.png",

        description:
            "Símbolo de sabedoria, criatividade, inteligência, " +
            "engenhosidade e poder criativo. Inspirado na Aranha, " +
            "figura lendária do folclore africano, enfatiza pensamento " +
            "estratégico, inovação e capacidade de adaptar-se e superar desafios."
    },

    {
        pair: 7,
        letter: "G",

        name:
            "Abe Dua",

        translation:
            "Palmeira",

        symbol:
            "https://i.postimg.cc/mcphPjcM/img13.jpg",

        illustration:
            "https://i.postimg.cc/WDYtd8Dz/img14.png",

        description:
            "Símbolo de riqueza e engenhosidade. Representa resistência, " +
            "prosperidade e capacidade de prover para si e para os outros. " +
            "Assim como toda parte da palmeira é útil, ensina recurso, " +
            "força e sustentabilidade para superar desafios."
    },

    {
        pair: 3,
        letter: "C",

        name:
            "Fafanto",

        translation:
            "Borboleta",

        symbol:
            "https://i.postimg.cc/f3qkVC30/img05.jpg",

        illustration:
            "https://i.postimg.cc/QBYVFmBF/img06.png",

        description:
            "Símbolo de transformação e mudança. Representa beleza, " +
            "graça e a natureza delicada da vida. Significa crescimento, " +
            "transformação e a importância de acolher mudanças com " +
            "resiliência e elegância."
    },

    {
        pair: 4,
        letter: "D",

        name:
            "Ohene Kyiniie",

        translation:
            "Guarda-chuva do rei",

        symbol:
            "https://i.postimg.cc/67bT8c7v/img07.jpg",

        illustration:
            "https://i.postimg.cc/gwtrxsw8/img08.png",

        description:
            "Símbolo de liderança e proteção."
    }
];


/* ==========================================================
   ELEMENTOS
========================================================== */

const $ =
    (id) =>
        document.getElementById(id);


const initialScreen =
    $("initialScreen");

const gameScreen =
    $("gameScreen");

const meaningScreen =
    $("meaningScreen");


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


const imageCache =
    new Map();


/* ==========================================================
   ESTADO
========================================================== */

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

let meaningRendered = false;


/* ==========================================================
   CARREGAR UMA IMAGEM
========================================================== */

function loadImage(resource) {
    return new Promise(
        (resolve) => {
            const image =
                new Image();


            image.alt =
                resource.alt;


            image.decoding =
                "async";


            image.onload =
                async () => {
                    try {
                        await image.decode?.();

                    } catch (error) {
                        /*
                            O evento load já confirma
                            que a imagem pode ser usada.
                        */
                    }


                    imageCache.set(
                        resource.id,
                        image
                    );


                    resolve();
                };


            image.onerror =
                () => {
                    const fallback =
                        new Image();


                    fallback.onload =
                        () => {
                            imageCache.set(
                                resource.id,
                                fallback
                            );


                            resolve();
                        };


                    fallback.src =
                        resource.id === CARD_BACK_ID
                            ? fallbackBackImage()
                            : placeholderImage(
                                resource.letter || "?",
                                "illustration",
                                0
                            );
                };


            image.src =
                resource.src;
        }
    );
}


/* ==========================================================
   PREPARAR OS RECURSOS DO JOGO
========================================================== */

async function preloadAllResources() {
    if (loadingInProgress) {
        return;
    }


    loadingInProgress = true;


    imageCache.clear();


    $("startButton").hidden =
        true;


    $("startButton").disabled =
        true;


    let next = 0;
    let done = 0;


    updateLoading(0);


    async function worker() {
        while (
            next < RESOURCES.length
        ) {
            const resource =
                RESOURCES[next++];


            $("loadingText").textContent =
                resource.id === CARD_BACK_ID
                    ? "Preparando a capa das cartas..."
                    : `Preparando ${resource.id}...`;


            await loadImage(resource);


            done += 1;


            updateLoading(done);
        }
    }


    await Promise.all(
        Array.from(
            {
                length: Math.min(
                    MAX_SIMULTANEOUS_LOADS,
                    RESOURCES.length
                )
            },

            worker
        )
    );


    loadingInProgress =
        false;


    resourcesReady =
        true;


    $("loadingText").textContent =
        "As cartas provisórias estão prontas para a partida.";


    $("startButton").hidden =
        false;


    $("startButton").disabled =
        false;


    refreshInitialPreview(false);


    registerServiceWorker();
}


/* ==========================================================
   ATUALIZAR CARREGAMENTO
========================================================== */

function updateLoading(done) {
    const percent =
        Math.round(
            (
                done /
                RESOURCES.length
            ) * 100
        );


    $("loadingPercentage").textContent =
        `${percent}%`;


    $("loadingCounter").textContent =
        `${done} de ${RESOURCES.length} recursos preparados`;


    $("loadingBar").style.width =
        `${percent}%`;


    $("loadingTrack").setAttribute(
        "aria-valuenow",
        String(done)
    );
}


/* ==========================================================
   EMBARALHAMENTO
========================================================== */

function shuffle(items) {
    const result =
        [...items];


    for (
        let index =
            result.length - 1;

        index > 0;

        index -= 1
    ) {
        const randomIndex =
            Math.floor(
                Math.random() *
                (index + 1)
            );


        [
            result[index],
            result[randomIndex]
        ] = [
            result[randomIndex],
            result[index]
        ];
    }


    return result;
}


/* ==========================================================
   ALTERAR AS TRÊS CARTAS DA ABERTURA
========================================================== */

function refreshInitialPreview(
    animate = true
) {
    if (!resourcesReady) {
        return;
    }


    const choices =
        shuffle(
            CARDS.filter(
                (card) =>
                    card.type === "illustration"
            )
        ).slice(0, 3);


    if (animate) {
        previewCards.forEach(
            (card) => {
                card.classList.add(
                    "preview-changing"
                );
            }
        );
    }


    window.setTimeout(
        () => {
            choices.forEach(
                (card, index) => {
                    const cached =
                        imageCache.get(
                            card.id
                        );


                    previewImages[index].src =
                        cached.currentSrc ||
                        cached.src;


                    previewImages[index].alt =
                        `Carta provisória ${card.letter}`;
                }
            );


            previewCards.forEach(
                (card) => {
                    card.classList.remove(
                        "preview-changing"
                    );
                }
            );
        },

        animate ? 250 : 0
    );
}


/* ==========================================================
   CLONAR IMAGEM DA MEMÓRIA
========================================================== */

function cloneCachedImage(
    id,
    alt
) {
    const original =
        imageCache.get(id);


    if (!original) {
        throw new Error(
            `Imagem ${id} indisponível.`
        );
    }


    const copy =
        original.cloneNode(true);


    copy.alt =
        alt;


    copy.draggable =
        false;


    return copy;
}


/* ==========================================================
   EXIBIR SOMENTE UMA TELA
========================================================== */

function showOnly(screen) {
    [
        initialScreen,
        gameScreen,
        meaningScreen
    ].forEach(
        (item) => {
            item.hidden =
                item !== screen;


            item.setAttribute(
                "aria-hidden",
                item === screen
                    ? "false"
                    : "true"
            );


            item.classList.remove(
                "is-visible",
                "is-leaving"
            );
        }
    );


    if (
        screen !== initialScreen
    ) {
        requestAnimationFrame(
            () => {
                screen.classList.add(
                    "is-visible"
                );
            }
        );
    }
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


    showOnly(gameScreen);


    document.body.classList.remove(
        "page-locked"
    );


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}


/* ==========================================================
   RETORNAR À TELA INICIAL
========================================================== */

function returnToInitialScreen() {
    stopTimer();


    closeResultModal();


    showOnly(initialScreen);


    document.body.classList.add(
        "page-locked"
    );


    $("loadingText").textContent =
        "As cartas provisórias continuam prontas na memória do navegador.";


    refreshInitialPreview(true);
}


/* ==========================================================
   CRIAR TABULEIRO
========================================================== */

function createBoard() {
    const grid =
        $("memoryGrid");


    grid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    shuffle(CARDS).forEach(
        (cardData, index) => {
            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "memory-card provisional-card";


            button.dataset.id =
                cardData.id;


            button.dataset.pair =
                String(cardData.pair);


            button.dataset.letter =
                cardData.letter;


            button.setAttribute(
                "aria-label",
                `Carta ${index + 1}, fechada`
            );


            const inner =
                document.createElement(
                    "span"
                );


            inner.className =
                "memory-card-inner";


            const back =
                document.createElement(
                    "span"
                );


            back.className =
                "memory-card-face memory-card-back";


            back.appendChild(
                cloneCachedImage(
                    CARD_BACK_ID,
                    ""
                )
            );


            const front =
                document.createElement(
                    "span"
                );


            front.className =
                "memory-card-face memory-card-front";


            front.appendChild(
                cloneCachedImage(
                    cardData.id,
                    cardData.alt
                )
            );


            inner.append(
                back,
                front
            );


            button.appendChild(
                inner
            );


            button.addEventListener(
                "click",

                () => {
                    flipCard(button);
                }
            );


            fragment.appendChild(
                button
            );
        }
    );


    grid.appendChild(fragment);
}


/* ==========================================================
   VIRAR CARTA
========================================================== */

function flipCard(card) {
    if (
        boardLocked ||
        card.classList.contains("is-flipped") ||
        card.classList.contains("is-matched")
    ) {
        return;
    }


    startTimer();


    card.classList.add(
        "is-flipped"
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


    updateStatus();


    if (
        firstCard.dataset.pair ===
        secondCard.dataset.pair
    ) {
        registerMatch();

    } else {
        hideWrongCards();
    }
}


/* ==========================================================
   PAR ENCONTRADO
========================================================== */

function registerMatch() {
    boardLocked =
        true;


    const letter =
        firstCard.dataset.letter;


    [
        firstCard,
        secondCard
    ].forEach(
        (card) => {
            card.classList.add(
                "is-matched"
            );


            card.disabled =
                true;
        }
    );


    matchedPairs += 1;


    updateStatus();


    $("gameInstruction").textContent =
        `Muito bem! Você encontrou o par ${letter}.`;


    window.setTimeout(
        () => {
            clearSelection();


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

        620
    );
}


/* ==========================================================
   PAR INCORRETO
========================================================== */

function hideWrongCards() {
    boardLocked =
        true;


    firstCard.classList.add(
        "is-wrong"
    );


    secondCard.classList.add(
        "is-wrong"
    );


    $("gameInstruction").textContent =
        "As letras não formam um par. Observe novamente.";


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


            clearSelection();


            boardLocked =
                false;


            $("gameInstruction").textContent =
                "Selecione duas novas cartas.";
        },

        980
    );
}


function clearSelection() {
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


function formatTime(seconds) {
    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    return (
        `${String(minutes).padStart(2, "0")}:` +
        `${String(remainingSeconds).padStart(2, "0")}`
    );
}


/* ==========================================================
   ATUALIZAR INFORMAÇÕES
========================================================== */

function updateStatus() {
    $("movesCounter").textContent =
        String(moves);


    $("pairsCounter").textContent =
        String(matchedPairs);


    $("pairsProgressBar").style.width =
        `${(
            matchedPairs /
            TOTAL_PAIRS
        ) * 100}%`;


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


    showOnly(gameScreen);


    document.body.classList.remove(
        "page-locked"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================================
   FINALIZAR JOGO
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
        520
    );
}


/* ==========================================================
   MODAL
========================================================== */

function openResultModal() {
    $("resultModal").hidden =
        false;


    $("resultModal").setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "page-locked"
    );
}


function closeResultModal() {
    $("resultModal").hidden =
        true;


    $("resultModal").setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        !initialScreen.hidden
    ) {
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
   PRODUZIR A TELA DE SIGNIFICADOS
========================================================== */

function renderMeaningScreen() {
    if (meaningRendered) {
        return;
    }


    meaningRendered =
        true;


    const grid =
        $("meaningGrid");


    const fragment =
        document.createDocumentFragment();


    MEANINGS.forEach(
        (item, index) => {
            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "meaning-card";


            card.innerHTML = `
                <div class="meaning-images">

                    <figure class="meaning-image-box symbol">

                        <img
                            src="${item.symbol}"
                            alt="Símbolo ${item.name}"
                            loading="lazy"
                            decoding="async"
                        />

                        <figcaption class="meaning-image-label">
                            SÍMBOLO
                        </figcaption>

                    </figure>


                    <figure class="meaning-image-box">

                        <img
                            src="${item.illustration}"
                            alt="Representação de ${item.translation}"
                            loading="lazy"
                            decoding="async"
                        />

                        <figcaption class="meaning-image-label">
                            REPRESENTAÇÃO
                        </figcaption>

                    </figure>

                </div>


                <div class="meaning-body">

                    <p class="meaning-number">
                        ADINKRA ${String(
                            index + 1
                        ).padStart(2, "0")}
                    </p>

                    <h3>
                        ${item.name}
                    </h3>

                    <p class="meaning-translation">
                        “${item.translation}”
                    </p>

                    <p class="meaning-description">
                        ${item.description}
                    </p>

                </div>
            `;


            card
                .querySelectorAll("img")
                .forEach(
                    (image) => {
                        image.addEventListener(
                            "error",

                            () => {
                                const isSymbol =
                                    Boolean(
                                        image.closest(
                                            ".symbol"
                                        )
                                    );


                                image.src =
                                    placeholderImage(
                                        item.letter,

                                        isSymbol
                                            ? "symbol"
                                            : "illustration",

                                        item.pair - 1
                                    );
                            },

                            {
                                once: true
                            }
                        );
                    }
                );


            fragment.appendChild(
                card
            );
        }
    );


    grid.appendChild(
        fragment
    );
}


/* ==========================================================
   ABRIR A TELA DE SIGNIFICADOS
========================================================== */

function openMeaningScreen() {
    closeResultModal();


    renderMeaningScreen();


    showOnly(
        meaningScreen
    );


    document.body.classList.remove(
        "page-locked"
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
    showOnly(
        gameScreen
    );


    document.body.classList.remove(
        "page-locked"
    );


    window.scrollTo({
        top:
            document.body.scrollHeight,

        behavior:
            "smooth"
    });
}


/* ==========================================================
   SERVICE WORKER
========================================================== */

function registerServiceWorker() {
    if (
        !(
            "serviceWorker" in
            navigator
        )
    ) {
        return;
    }


    if (
        ![
            "https:",
            "http:"
        ].includes(
            window.location.protocol
        )
    ) {
        return;
    }


    navigator.serviceWorker
        .register("sw.js")
        .catch(
            () => {
                /*
                    O jogo funciona mesmo
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


document.addEventListener(
    "keydown",

    (event) => {
        if (
            event.key === "Escape" &&
            !$("resultModal").hidden
        ) {
            closeResultModal();
        }
    }
);


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

preloadAllResources();