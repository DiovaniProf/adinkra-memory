"use strict";


/* ==========================================================
   CONFIGURAÇÕES GERAIS
========================================================== */

const IMAGE_FOLDER = "IMAGENS";

const TOTAL_PAIRS = 10;

const CARD_BACK_ID = "CARTA";

const MAX_SIMULTANEOUS_LOADS = 5;


/*
    O código tenta localizar automaticamente
    cada imagem nestes formatos.
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
   FUNÇÕES AUXILIARES PARA OS ENDEREÇOS
========================================================== */

function createImageCandidates(fileName) {
    return IMAGE_EXTENSIONS.map(
        (extension) =>
            `${IMAGE_FOLDER}/${fileName}.${extension}`
    );
}


function createCardBackCandidates() {
    const names = [
        "CARTA",
        "carta",
        "Carta"
    ];


    return names.flatMap(
        (name) =>
            createImageCandidates(name)
    );
}


/* ==========================================================
   BANCO DAS 20 CARTAS
========================================================== */

const CARD_INFORMATION = [
    {
        id: "img01",
        pair: 1,
        type: "symbol",
        alt: "Símbolo Sankofa"
    },
    {
        id: "img02",
        pair: 1,
        type: "illustration",
        alt: "Representação visual de Sankofa"
    },

    {
        id: "img03",
        pair: 2,
        type: "symbol",
        alt: "Símbolo Duafe"
    },
    {
        id: "img04",
        pair: 2,
        type: "illustration",
        alt: "Pente de madeira"
    },

    {
        id: "img05",
        pair: 3,
        type: "symbol",
        alt: "Símbolo Fafanto"
    },
    {
        id: "img06",
        pair: 3,
        type: "illustration",
        alt: "Borboleta"
    },

    {
        id: "img07",
        pair: 4,
        type: "symbol",
        alt: "Símbolo Ohene Kyiniie"
    },
    {
        id: "img08",
        pair: 4,
        type: "illustration",
        alt: "Guarda-chuva do rei"
    },

    {
        id: "img09",
        pair: 5,
        type: "symbol",
        alt: "Símbolo Nkonsonkonson"
    },
    {
        id: "img10",
        pair: 5,
        type: "illustration",
        alt: "Elos de corrente"
    },

    {
        id: "img11",
        pair: 6,
        type: "symbol",
        alt: "Símbolo Ananse Ntontan"
    },
    {
        id: "img12",
        pair: 6,
        type: "illustration",
        alt: "Teia de aranha"
    },

    {
        id: "img13",
        pair: 7,
        type: "symbol",
        alt: "Símbolo Abe Dua"
    },
    {
        id: "img14",
        pair: 7,
        type: "illustration",
        alt: "Palmeira"
    },

    {
        id: "img15",
        pair: 8,
        type: "symbol",
        alt: "Símbolo Kete Pa"
    },
    {
        id: "img16",
        pair: 8,
        type: "illustration",
        alt: "Boa cama"
    },

    {
        id: "img17",
        pair: 9,
        type: "symbol",
        alt: "Símbolo Dwennimmen"
    },
    {
        id: "img18",
        pair: 9,
        type: "illustration",
        alt: "Carneiro com grandes chifres"
    },

    {
        id: "img19",
        pair: 10,
        type: "symbol",
        alt: "Símbolo Denkyem"
    },
    {
        id: "img20",
        pair: 10,
        type: "illustration",
        alt: "Crocodilo"
    }
];


const CARDS = CARD_INFORMATION.map(
    (card) => ({
        ...card,

        candidates:
            createImageCandidates(card.id)
    })
);


/* ==========================================================
   RECURSOS QUE SERÃO CARREGADOS
========================================================== */

const RESOURCES = [
    ...CARDS.map(
        (card) => ({
            id: card.id,
            alt: card.alt,
            candidates: card.candidates
        })
    ),

    {
        id: CARD_BACK_ID,
        alt: "Arte do verso das cartas",
        candidates: createCardBackCandidates()
    }
];


/* ==========================================================
   SIGNIFICADOS DAS ADINKRAS
========================================================== */

const MEANINGS = [
    {
        pair: 1,
        symbolId: "img01",
        illustrationId: "img02",

        name: "Sankofa",

        translation:
            "Volte e busque",

        description:
            "Símbolo da importância de aprender com o passado. " +
            "Essencialmente, toda experiência de vida deve torná-lo " +
            "mais sábio; mesmo uma experiência ruim ensina como não proceder."
    },

    {
        pair: 2,
        symbolId: "img03",
        illustrationId: "img04",

        name: "Duafe",

        translation:
            "Pente de madeira",

        description:
            "Símbolo de beleza e limpeza; também representa qualidades " +
            "como bondade, amor e cuidado."
    },

    {
        pair: 3,
        symbolId: "img05",
        illustrationId: "img06",

        name: "Fafanto",

        translation:
            "Borboleta",

        description:
            "Símbolo de transformação e mudança. Representa beleza, " +
            "graça e a natureza delicada da vida. Significa crescimento, " +
            "transformação e a importância de acolher mudanças com " +
            "resiliência e elegância."
    },

    {
        pair: 4,
        symbolId: "img07",
        illustrationId: "img08",

        name: "Ohene Kyiniie",

        translation:
            "Guarda-chuva do rei",

        description:
            "Símbolo de liderança, proteção, autoridade e responsabilidade. " +
            "Recorda que a verdadeira liderança também deve oferecer cuidado " +
            "e segurança à comunidade."
    },

    {
        pair: 5,
        symbolId: "img09",
        illustrationId: "img10",

        name: "Nkonsonkonson",

        translation:
            "Elo de corrente",

        description:
            "Símbolo de unidade e relações humanas. Lembra a necessidade " +
            "de contribuir para a comunidade e que, na união, há força. " +
            "Representa o chamado à ação, a coragem, a determinação e a " +
            "prontidão para enfrentar desafios."
    },

    {
        pair: 6,
        symbolId: "img11",
        illustrationId: "img12",

        name: "Ananse Ntontan",

        translation:
            "Teia de aranha",

        description:
            "Símbolo de sabedoria, criatividade, inteligência, engenhosidade " +
            "e poder criativo. Inspirado na aranha, figura lendária do " +
            "folclore africano, enfatiza pensamento estratégico, inovação " +
            "e capacidade de adaptar-se e superar desafios."
    },

    {
        pair: 7,
        symbolId: "img13",
        illustrationId: "img14",

        name: "Abe Dua",

        translation:
            "Palmeira",

        description:
            "Símbolo de riqueza e engenhosidade. Representa resistência, " +
            "prosperidade e capacidade de prover para si e para os outros. " +
            "Assim como toda parte da palmeira é útil, ensina recurso, força " +
            "e sustentabilidade para superar desafios."
    },

    {
        pair: 8,
        symbolId: "img15",
        illustrationId: "img16",

        name: "Kete Pa",

        translation:
            "Boa cama",

        description:
            "Símbolo de um bom casamento, de harmonia, acolhimento " +
            "e de um bom descanso."
    },

    {
        pair: 9,
        symbolId: "img17",
        illustrationId: "img18",

        name: "Dwennimmen",

        translation:
            "Chifres de carneiro",

        description:
            "Símbolo de humildade unida à força. O carneiro luta ferozmente " +
            "contra um adversário, mas também demonstra submissão e respeito, " +
            "enfatizando que até os fortes precisam ser humildes."
    },

    {
        pair: 10,
        symbolId: "img19",
        illustrationId: "img20",

        name: "Denkyem",

        translation:
            "Crocodilo",

        description:
            "Símbolo de adaptabilidade. O crocodilo vive na água, " +
            "mas respira ar, demonstrando a capacidade de ajustar-se " +
            "às circunstâncias."
    }
];


/* ==========================================================
   ELEMENTOS
========================================================== */

const $ = (id) =>
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


/* ==========================================================
   CACHE DAS IMAGENS
========================================================== */

const imageCache =
    new Map();


const resolvedSourceCache =
    new Map();


/* ==========================================================
   ESTADO DO JOGO
========================================================== */

let resourcesReady =
    false;


let loadingInProgress =
    false;


let fallbackCount =
    0;


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
   CRIAR IMAGEM PROVISÓRIA EM CASO DE FALHA
========================================================== */

function createFallbackImage(
    text,
    type = "illustration"
) {
    const isBack =
        type === "back";


    const label =
        isBack
            ? "ADINKRA"
            : text.toUpperCase();


    const mainText =
        isBack
            ? "◈"
            : text
                .replace("img", "")
                .toUpperCase();


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
                y="${isBack ? 315 : 305}"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="${isBack ? 130 : 150}"
                font-weight="900"
                fill="#fff4cc"
            >
                ${mainText}
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
   TENTAR CARREGAR UMA LISTA DE ENDEREÇOS
========================================================== */

function loadImageFromCandidates(resource) {
    return new Promise(
        (resolve) => {
            let candidateIndex =
                0;


            function tryNextCandidate() {
                if (
                    candidateIndex >=
                    resource.candidates.length
                ) {
                    fallbackCount += 1;


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


                            resolvedSourceCache.set(
                                resource.id,
                                fallback.src
                            );


                            resolve({
                                resource,
                                usedFallback: true
                            });
                        };


                    fallback.src =
                        createFallbackImage(
                            resource.id,
                            resource.id === CARD_BACK_ID
                                ? "back"
                                : "illustration"
                        );


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


                image.decoding =
                    "async";


                image.loading =
                    "eager";


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


                        resolvedSourceCache.set(
                            resource.id,
                            candidate
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
   PREPARAR TODAS AS IMAGENS
========================================================== */

async function preloadAllResources() {
    if (loadingInProgress) {
        return;
    }


    loadingInProgress =
        true;


    resourcesReady =
        false;


    fallbackCount =
        0;


    imageCache.clear();


    resolvedSourceCache.clear();


    $("startButton").hidden =
        true;


    $("startButton").disabled =
        true;


    let nextResourceIndex =
        0;


    let completedResources =
        0;


    updateLoadingProgress(0);


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
                RESOURCES[
                    currentIndex
                ];


            $("loadingText").textContent =
                resource.id === CARD_BACK_ID
                    ? "Localizando a imagem CARTA..."
                    : `Localizando ${resource.id}...`;


            await loadImageFromCandidates(
                resource
            );


            completedResources += 1;


            updateLoadingProgress(
                completedResources
            );
        }
    }


    const workers =
        Array.from(
            {
                length:
                    Math.min(
                        MAX_SIMULTANEOUS_LOADS,
                        RESOURCES.length
                    )
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
   ATUALIZAR BARRA DE CARREGAMENTO
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


    if (fallbackCount === 0) {
        $("loadingText").textContent =
            "Todas as imagens locais estão carregadas e prontas.";

        $("localModeInformation").innerHTML = `
            <span aria-hidden="true">✓</span>

            <p>
                As 20 imagens e a imagem
                <strong>CARTA</strong>
                foram encontradas na pasta
                <strong>IMAGENS</strong>.
            </p>
        `;

    } else {
        $("loadingText").textContent =
            "O jogo está pronto, mas alguns arquivos não foram encontrados.";

        $("localModeInformation").innerHTML = `
            <span aria-hidden="true">!</span>

            <p>
                ${fallbackCount}
                recurso(s) receberam uma representação provisória.
                Confira os nomes dos arquivos na pasta
                <strong>IMAGENS</strong>.
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
   CLONAR IMAGEM JÁ CARREGADA
========================================================== */

function cloneCachedImage(
    resourceId,
    altText
) {
    const original =
        imageCache.get(
            resourceId
        );


    if (!original) {
        throw new Error(
            `Imagem ${resourceId} indisponível.`
        );
    }


    const copy =
        original.cloneNode(true);


    copy.alt =
        altText;


    copy.draggable =
        false;


    copy.loading =
        "eager";


    copy.decoding =
        "sync";


    return copy;
}


/* ==========================================================
   TROCAR AS TRÊS CARTAS DA TELA INICIAL
========================================================== */

function refreshInitialPreview(
    animate = true
) {
    if (!resourcesReady) {
        return;
    }


    /*
        As imagens pares são as representações coloridas:
        img02, img04, img06... img20.
    */

    const coloredCards =
        CARDS.filter(
            (card) =>
                card.type ===
                "illustration"
        );


    const selectedCards =
        shuffle(
            coloredCards
        ).slice(0, 3);


    if (animate) {
        previewCards.forEach(
            (previewCard) => {
                previewCard.classList.add(
                    "preview-changing"
                );
            }
        );
    }


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

        animate ? 250 : 0
    );
}


/* ==========================================================
   MOSTRAR APENAS UMA TELA
========================================================== */

function showOnly(screen) {
    const screens = [
        initialScreen,
        gameScreen,
        meaningScreen
    ];


    screens.forEach(
        (currentScreen) => {
            const isSelected =
                currentScreen === screen;


            currentScreen.hidden =
                !isSelected;


            currentScreen.setAttribute(
                "aria-hidden",
                isSelected
                    ? "false"
                    : "true"
            );


            currentScreen.classList.remove(
                "is-visible",
                "is-leaving"
            );
        }
    );


    if (
        screen !== initialScreen
    ) {
        window.requestAnimationFrame(
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


    showOnly(
        gameScreen
    );


    document.body.classList.remove(
        "page-locked"
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
   RETORNAR À TELA INICIAL
========================================================== */

function returnToInitialScreen() {
    stopTimer();


    closeResultModal();


    showOnly(
        initialScreen
    );


    document.body.classList.add(
        "page-locked"
    );


    $("loadingText").textContent =
        "As imagens continuam prontas na memória do navegador.";


    refreshInitialPreview(
        true
    );


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}


/* ==========================================================
   CRIAR O TABULEIRO
========================================================== */

function createBoard() {
    const grid =
        $("memoryGrid");


    grid.innerHTML =
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
            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                `memory-card ${cardData.type}-card`;


            button.dataset.id =
                cardData.id;


            button.dataset.pair =
                String(
                    cardData.pair
                );


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


            /*
                VERSO — imagem CARTA.
            */

            const back =
                document.createElement(
                    "span"
                );


            back.className =
                "memory-card-face memory-card-back";


            back.setAttribute(
                "aria-hidden",
                "true"
            );


            back.appendChild(
                cloneCachedImage(
                    CARD_BACK_ID,
                    ""
                )
            );


            /*
                FRENTE — img01 até img20.
            */

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
                    flipCard(
                        button
                    );
                }
            );


            fragment.appendChild(
                button
            );
        }
    );


    grid.appendChild(
        fragment
    );
}


/* ==========================================================
   VIRAR UMA CARTA
========================================================== */

function flipCard(card) {
    const isFlipped =
        card.classList.contains(
            "is-flipped"
        );


    const isMatched =
        card.classList.contains(
            "is-matched"
        );


    if (
        boardLocked ||
        isFlipped ||
        isMatched
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


    updateStatus();


    checkSelectedPair();
}


/* ==========================================================
   VERIFICAR O PAR
========================================================== */

function checkSelectedPair() {
    const isMatch =
        firstCard.dataset.pair ===
        secondCard.dataset.pair;


    if (isMatch) {
        registerMatch();

    } else {
        hideWrongCards();
    }
}


/* ==========================================================
   REGISTRAR PAR ENCONTRADO
========================================================== */

function registerMatch() {
    boardLocked =
        true;


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


            card.setAttribute(
                "aria-label",
                "Carta encontrada"
            );
        }
    );


    matchedPairs += 1;


    updateStatus();


    $("gameInstruction").textContent =
        "Muito bem! Você encontrou um par.";


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
   ESCONDER CARTAS INCORRETAS
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


            clearSelection();


            boardLocked =
                false;


            $("gameInstruction").textContent =
                "Selecione duas novas cartas.";
        },

        980
    );
}


/* ==========================================================
   LIMPAR SELEÇÃO
========================================================== */

function clearSelection() {
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
   ATUALIZAR PAINEL DO JOGO
========================================================== */

function updateStatus() {
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


    showOnly(
        gameScreen
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


    window.setTimeout(
        () => {
            $("modalMeaningButton").focus();
        },

        60
    );
}


function closeResultModal() {
    $("resultModal").hidden =
        true;


    $("resultModal").setAttribute(
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
   PRODUZIR TELA DE SIGNIFICADOS
========================================================== */

function renderMeaningScreen() {
    if (meaningRendered) {
        return;
    }


    meaningRendered =
        true;


    const grid =
        $("meaningGrid");


    grid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    MEANINGS.forEach(
        (
            item,
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


            /*
                Símbolo.
            */

            const symbolFigure =
                document.createElement(
                    "figure"
                );


            symbolFigure.className =
                "meaning-image-box symbol";


            const symbolImage =
                cloneCachedImage(
                    item.symbolId,
                    `Símbolo ${item.name}`
                );


            const symbolLabel =
                document.createElement(
                    "figcaption"
                );


            symbolLabel.className =
                "meaning-image-label";


            symbolLabel.textContent =
                "SÍMBOLO";


            symbolFigure.append(
                symbolImage,
                symbolLabel
            );


            /*
                Representação colorida.
            */

            const illustrationFigure =
                document.createElement(
                    "figure"
                );


            illustrationFigure.className =
                "meaning-image-box";


            const illustrationImage =
                cloneCachedImage(
                    item.illustrationId,
                    `Representação de ${item.translation}`
                );


            const illustrationLabel =
                document.createElement(
                    "figcaption"
                );


            illustrationLabel.className =
                "meaning-image-label";


            illustrationLabel.textContent =
                "REPRESENTAÇÃO";


            illustrationFigure.append(
                illustrationImage,
                illustrationLabel
            );


            imagesContainer.append(
                symbolFigure,
                illustrationFigure
            );


            /*
                Texto explicativo.
            */

            const body =
                document.createElement(
                    "div"
                );


            body.className =
                "meaning-body";


            const number =
                document.createElement(
                    "p"
                );


            number.className =
                "meaning-number";


            number.textContent =
                `ADINKRA ${String(
                    index + 1
                ).padStart(2, "0")}`;


            const title =
                document.createElement(
                    "h3"
                );


            title.textContent =
                item.name;


            const translation =
                document.createElement(
                    "p"
                );


            translation.className =
                "meaning-translation";


            translation.textContent =
                `“${item.translation}”`;


            const description =
                document.createElement(
                    "p"
                );


            description.className =
                "meaning-description";


            description.textContent =
                item.description;


            body.append(
                number,
                title,
                translation,
                description
            );


            article.append(
                imagesContainer,
                body
            );


            fragment.appendChild(
                article
            );
        }
    );


    grid.appendChild(
        fragment
    );
}


/* ==========================================================
   ABRIR TELA DE SIGNIFICADOS
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
    const isSupported =
        "serviceWorker" in navigator;


    const validProtocol =
        window.location.protocol === "https:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";


    if (
        !isSupported ||
        !validProtocol
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