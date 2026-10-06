/* =========================================================
   CONFIGURAÇÃO PRINCIPAL
   EDITE ESTA PARTE PARA COLOCAR SUAS FOTOS
========================================================= */

// Data em que o relacionamento começou
const relationshipStart = new Date("2023-09-09");

/*
=========================================================
FOTOS DO SITE

As fotos podem ficar NA MESMA PASTA do:
- index.html
- style.css
- script.js

Exemplo:

index.html
style.css
script.js
capa.jpg
carrossel1.jpg
timeline1.jpg
polaroid1.jpg
etc...

Você pode usar qualquer nome.

Exemplo:
capa: "foto-amanda-praia.jpg"
=========================================================
*/

const FOTOS = {

    // FOTO PRINCIPAL DO SITE
    capa: "capa.jpg",

    // CARROSSEL
    carrossel: [
        "assets/carrossel1.jpg",
        "assets/carrossel2.jpg",
        "assets/carrossel3.jpg",
        "assets/carrossel4.jpg",
        "assets/carrossel5.jpg",
        "assets/carrossel6.jpg",
        "assets/carrossel7.jpg",
        "assets/carrossel8.jpg"
    ],

    // LINHA DO TEMPO
    timeline: [
        "assets/timeline1.jpg",
        "assets/timeline2.jpg",
        "assets/timeline3.jpg",
        "assets/timeline4.jpg"
    ],

    // GALERIA HORIZONTAL
    horizontal: [
        "assets/horizontal1.jpg",
        "assets/horizontal2.jpg",
        "assets/horizontal3.jpg",
        "assets/horizontal4.jpg",
        "assets/horizontal5.jpg"
    ],

    // POLAROIDS
    polaroids: [
        "assets/polaroid1.jpg",
        "assets/polaroid2.jpg",
        "assets/polaroid3.jpg",
        "assets/polaroid4.jpg",
        "assets/polaroid5.jpg"
    ],

    // FOTOS QUE APARECEM NO BOTÃO "SAUDADE"
    saudade: [
        "assets/saudade1.jpg",
        "assets/saudade2.jpg",
        "assets/saudade3.jpg"
    ]
};


/* =========================================================
   TEXTOS DO CARROSSEL
========================================================= */

const CAPTIONS = [
    "Um dos dias que eu guardaria para sempre.",
    "Você fica linda até quando nem percebe.",
    "Eu voltaria para esse dia mil vezes.",
    "Meu sorriso favorito continua sendo o seu.",
    "Mais um momento que eu guardaria para sempre.",
    "Com você, qualquer lugar fica melhor.",
    "Nós dois e mais uma memória.",
    "Uma das minhas fotos favoritas."
];


/* =========================================================
   TIMELINE
========================================================= */

const TIMELINE = [

    [
        "01",
        "Quando tudo começou",
        "Talvez a gente nem imaginasse onde aquilo iria chegar."
    ],

    [
        "02",
        "Nosso primeiro momento inesquecível",
        "Foi quando comecei a perceber que você seria diferente."
    ],

    [
        "03",
        "A primeira foto que virou favorita",
        "Eu ainda olho para ela e sorrio."
    ],

    [
        "04",
        "Todos os dias depois disso",
        "Porque, no final, não foram apenas grandes momentos. Foram os pequenos também."
    ]

];


/* =========================================================
   FRASES DA GALERIA HORIZONTAL
========================================================= */

const QUOTES = [

    "Você tem o sorriso que eu procuraria em qualquer lugar.",

    "Eu escolheria você para todo o sempre.",

    "Com você, até os dias comuns ganharam história.",

    "Você virou lar em uma pessoa.",

    "Se eu pudesse guardar alguma coisa para sempre, seriam nossos momentos."

];


/* =========================================================
   10 COISAS QUE EU AMO EM VOCÊ
========================================================= */

const LOVES = [

    [
        "Seu sorriso.",
        "Porque tem alguma coisa nele que consegue melhorar meu dia."
    ],

    [
        "Seu jeito.",
        "Aquele conjunto de detalhes que só você tem."
    ],

    [
        "Seu olhar.",
        "Especialmente quando você tenta esconder que está feliz."
    ],

    [
        "Sua companhia.",
        "Porque qualquer lugar melhora quando estou com você."
    ],

    [
        "Seu abraço.",
        "Meu pequeno lugar de paz."
    ],

    [
        "Sua personalidade.",
        "Até as suas manias fazem parte do motivo de eu amar você."
    ],

    [
        "Nossas conversas.",
        "Das sérias às completamente idiotas."
    ],

    [
        "Nossas memórias.",
        "E principalmente todas que ainda vamos criar."
    ],

    [
        "Você sendo você.",
        "Sem precisar mudar absolutamente nada."
    ],

    [
        "Nós.",
        "Porque minha coisa favorita em você também é quem eu sou quando estou ao seu lado."
    ]

];


/* =========================================================
   TEXTOS DAS POLAROIDS
========================================================= */

const POLA_TXT = [

    "meu amor",

    "minha Amandinha",

    "esse dia ♥",

    "mais um pra guardar",

    "nós dois :)"

];


/* =========================================================
   FRASES DO MODO SAUDADE
========================================================= */

const MISS_TXT = [

    "Então olha pra gente um pouquinho.",

    "Logo tem abraço de novo.",

    "Uma lembrança para diminuir a saudade."

];


/* =========================================================
   FRASES DO FUTURO
========================================================= */

const FUTURE = [

    "mais viagens",

    "mais fotos",

    "mais abraços",

    "mais dias comuns",

    "mais histórias",

    "mais nós."

];


/* =========================================================
   HELPERS
========================================================= */

const $ = (s, r = document) => r.querySelector(s);

const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const reduce = matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

const fine = matchMedia(
    "(hover:hover) and (pointer:fine)"
).matches;

const mobile = innerWidth < 700;


/*
=========================================================
FUNÇÃO QUE COLOCA UMA FOTO

Agora ela recebe DIRETAMENTE o nome do arquivo.

Exemplo:

photo("capa.jpg")

photo("foto-amanda.jpg")
=========================================================
*/

const photo = (
    arquivo,
    alt = "Foto de Gabriel e Amanda"
) => {

    if (!arquivo) return "";

    return `
        <img
            src="${arquivo}"
            alt="${alt}"
            loading="lazy"
            onerror="this.remove()"
        >
    `;
};


const wait = ms =>
    new Promise(resolve => setTimeout(resolve, ms));


let lenis;


/* =========================================================
   TOAST
========================================================= */

function toast(t, ms = 3500) {

    const e = $("#toast");

    e.textContent = t;

    e.classList.add("show");

    clearTimeout(toast.t);

    toast.t = setTimeout(() => {

        e.classList.remove("show");

    }, ms);

}


/* =========================================================
   PARTÍCULAS DE FUNDO
========================================================= */

function initParticles() {

    const c = $("#particles");

    const x = c.getContext("2d");

    let w;
    let h;

    const n = mobile ? 20 : 45;

    const p = [];


    const size = () => {

        w = c.width = innerWidth;

        h = c.height = innerHeight;

    };


    size();


    addEventListener(
        "resize",
        size
    );


    for (let i = 0; i < n; i++) {

        p.push({

            x: Math.random() * w,

            y: Math.random() * h,

            r: Math.random() * 1.4 + 0.3,

            v: Math.random() * 0.25 + 0.05,

            a: Math.random()

        });

    }


    (function loop() {

        x.clearRect(
            0,
            0,
            w,
            h
        );


        p.forEach(q => {

            q.y -= q.v;

            q.a += 0.01;


            if (q.y < -5) {

                q.y = h + 5;

                q.x = Math.random() * w;

            }


            x.globalAlpha =
                (Math.sin(q.a) + 1) * 0.25;


            x.fillStyle = "#EAB8BF";

            x.beginPath();

            x.arc(
                q.x,
                q.y,
                q.r,
                0,
                7
            );

            x.fill();

        });


        if (!reduce) {

            requestAnimationFrame(loop);

        }

    })();

}


/* =========================================================
   INTRO
========================================================= */

function initIntro() {

    const show = (id, d) =>

        gsap.to(
            id,
            {

                opacity: 1,

                filter: "blur(0px)",

                duration: 2,

                delay: d

            }
        );


    show(
        "#i1",
        0.6
    );


    gsap.to(
        "#i1",
        {

            opacity: 0,

            duration: 1,

            delay: 3

        }
    );


    show(
        "#i2",
        4.2
    );


    show(
        "#i3",
        7.5
    );


    gsap.to(
        "#startBtn",
        {

            opacity: 1,

            duration: 1.5,

            delay: 9.5

        }
    );


    $("#startBtn").addEventListener(
        "click",
        () => {

            gsap.to(
                "#intro",
                {

                    opacity: 0,

                    scale: 1.15,

                    filter: "blur(20px)",

                    duration: 1.6,

                    ease: "power2.inOut",

                    onComplete: () => {

                        $("#intro").remove();

                        document
                            .body
                            .classList
                            .remove("locked");

                        startMusic();

                        heroIn();

                        ScrollTrigger.refresh();

                    }

                }
            );

        }
    );

}


/* =========================================================
   ANIMAÇÃO DA HERO
========================================================= */

function heroIn() {

    gsap.from(
        ".hero-txt > *",
        {

            y: 50,

            opacity: 0,

            filter: "blur(12px)",

            stagger: 0.35,

            duration: 1.8,

            ease: "power3.out"

        }
    );

}


/* =========================================================
   SCROLL SUAVE
========================================================= */

function initSmoothScroll() {

    if (
        !window.Lenis ||
        reduce
    ) return;


    lenis = new Lenis({

        lerp: 0.09

    });


    lenis.on(
        "scroll",
        ScrollTrigger.update
    );


    gsap.ticker.add(
        t => lenis.raf(t * 1000)
    );


    gsap.ticker.lagSmoothing(0);

}


/* =========================================================
   HERO / FOTO PRINCIPAL
========================================================= */

function initHero() {

    $(".hero-img").innerHTML =
        photo(
            FOTOS.capa,
            "Gabriel e Amanda"
        );


    gsap.to(
        ".hero-img",
        {

            scale: 1.12,

            duration: 30,

            ease: "none",

            yoyo: true,

            repeat: -1

        }
    );


    gsap.to(
        ".hero-img",
        {

            yPercent: 12,

            scale: 1.25,

            scrollTrigger: {

                trigger: "#hero",

                start: "top top",

                end: "bottom top",

                scrub: true

            }

        }
    );


    gsap.to(
        ".hero-txt",
        {

            opacity: 0,

            y: -80,

            scrollTrigger: {

                trigger: "#hero",

                start: "top top",

                end: "70% top",

                scrub: true

            }

        }
    );

}


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function initScrollAnimations() {

    const tl = gsap.timeline({

        scrollTrigger: {

            trigger: "#phrases",

            start: "top top",

            end: "+=250%",

            pin: true,

            scrub: 1

        }

    });


    $$(".ph-l").forEach(l =>

        tl.fromTo(
            l,
            {

                opacity: 0.08,

                y: 40,

                filter: "blur(14px)"

            },

            {

                opacity: 1,

                y: 0,

                filter: "blur(0px)",

                duration: 1

            }
        )

    );


    tl.to(
        {},
        {

            duration: 0.6

        }
    );


    /* SE VOCÊ ESTÁ LENDO */

    $$(".r-l, .r-end").forEach(l =>

        gsap.to(
            l,
            {

                clipPath:
                    "inset(0 0% 0 0)",

                ease: "none",

                scrollTrigger: {

                    trigger: l,

                    start: "top 85%",

                    end: "top 50%",

                    scrub: true

                }

            }
        )

    );


    gsap.to(
        ".r-sig",
        {

            opacity: 1,

            scrollTrigger: {

                trigger: ".r-sig",

                start: "top 90%",

                end: "top 70%",

                scrub: true

            }

        }
    );


    /* FUTURO */

    const box = $("#futBox");


    FUTURE.forEach(
        (t, i) => {

            const s =
                document.createElement("span");


            s.textContent = t;


            s.style.left =
                (
                    8 +
                    (i * 37) % 62
                ) + "%";


            s.style.top =
                (i * 15) + "%";


            box.append(s);


            gsap.fromTo(
                s,

                {

                    opacity: 0,

                    y: 60,

                    filter: "blur(8px)"

                },

                {

                    opacity: 1,

                    y: 0,

                    filter: "blur(0px)",

                    scrollTrigger: {

                        trigger: s,

                        start: "top 90%",

                        end: "top 60%",

                        scrub: true

                    }

                }
            );

        }
    );

}


/* =========================================================
   CARROSSEL 3D
========================================================= */

function initCarousel() {

    const st = $("#carStage");

    let cur = 0;

    let mx = 0;


    /*
    Agora o número de slides depende automaticamente
    da quantidade de fotos dentro de FOTOS.carrossel.
    */

    const slides =
        FOTOS.carrossel.map(
            (arquivo, i) => {

                const d =
                    document.createElement("div");


                d.className =
                    "slide ph";


                d.innerHTML =

                    photo(
                        arquivo,
                        `Foto do carrossel ${i + 1}`
                    )

                    +

                    `
                    <div class="cap">
                        ${
                            CAPTIONS[
                                i %
                                CAPTIONS.length
                            ]
                        }
                    </div>
                    `;


                st.append(d);


                return d;

            }
        );


    const render = () => {

        slides.forEach(
            (s, i) => {

                let o =
                    i - cur;


                const n =
                    slides.length;


                if (
                    o >
                    n / 2
                ) {

                    o -= n;

                }


                if (
                    o <
                    -n / 2
                ) {

                    o += n;

                }


                const a =
                    Math.abs(o);


                s.style.transform = `
                    translateX(${o * 62}%)
                    translateZ(${-a * 120}px)
                    rotateY(${-o * 28}deg)
                    scale(${1 - a * 0.08})
                `;


                s.style.opacity =
                    a > 2
                        ? 0
                        : 1 - a * 0.25;


                s.style.zIndex =
                    10 - a;


                s.style.pointerEvents =
                    a > 2
                        ? "none"
                        : "auto";

            }
        );

    };


    const go = d => {

        if (!slides.length) return;


        cur =
            (
                cur +
                d +
                slides.length
            ) %
            slides.length;


        render();

    };


    $("#next").onclick =
        () => go(1);


    $("#prev").onclick =
        () => go(-1);


    st.addEventListener(
        "pointerdown",
        e => {

            mx = e.clientX;

        }
    );


    st.addEventListener(
        "pointerup",
        e => {

            const d =
                e.clientX - mx;


            if (
                Math.abs(d) >
                40
            ) {

                go(
                    d < 0
                        ? 1
                        : -1
                );

            }

        }
    );


    addEventListener(
        "keydown",
        e => {

            if (
                e.key ===
                    "ArrowRight" &&

                e.target ===
                    document.body
            ) {

                go(1);

            }

        }
    );


    slides.forEach(
        s => {

            s.addEventListener(
                "mousemove",
                e => {

                    const r =
                        s.getBoundingClientRect();


                    const x =
                        (
                            e.clientX -
                            r.left
                        ) /
                        r.width -
                        0.5;


                    const y =
                        (
                            e.clientY -
                            r.top
                        ) /
                        r.height -
                        0.5;


                    const img =
                        s.querySelector("img");


                    if (img) {

                        img.style.transform = `
                            scale(1.07)
                            translate(
                                ${x * -14}px,
                                ${y * -14}px
                            )
                        `;

                    }

                }
            );


            s.addEventListener(
                "mouseleave",
                () => {

                    const img =
                        s.querySelector("img");


                    if (img) {

                        img.style.transform =
                            "";

                    }

                }
            );

        }
    );


    render();

}


/* =========================================================
   TIMELINE
========================================================= */

function initTimeline() {

    const L =
        $("#tlList");


    const fx = [

        {
            x: -80
        },

        {
            clipPath:
                "inset(100% 0 0 0)"
        },

        {
            scale: 0.7,

            filter:
                "blur(14px)"
        },

        {
            x: 80,

            rotate: 4
        }

    ];


    TIMELINE.forEach(
        (t, i) => {

            const el =
                document.createElement(
                    "div"
                );


            el.className =
                "tl-i";


            /*
            Cada item pega exatamente
            a foto correspondente da timeline.
            */

            const timelinePhoto =
                FOTOS.timeline[i];


            el.innerHTML = `

                <div class="tl-t">

                    <div class="tl-n">
                        ${t[0]}
                    </div>

                    <h3>
                        ${t[1]}
                    </h3>

                    <p>
                        “${t[2]}”
                    </p>

                </div>


                <div class="tl-p ph">

                    ${
                        photo(
                            timelinePhoto,
                            `Momento ${i + 1}`
                        )
                    }

                </div>

            `;


            L.append(el);


            const efeito =
                fx[
                    i %
                    fx.length
                ];


            gsap.from(
                $(".tl-p", el),
                {

                    ...efeito,

                    opacity: 0,

                    duration: 1.4,

                    ease:
                        "power3.out",

                    clipPath:
                        efeito.clipPath ||
                        "inset(0 0 0 0)",

                    scrollTrigger: {

                        trigger: el,

                        start:
                            "top 75%"

                    }

                }
            );


            gsap.from(
                $(".tl-t", el),
                {

                    y: 40,

                    opacity: 0,

                    duration: 1.2,

                    scrollTrigger: {

                        trigger: el,

                        start:
                            "top 75%"

                    }

                }
            );

        }
    );

}


/* =========================================================
   GALERIA HORIZONTAL
========================================================= */

function initHorizontalGallery() {

    const tr =
        $("#hTrack");


    QUOTES.forEach(
        (q, i) => {

            const c =
                document.createElement(
                    "div"
                );


            c.className =
                "h-card ph";


            const arquivo =
                FOTOS.horizontal[i];


            c.innerHTML = `

                ${
                    photo(
                        arquivo,
                        `Foto horizontal ${i + 1}`
                    )
                }

                <span>
                    ${String(i + 1).padStart(
                        2,
                        "0"
                    )}
                </span>

                <p>
                    ${q}
                </p>

            `;


            tr.append(c);

        }
    );


    const dist = () =>
        tr.scrollWidth -
        innerWidth;


    const tw =
        gsap.to(
            tr,
            {

                x: () =>
                    -dist(),

                ease: "none",

                scrollTrigger: {

                    trigger:
                        "#hgal",

                    pin: true,

                    scrub: 1,

                    end: () =>
                        "+=" +
                        dist(),

                    invalidateOnRefresh:
                        true

                }

            }
        );


    $$(".h-card img").forEach(
        im =>

            gsap.to(
                im,
                {

                    xPercent: -8,

                    ease: "none",

                    scrollTrigger: {

                        trigger:
                            im.parentElement,

                        containerAnimation:
                            tw,

                        start:
                            "left right",

                        end:
                            "right left",

                        scrub:
                            true

                    }

                }
            )

    );

}


/* =========================================================
   POLAROIDS ARRASTÁVEIS
========================================================= */

function initPolaroids() {

    const T =
        $("#polaTable");


    let z = 10;


    POLA_TXT.forEach(
        (t, i) => {

            const p =
                document.createElement(
                    "div"
                );


            p.className =
                "pola";


            p.style.zIndex =
                i;


            const arquivo =
                FOTOS.polaroids[i];


            p.innerHTML = `

                <div class="ph">

                    ${
                        photo(
                            arquivo,
                            `Polaroid ${i + 1}`
                        )
                    }

                </div>

                <p>
                    ${t}
                </p>

            `;


            p.style.left =
                (
                    6 +
                    i * 17
                ) +
                "%";


            p.style.top =
                (
                    8 +
                    (i % 2) *
                    28 +
                    i * 3
                ) +
                "%";


            p.style.transform =
                `
                rotate(
                    ${
                        (i - 2) *
                        6
                    }deg
                )
                `;


            T.append(p);


            let sx;

            let sy;

            let ox;

            let oy;


            p.addEventListener(
                "pointerdown",
                e => {

                    p.setPointerCapture(
                        e.pointerId
                    );


                    p.classList.add(
                        "drag"
                    );


                    p.style.zIndex =
                        ++z;


                    sx =
                        e.clientX;


                    sy =
                        e.clientY;


                    ox =
                        p.offsetLeft;


                    oy =
                        p.offsetTop;

                }
            );


            p.addEventListener(
                "pointermove",
                e => {

                    if (
                        !p.classList.contains(
                            "drag"
                        )
                    ) {

                        return;

                    }


                    const L =
                        Math.max(
                            0,
                            Math.min(
                                T.clientWidth -
                                p.offsetWidth,

                                ox +
                                e.clientX -
                                sx
                            )
                        );


                    const Tp =
                        Math.max(
                            0,
                            Math.min(
                                T.clientHeight -
                                p.offsetHeight,

                                oy +
                                e.clientY -
                                sy
                            )
                        );


                    p.style.left =
                        L + "px";


                    p.style.top =
                        Tp + "px";

                }
            );


            [
                "pointerup",
                "pointercancel"
            ].forEach(
                ev =>

                    p.addEventListener(
                        ev,
                        () =>

                            p.classList.remove(
                                "drag"
                            )
                    )

            );

        }
    );


    gsap.from(
        ".pola",
        {

            y: 120,

            opacity: 0,

            rotate: 0,

            stagger: 0.15,

            duration: 1.2,

            scrollTrigger: {

                trigger: T,

                start:
                    "top 70%"

            }

        }
    );

}


/* =========================================================
   10 COISAS - CARTAS FLIP
========================================================= */

function initLoveCards() {

    const g =
        $("#loveGrid");


    LOVES.forEach(
        (l, i) => {

            const b =
                document.createElement(
                    "button"
                );


            b.className =
                "flip";


            b.setAttribute(
                "aria-label",
                `Virar carta ${i + 1}`
            );


            b.innerHTML = `

                <div class="flip-in">

                    <div class="face f">

                        ${
                            String(
                                i + 1
                            ).padStart(
                                2,
                                "0"
                            )
                        }

                    </div>


                    <div class="face b">

                        <h3>
                            ${l[0]}
                        </h3>

                        <p>
                            ${l[1]}
                        </p>

                    </div>

                </div>

            `;


            b.onclick = () =>

                b.classList.toggle(
                    "on"
                );


            g.append(b);

        }
    );


    gsap.from(
        ".flip",
        {

            y: 60,

            opacity: 0,

            stagger: 0.07,

            duration: 1,

            scrollTrigger: {

                trigger: g,

                start:
                    "top 80%"

            }

        }
    );

}


/* =========================================================
   CONTADOR DO RELACIONAMENTO
========================================================= */

function initRelationshipCounter() {

    const tick = () => {

        const d =
            Math.max(
                0,
                Date.now() -
                relationshipStart.getTime()
            );


        $("#cD").textContent =
            Math.floor(
                d / 864e5
            );


        $("#cH").textContent =
            Math.floor(
                d / 36e5
            ) % 24;


        $("#cM").textContent =
            Math.floor(
                d / 6e4
            ) % 60;


        $("#cS").textContent =
            Math.floor(
                d / 1e3
            ) % 60;

    };


    tick();


    setInterval(
        tick,
        1000
    );

}


/* =========================================================
   CARTA
========================================================= */

function initLetter() {

    $("#openLetter").onclick =
        e => {

            const env =
                $("#env");


            const open =
                env.classList.toggle(
                    "open"
                );


            e.currentTarget.textContent =
                open
                    ? "Fechar carta"
                    : "Abrir carta";


            if (open) {

                setTimeout(
                    () =>

                        env.scrollIntoView(
                            {

                                behavior:
                                    "smooth",

                                block:
                                    "center"

                            }
                        ),

                    100
                );

            }

        };

}


/* =========================================================
   SURPRESA
========================================================= */

function initSurprise() {

    const ov =
        $("#surpOverlay");


    let timer;


    $("#surpBtn").onclick =
        async () => {

            ov.hidden =
                false;


            if (lenis) {

                lenis.stop();

            }


            $$(".s-box p").forEach(
                p =>

                    p.classList.remove(
                        "show"
                    )
            );


            timer =
                setInterval(
                    () => {

                        const h =
                            document.createElement(
                                "span"
                            );


                        h.className =
                            "fl";


                        h.textContent =
                            "♥";


                        h.style.left =
                            Math.random() *
                            100 +
                            "%";


                        h.style.fontSize =
                            (
                                10 +
                                Math.random() *
                                18
                            ) +
                            "px";


                        h.style.animationDuration =
                            (
                                5 +
                                Math.random() *
                                5
                            ) +
                            "s";


                        ov.append(h);


                        setTimeout(
                            () =>
                                h.remove(),

                            10000
                        );

                    },

                    450
                );


            for (
                const s of
                [
                    ".s-1",
                    ".s-2",
                    ".s-3",
                    ".s-4",
                    ".s-5"
                ]
            ) {

                await wait(
                    1800
                );


                if (
                    ov.hidden
                ) {

                    return;

                }


                $(s).classList.add(
                    "show"
                );

            }

        };


    $("#surpClose").onclick =
        () => {

            ov.hidden =
                true;


            clearInterval(
                timer
            );


            $$(".fl").forEach(
                f =>
                    f.remove()
            );


            if (lenis) {

                lenis.start();

            }

        };

}


/* =========================================================
   MÚSICA
========================================================= */

function startMusic() {

    const a =
        $("#bgm");


    if (!a) return;


    a.volume =
        0.25;


    a.play()
        .then(
            () =>

                $("#musicBtn")
                    .classList
                    .add(
                        "play"
                    )
        )

        .catch(
            () => {}
        );

}


function initMusic() {

    const a =
        $("#bgm");


    const b =
        $("#musicBtn");


    if (
        !a ||
        !b
    ) {

        return;

    }


    b.onclick =
        () => {

            if (
                a.paused
            ) {

                a.volume =
                    0.25;


                a.play()
                    .catch(
                        () =>

                            toast(
                                "Adicione o arquivo da música."
                            )
                    );


                b.classList.add(
                    "play"
                );

            }

            else {

                a.pause();


                b.classList.remove(
                    "play"
                );

            }

        };

}


/* =========================================================
   CURSOR
========================================================= */

function initCursor() {

    if (!fine) {

        return;

    }


    document.body.classList.add(
        "cursor-on"
    );


    const d =
        $("#cur-dot");


    const r =
        $("#cur-ring");


    let mx = 0;

    let my = 0;

    let rx = 0;

    let ry = 0;


    addEventListener(
        "mousemove",
        e => {

            mx =
                e.clientX;


            my =
                e.clientY;


            d.style.transform =
                `
                translate(
                    ${mx}px,
                    ${my}px
                )
                `;

        }
    );


    (function loop() {

        rx +=
            (mx - rx) *
            0.15;


        ry +=
            (my - ry) *
            0.15;


        r.style.transform =
            `
            translate(
                ${rx}px,
                ${ry}px
            )
            `;


        requestAnimationFrame(
            loop
        );

    })();


    document.addEventListener(
        "mouseover",
        e => {

            r.classList.toggle(

                "hov",

                !!e.target.closest(
                    "button,a,.slide,.pola,.flip,img,[role=button]"
                )

            );

        }
    );

}


/* =========================================================
   EFEITOS DO MOUSE
========================================================= */

function initMouseEffects() {

    if (!fine) {

        return;

    }


    $$(".btn").forEach(
        b => {

            b.addEventListener(
                "mousemove",
                e => {

                    const r =
                        b.getBoundingClientRect();


                    b.style.transform =
                        `
                        translate(
                            ${
                                (
                                    e.clientX -
                                    r.left -
                                    r.width /
                                    2
                                ) *
                                0.25
                            }px,

                            ${
                                (
                                    e.clientY -
                                    r.top -
                                    r.height /
                                    2
                                ) *
                                0.35
                            }px
                        )
                        `;

                }
            );


            b.addEventListener(
                "mouseleave",
                () => {

                    b.style.transform =
                        "";

                }
            );

        }
    );


    $("#hero").addEventListener(
        "mousemove",
        e => {

            gsap.to(
                ".hero-txt",
                {

                    x:
                        (
                            e.clientX /
                            innerWidth -
                            0.5
                        ) *
                        20,

                    y:
                        (
                            e.clientY /
                            innerHeight -
                            0.5
                        ) *
                        12,

                    duration:
                        1

                }
            );

        }
    );

}


/* =========================================================
   MODO SAUDADE
========================================================= */

function initMissingMode() {

    const box =
        $("#missBox");


    const full =
        $("#missFull");


    $("#missBtn").onclick =
        () => {

            const on =
                document.body
                    .classList
                    .toggle(
                        "miss"
                    );


            box.hidden =
                !on;

        };


    $("#missYes").onclick =
        () => {

            /*
            Escolhe aleatoriamente UMA DAS FOTOS
            que você colocou dentro de FOTOS.saudade
            */

            if (
                !FOTOS.saudade.length
            ) {

                toast(
                    "Adicione fotos ao modo saudade."
                );

                return;

            }


            const arquivo =

                FOTOS.saudade[

                    Math.floor(

                        Math.random() *
                        FOTOS.saudade.length

                    )

                ];


            $("#missImg").innerHTML =

                photo(
                    arquivo,
                    "Uma lembrança nossa"
                );


            $("#missTxt").textContent =

                MISS_TXT[

                    Math.floor(

                        Math.random() *
                        MISS_TXT.length

                    )

                ];


            full.hidden =
                false;


            box.hidden =
                true;

        };


    $("#missClose").onclick =
        () => {

            full.hidden =
                true;


            document.body
                .classList
                .remove(
                    "miss"
                );

        };

}


/* =========================================================
   EASTER EGGS
========================================================= */

function initEasterEggs() {

    let clicks =
        0;


    const ga =
        $("#ga");


    const hit =
        async () => {

            clicks++;


            if (
                clicks ===
                5
            ) {

                clicks =
                    0;


                toast(
                    "Você descobriu um segredo…",
                    2500
                );


                await wait(
                    2800
                );


                toast(
                    "Gabriel é completamente apaixonado por você."
                );

            }

        };


    ga.onclick =
        hit;


    ga.onkeydown =
        e => {

            if (
                e.key ===
                "Enter"
            ) {

                hit();

            }

        };


    let buf =
        "";


    addEventListener(
        "keydown",
        e => {

            buf =
                (
                    buf +
                    e.key.toUpperCase()
                ).slice(
                    -6
                );


            if (
                buf ===
                "AMANDA"
            ) {

                toast(
                    "Minha pessoa favorita ♥",
                    4000
                );


                for (
                    let i = 0;
                    i < 14;
                    i++
                ) {

                    const h =
                        document.createElement(
                            "span"
                        );


                    h.className =
                        "fl";


                    h.style.cssText = `

                        position:fixed;

                        z-index:250;

                        left:${
                            Math.random() *
                            100
                        }%;

                        font-size:${
                            14 +
                            Math.random() *
                            20
                        }px;

                        animation-duration:${
                            3 +
                            Math.random() *
                            3
                        }s;

                    `;


                    h.textContent =
                        "♥";


                    document.body.append(
                        h
                    );


                    setTimeout(
                        () =>
                            h.remove(),

                        6500
                    );

                }

            }

        }
    );


    $("#hiddenHeart").onclick =
        () =>

            toast(
                "PS: você continua sendo a coisa mais bonita desse site.",
                5000
            );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        gsap.registerPlugin(
            ScrollTrigger
        );


        initParticles();

        initSmoothScroll();

        initIntro();

        initHero();

        initScrollAnimations();

        initCarousel();

        initTimeline();

        initHorizontalGallery();

        initPolaroids();

        initLoveCards();

        initRelationshipCounter();

        initLetter();

        initSurprise();

        initMusic();

        initCursor();

        initMouseEffects();

        initMissingMode();

        initEasterEggs();

    }
);
