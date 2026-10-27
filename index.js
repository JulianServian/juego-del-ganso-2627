const formularioJugadores = document.querySelector("#formularioJugadores");
const nombreJugadorA = document.querySelector("#nombreJugadorA");
const nombreJugadorB = document.querySelector("#nombreJugadorB");
const botonDadoA = document.querySelector("#botoDauA");
const botonDadoB = document.querySelector("#botoDauB");
const infoTurno = document.querySelector("#infoTorn");
const resultadoDado = document.querySelector("#resultadoDado");
const infoJugadores = document.querySelector("#infoJugadores");
const tablero = document.querySelector("#tablero");
const fichaA = document.querySelector("#fichaA");
const fichaB = document.querySelector("#fichaB");
const panelPregunta = document.querySelector("#panelPregunta");
const enunciatPregunta = document.querySelector("#enunciatPregunta");
const opcionesContenedor = document.querySelector("#opcionsContenidor");
const resultadoPregunta = document.querySelector("#resultadoPregunta");
const botonContinuarPregunta = document.querySelector("#continuarPregunta");

const caselles = [
    [20.8, 79.7], [22.5, 65.4], [23.7, 53.1], [24.3, 41.6], [25.3, 30], [31.4, 22.6],
    [38.8, 21.2], [46.1, 21.7], [53.7, 21.9], [61.5, 22.2], [69, 22.6], [78.7, 23.8],
    [82.7, 34.6], [81.5, 45.9], [83, 59.1], [83.2, 72.5], [73.7, 76.7], [63.3, 75.8],
    [53.6, 75.3], [44, 75.3], [35.4, 64.8], [36.6, 53.1], [37.4, 42.3], [44.5, 32.8],
    [53.7, 33.9], [61.9, 34.9], [70.7, 36], [71.7, 47.3], [72.4, 59.4], [63.4, 60.3],
    [55.5, 60.5], [47.1, 60], [39.5, 60.7], [44.7, 49], [52.5, 49], [61.2, 49]
];

class Jugador {
    constructor(nombre, ficha, desplazamiento) {
        this.nombre = nombre;
        this.posicion = 0;
        this.ficha = ficha;
        this.desplazamiento = desplazamiento;
        this.pierdeTurno = false;
    }

    mover(caselles) {
        const x = caselles[this.posicion][0];
        const y = caselles[this.posicion][1];

        this.ficha.style.left = `${x}%`;
        this.ficha.style.top = `${y}%`;
        this.ficha.style.transform = `translate(calc(-50% + ${this.desplazamiento}px), -50%)`;
    }
}

const jugadores = [
    new Jugador("Jugador A", fichaA, -5),
    new Jugador("Jugador B", fichaB, 5)
];

const preguntes = [
    {
        pregunta: "¿Cuál es la capital de Cataluña?",
        respostes: ["Girona", "Lleida", "Barcelona", "Tarragona"],
        correcta: 2
    },
    {
        pregunta: "¿Cuántos días tiene un año bisiesto?",
        respostes: ["365", "366", "364", "360"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respostes: ["Marte", "Venus", "Júpiter", "Saturno"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje se utiliza para añadir interactividad a las páginas web?",
        respostes: ["HTML", "CSS", "Python", "JavaScript"],
        correcta: 3
    },
    {
        pregunta: "¿Cuánto es 8 x 7?",
        respostes: ["54", "56", "64", "49"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        respostes: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correcta: 3
    },
    {
        pregunta: "¿Cuántos continentes hay en el modelo de seis continentes?",
        respostes: ["4", "5", "6", "7"],
        correcta: 2
    },
    {
        pregunta: "¿Qué animal es conocido como el rey de la selva?",
        respostes: ["Tigre", "León", "Elefante", "Leopardo"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el resultado de 15 + 27?",
        respostes: ["32", "40", "42", "45"],
        correcta: 2
    },
    {
        pregunta: "¿Quién escribió Don Quijote de la Mancha?",
        respostes: ["Federico García Lorca", "Miguel de Cervantes", "Lope de Vega", "Francisco de Quevedo"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el satélite natural de la Tierra?",
        respostes: ["Marte", "El Sol", "La Luna", "Venus"],
        correcta: 2
    },
    {
        pregunta: "¿Qué gas necesitan las personas para respirar?",
        respostes: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Helio"],
        correcta: 1
    },
    {
        pregunta: "¿Cuántas patas tiene una araña?",
        respostes: ["6", "8", "10", "12"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el idioma más hablado en Brasil?",
        respostes: ["Español", "Inglés", "Portugués", "Francés"],
        correcta: 2
    },
    {
        pregunta: "¿Cuánto es 100 dividido entre 4?",
        respostes: ["20", "25", "40", "50"],
        correcta: 1
    },
    {
        pregunta: "¿Qué órgano bombea la sangre por el cuerpo?",
        respostes: ["Pulmón", "Cerebro", "Hígado", "Corazón"],
        correcta: 3
    },
    {
        pregunta: "¿En qué país se encuentra la Torre Eiffel?",
        respostes: ["Italia", "Francia", "Alemania", "España"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el metal cuyo símbolo químico es Au?",
        respostes: ["Plata", "Cobre", "Oro", "Hierro"],
        correcta: 2
    },
    {
        pregunta: "¿Cuántos minutos tiene una hora?",
        respostes: ["30", "45", "60", "100"],
        correcta: 2
    },
    {
        pregunta: "¿Qué instrumento se utiliza para medir la temperatura?",
        respostes: ["Barómetro", "Termómetro", "Cronómetro", "Brújula"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el resultado de 9 al cuadrado?",
        respostes: ["18", "72", "81", "99"],
        correcta: 2
    },
    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        respostes: ["Venus", "Marte", "Mercurio", "Neptuno"],
        correcta: 1
    },
    {
        pregunta: "¿En qué continente se encuentra Egipto?",
        respostes: ["Europa", "Asia", "África", "América"],
        correcta: 2
    },
    {
        pregunta: "¿Qué parte de la planta absorbe el agua del suelo?",
        respostes: ["Las hojas", "Las flores", "El tallo", "Las raíces"],
        correcta: 3
    },
    {
        pregunta: "¿Cuál es el resultado de 50 - 18?",
        respostes: ["28", "32", "38", "42"],
        correcta: 1
    },
    {
        pregunta: "¿Qué significan las siglas HTML?",
        respostes: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Home Tool Markup Language",
            "Hyper Transfer Main Language"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué etiqueta HTML se utiliza para crear un enlace?",
        respostes: ["<p>", "<img>", "<a>", "<h1>"],
        correcta: 2
    },
    {
        pregunta: "¿Qué propiedad CSS cambia el color del texto?",
        respostes: ["background-color", "font-size", "color", "text-style"],
        correcta: 2
    },
    {
        pregunta: "¿Qué símbolo se utiliza para declarar una variable con let en JavaScript?",
        respostes: ["let", "#", "$", "var"],
        correcta: 0
    },
    {
        pregunta: "¿Qué método permite seleccionar un elemento mediante un selector CSS?",
        respostes: ["getElement()", "querySelector()", "selectHTML()", "findElement()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué propiedad permite cambiar el contenido HTML de un elemento?",
        respostes: ["innerHTML", "styleCSS", "valueHTML", "querySelector"],
        correcta: 0
    },
    {
        pregunta: "¿Qué estructura permite repetir instrucciones mientras se cumple una condición?",
        respostes: ["if", "switch", "while", "return"],
        correcta: 2
    },
    {
        pregunta: "¿Qué método convierte una cadena de texto en un número entero?",
        respostes: ["parseInt()", "toString()", "isNaN()", "toUpperCase()"],
        correcta: 0
    },
    {
        pregunta: "¿Qué operador compara valor y tipo en JavaScript?",
        respostes: ["=", "==", "===", "!="],
        correcta: 2
    },
    {
        pregunta: "¿Qué método añade un elemento al final de un array?",
        respostes: ["pop()", "push()", "shift()", "slice()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué evento se ejecuta cuando el usuario hace clic en un elemento?",
        respostes: ["onchange", "onmouseover", "onclick", "onload"],
        correcta: 2
    }
];

const casellesEspecials = [
    { casilla: 1, tipo: "avanza", destino: 20 },
    { casilla: 4, tipo: "pierdeTurno" },
    { casilla: 6, tipo: "avanza", destino: 10 },
    { casilla: 11, tipo: "inicio" },
    { casilla: 13, tipo: "avanza", destino: 28 },
    { casilla: 17, tipo: "pierdeTurno" },
    { casilla: 21, tipo: "avanza", destino: 23 },
    { casilla: 24, tipo: "avanza", destino: 8 },
    { casilla: 29, tipo: "avanza", destino: 26 },
    { casilla: 30, tipo: "repiteTurno" },
    { casilla: 32, tipo: "avanza", destino: 19 }
];

let turno = 0;
let partidaTerminada = false;
let respuestaPendiente = false;
let respuestaRespondida = false;
let tiradaEnCurso = false;
let partidaActual = 0;

function renderitzarTauler() {
    for (let i = 0; i < jugadores.length; i++) {
        jugadores[i].mover(caselles);
    }
}

function mostrarEstado() {
    let html = "";

    for (let i = 0; i < jugadores.length; i++) {
        html += `<p>${jugadores[i].nombre}: casilla ${jugadores[i].posicion + 1} de ${caselles.length}</p>`;
    }

    infoJugadores.innerHTML = html;

    if (partidaTerminada) {
        infoTurno.innerHTML = `${jugadores[turno].nombre} ha ganado.`;
    } else {
        infoTurno.innerHTML = `Turno de ${jugadores[turno].nombre}`;
    }

    botonDadoA.disabled = partidaTerminada || respuestaPendiente || tiradaEnCurso || turno !== 0;
    botonDadoB.disabled = partidaTerminada || respuestaPendiente || tiradaEnCurso || turno !== 1;
}

function iniciarPartida(event) {
    event.preventDefault();

    partidaActual++;
    tiradaEnCurso = false;
    jugadores[0].nombre = nombreJugadorA.value || "Jugador A";
    jugadores[1].nombre = nombreJugadorB.value || "Jugador B";
    jugadores[0].posicion = 0;
    jugadores[1].posicion = 0;
    jugadores[0].pierdeTurno = false;
    jugadores[1].pierdeTurno = false;
    turno = 0;
    partidaTerminada = false;
    respuestaPendiente = false;
    respuestaRespondida = false;
    if (panelPregunta.open) {
        panelPregunta.close();
    }
    resultadoPregunta.innerHTML = "";
    resultadoDado.innerHTML = "Pulsa el botón del jugador en turno para tirar.";
    renderitzarTauler();
    mostrarEstado();
}

function mostrarPregunta(jugador) {
    const pregunta = preguntes[jugador.posicion % preguntes.length];
    enunciatPregunta.innerHTML =
        `Casilla ${jugador.posicion + 1}: ${pregunta.pregunta}`;
    resultadoPregunta.innerHTML = "";
    botonContinuarPregunta.classList.add("oculto");
    respuestaPendiente = true;
    respuestaRespondida = false;

    const botonesRespuesta = opcionesContenedor.querySelectorAll("button");
    for (let i = 0; i < pregunta.respostes.length; i++) {
        const botonRespuesta = botonesRespuesta[i];
        botonRespuesta.textContent = pregunta.respostes[i];
        botonRespuesta.disabled = false;
        botonRespuesta.onclick = () => comprobarRespuesta(i, pregunta, jugador);
    }

    panelPregunta.showModal();
}

function cambiarTurno() {
    if (turno === 0) {
        turno = 1;
    } else {
        turno = 0;
    }

    if (jugadores[turno].pierdeTurno) {
        jugadores[turno].pierdeTurno = false;
        resultadoDado.innerHTML += ` ${jugadores[turno].nombre} pierde este turno.`;

        if (turno === 0) {
            turno = 1;
        } else {
            turno = 0;
        }
    }
}

function comprobarCaptura(jugador) {
    if (jugador.posicion === 0) {
        return "";
    }

    const otroJugador = jugadores[turno === 0 ? 1 : 0];

    if (jugador.posicion === otroJugador.posicion) {
        otroJugador.posicion = 0;
        return `${otroJugador.nombre} ha sido capturado y vuelve a la salida.`;
    }

    return "";
}

function comprobarRespuesta(indice, pregunta, jugador) {
    if (!respuestaPendiente || respuestaRespondida) {
        return;
    }

    respuestaRespondida = true;
    opcionesContenedor.querySelectorAll("button").forEach((botonRespuesta) => {
        botonRespuesta.disabled = true;
    });

    if (indice === pregunta.correcta) {
        resultadoPregunta.innerHTML = "¡Correcto!";
    } else {
        resultadoPregunta.innerHTML =
            `Incorrecto. La respuesta correcta era: ${pregunta.respostes[pregunta.correcta]}.`;
        jugador.posicion--;

        if (jugador.posicion < 0) {
            jugador.posicion = 0;
        }

        const mensajeCaptura = comprobarCaptura(jugador);
        if (mensajeCaptura !== "") {
            resultadoDado.innerHTML = mensajeCaptura;
        }
    }
    botonContinuarPregunta.classList.remove("oculto");
}

function continuarPartida(jugador) {
    if (!respuestaPendiente || !respuestaRespondida) {
        return;
    }

    respuestaPendiente = false;
    respuestaRespondida = false;
    panelPregunta.close();

    if (jugador.posicion === caselles.length - 1) {
        partidaTerminada = true;
        renderitzarTauler();
        mostrarEstado();
        return;
    }

    cambiarTurno();
    renderitzarTauler();
    mostrarEstado();
}

async function tirarDado(indiceJugador) {
    if (partidaTerminada || respuestaPendiente || tiradaEnCurso || turno !== indiceJugador) {
        return;
    }

    const jugador = jugadores[indiceJugador];
    const dado = Math.floor(Math.random() * 6) + 1;
    const partidaDeLaTirada = partidaActual;
    tiradaEnCurso = true;
    resultadoDado.textContent = `${jugador.nombre}: ha salido el ${dado}.`;
    mostrarEstado();

    await new Promise((resolve) => setTimeout(resolve, 900));
    if (partidaDeLaTirada !== partidaActual) {
        return;
    }

    tiradaEnCurso = false;
    jugador.posicion += dado;

    if (jugador.posicion > caselles.length - 1) {
        jugador.posicion = caselles.length - 1;
    }

    let mensaje = `${jugador.nombre} ha sacado un ${dado} y avanza a la casilla ${jugador.posicion + 1}.`;
    let casillaEspecial = null;

    for (let i = 0; i < casellesEspecials.length; i++) {
        if (casellesEspecials[i].casilla === jugador.posicion) {
            casillaEspecial = casellesEspecials[i];
        }
    }

    if (casillaEspecial !== null) {
        if (casillaEspecial.tipo === "avanza") {
            jugador.posicion = casillaEspecial.destino;
            mensaje += ` Avanza a la casilla ${jugador.posicion + 1}.`;
        } else if (casillaEspecial.tipo === "inicio") {
            jugador.posicion = 0;
            mensaje += " Vuelve a la salida.";
        } else if (casillaEspecial.tipo === "pierdeTurno") {
            jugador.pierdeTurno = true;
            mensaje += " Pierde su próximo turno.";
        } else if (casillaEspecial.tipo === "repiteTurno") {
            mensaje += " Vuelve a tirar.";
        }
    }

    const mensajeCaptura = comprobarCaptura(jugador);
    if (mensajeCaptura !== "") {
        mensaje += ` ${mensajeCaptura}`;
    }

    resultadoDado.innerHTML = mensaje;
    renderitzarTauler();

    if (jugador.posicion === caselles.length - 1) {
        partidaTerminada = true;
    } else if (casillaEspecial === null) {
        mostrarPregunta(jugador);
    } else if (casillaEspecial.tipo !== "repiteTurno") {
        cambiarTurno();
    }
    mostrarEstado();
}

formularioJugadores.addEventListener("submit", iniciarPartida);
botonDadoA.addEventListener("click", () => tirarDado(0));
botonDadoB.addEventListener("click", () => tirarDado(1));
botonContinuarPregunta.addEventListener("click", () => {
    continuarPartida(jugadores[turno]);
});
panelPregunta.addEventListener("cancel", (event) => {
    event.preventDefault();
});

renderitzarTauler();
mostrarEstado();
