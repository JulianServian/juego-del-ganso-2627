// Guardo aquí los elementos de la página que necesito para controlar el juego.
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

// Guardo las coordenadas de las casillas para colocar las fichas sobre el tablero.
// En cada posición pongo primero la coordenada horizontal y después la vertical.
const caselles = [
    [20.8, 79.7], [22.5, 65.4], [23.7, 53.1], [24.3, 41.6], [25.3, 30], [31.4, 22.6],
    [38.8, 21.2], [46.1, 21.7], [53.7, 21.9], [61.5, 22.2], [69, 22.6], [78.7, 23.8],
    [82.7, 34.6], [81.5, 45.9], [83, 59.1], [83.2, 72.5], [73.7, 76.7], [63.3, 75.8],
    [53.6, 75.3], [44, 75.3], [35.4, 64.8], [36.6, 53.1], [37.4, 42.3], [44.5, 32.8],
    [53.7, 33.9], [61.9, 34.9], [70.7, 36], [71.7, 47.3], [72.4, 59.4], [63.4, 60.3],
    [55.5, 60.5], [47.1, 60], [39.5, 60.7], [44.7, 49], [52.5, 49], [61.2, 49]
];

// Coloco la ficha en el tablero según la posición actual del jugador.
function moverJugador(jugador) {
    const x = caselles[jugador.posicion][0];
    const y = caselles[jugador.posicion][1];

    jugador.ficha.style.left = `${x}%`;
    jugador.ficha.style.top = `${y}%`;
    jugador.ficha.style.transform =
        `translate(calc(-50% + ${jugador.desplazamiento}px), -50%)`;
}

// Creo los dos jugadores como objetos y separo un poco sus fichas para distinguirlas.
const jugadores = [
    {
        nombre: "Jugador A",
        posicion: 0,
        ficha: fichaA,
        desplazamiento: -5,
        pierdeTurno: false
    },
    {
        nombre: "Jugador B",
        posicion: 0,
        ficha: fichaB,
        desplazamiento: 5,
        pierdeTurno: false
    }
];

// Guardo las preguntas y marco con un índice que empieza en 0 cuál es la respuesta correcta.
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

// Aquí anoto las casillas especiales usando posiciones que empiezan en 0.
// En los mensajes muestro los números de casilla empezando en 1, como los ve el jugador.
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

// Guardo el estado de la partida para saber qué acciones puedo permitir.
let turno = 0; // Uso 0 para el jugador A y 1 para el jugador B.
let partidaTerminada = false; // Con esto bloqueo las tiradas cuando alguien gana.
let respuestaPendiente = false; // Lo pongo a true cuando hay una pregunta por responder.
let respuestaRespondida = false; // Lo uso para que no se responda dos veces la misma pregunta.
let tiradaEnCurso = false; // Lo uso para bloquear otra tirada mientras espero el resultado.
let partidaActual = 0; // Me sirve para reconocer si empezó otra partida durante una tirada.

// Coloco todas las fichas en la casilla que le corresponde a cada jugador.
function renderitzarTauler() {
    for (let i = 0; i < jugadores.length; i++) {
        moverJugador(jugadores[i]);
    }
}

// Actualizo el marcador, el turno que se muestra y los botones de los dados.
function mostrarEstado() {
    let html = ""; // Voy juntando aquí la información de los dos jugadores.

    for (let i = 0; i < jugadores.length; i++) {
        html += `<p>${jugadores[i].nombre}: casilla ${jugadores[i].posicion + 1} de ${caselles.length}</p>`;
    }

    infoJugadores.innerHTML = html;

    // Muestro quién ha ganado o a quién le toca jugar.
    if (partidaTerminada) {
        infoTurno.innerHTML = `${jugadores[turno].nombre} ha ganado.`;
    } else {
        infoTurno.innerHTML = `Turno de ${jugadores[turno].nombre}`;
    }

    // Habilito solo el dado del jugador que tiene el turno y puede tirar.
    botonDadoA.disabled = partidaTerminada || respuestaPendiente || tiradaEnCurso || turno !== 0;
    botonDadoB.disabled = partidaTerminada || respuestaPendiente || tiradaEnCurso || turno !== 1;
}

// Empiezo una partida nueva y vuelvo a poner a los jugadores en la salida.
function iniciarPartida(event) {
    event.preventDefault();

    // Cambio el número de partida para ignorar tiradas que sigan pendientes de la anterior.
    partidaActual++;
    tiradaEnCurso = false;
    // Si no escriben un nombre, pongo uno predeterminado.
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
    // Cierro la pregunta anterior si quedó abierta al empezar esta partida.
    if (panelPregunta.open) {
        panelPregunta.close();
    }
    resultadoPregunta.innerHTML = "";
    resultadoDado.innerHTML = "Pulsa el botón del jugador en turno para tirar.";
    renderitzarTauler();
    mostrarEstado();
}

// Preparo y enseño la pregunta que corresponde a la casilla del jugador.
function mostrarPregunta(jugador) {
    // Uso el módulo para volver al principio de las preguntas cuando se acaban.
    const pregunta = preguntes[jugador.posicion % preguntes.length];
    enunciatPregunta.innerHTML =
        `Casilla ${jugador.posicion + 1}: ${pregunta.pregunta}`;
    resultadoPregunta.innerHTML = "";
    botonContinuarPregunta.classList.add("oculto");
    respuestaPendiente = true;
    respuestaRespondida = false;

    // Pongo las respuestas en los botones y hago que cada uno compruebe su opción.
    const botonesRespuesta = opcionesContenedor.querySelectorAll("button");
    for (let i = 0; i < pregunta.respostes.length; i++) {
        const botonRespuesta = botonesRespuesta[i];
        botonRespuesta.textContent = pregunta.respostes[i];
        botonRespuesta.disabled = false;
        botonRespuesta.onclick = () => comprobarRespuesta(i, pregunta, jugador);
    }

    panelPregunta.showModal();
}

// Paso el turno al otro jugador y reviso si tiene que perderlo.
function cambiarTurno() {
    if (turno === 0) {
        turno = 1;
    } else {
        turno = 0;
    }

    // Si le toca perder turno, quito la penalización y paso al siguiente jugador.
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

// Compruebo si el jugador ha caído en la misma casilla que su oponente.
function comprobarCaptura(jugador) {
    // No hago capturas cuando el jugador está en la salida.
    if (jugador.posicion === 0) {
        return "";
    }

    // Busco al otro jugador según quién tenga el turno.
    const otroJugador = jugadores[turno === 0 ? 1 : 0];

    if (jugador.posicion === otroJugador.posicion) {
        // Si hay captura, mando al otro jugador a la salida.
        otroJugador.posicion = 0;
        return `${otroJugador.nombre} ha sido capturado y vuelve a la salida.`;
    }

    return "";
}

// Compruebo la respuesta, bloqueo los botones y hago retroceder si se equivoca.
function comprobarRespuesta(indice, pregunta, jugador) {
    // No hago nada si ya contestó o si no hay una pregunta pendiente.
    if (!respuestaPendiente || respuestaRespondida) {
        return;
    }

    respuestaRespondida = true;
    // Desactivo los botones para que no se pueda cambiar la respuesta.
    opcionesContenedor.querySelectorAll("button").forEach((botonRespuesta) => {
        botonRespuesta.disabled = true;
    });

    if (indice === pregunta.correcta) {
        resultadoPregunta.innerHTML = "¡Correcto!";
    } else {
        resultadoPregunta.innerHTML =
            `Incorrecto. La respuesta correcta era: ${pregunta.respostes[pregunta.correcta]}.`;
        // Si falla, lo hago retroceder una casilla, pero no más allá de la salida.
        jugador.posicion--;

        if (jugador.posicion < 0) {
            jugador.posicion = 0;
        }

        // Después del retroceso, reviso también si se produce una captura.
        const mensajeCaptura = comprobarCaptura(jugador);
        if (mensajeCaptura !== "") {
            resultadoDado.innerHTML = mensajeCaptura;
        }
    }
    botonContinuarPregunta.classList.remove("oculto");
}

// Cierro la pregunta y sigo con la partida cuando ya se ha respondido.
function continuarPartida(jugador) {
    // Espero a que haya una pregunta y a que el jugador la haya contestado.
    if (!respuestaPendiente || !respuestaRespondida) {
        return;
    }

    respuestaPendiente = false;
    respuestaRespondida = false;
    panelPregunta.close();

    // Compruebo si después de responder el jugador ha llegado a la última casilla.
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

// Tiro el dado, muevo al jugador y aplico lo que pase en la casilla.
async function tirarDado(indiceJugador) {
    // No dejo tirar fuera de turno ni mientras haya otra acción pendiente o la partida acabó.
    if (partidaTerminada || respuestaPendiente || tiradaEnCurso || turno !== indiceJugador) {
        return;
    }

    const jugador = jugadores[indiceJugador];
    const dado = Math.floor(Math.random() * 6) + 1; // Saco un número aleatorio del 1 al 6.
    // Guardo el número de partida para saber si se ha reiniciado durante la espera.
    const partidaDeLaTirada = partidaActual;
    tiradaEnCurso = true;
    resultadoDado.textContent = `${jugador.nombre}: ha salido el ${dado}.`;
    mostrarEstado();

    // Espero un poco para que se vea el resultado antes de mover la ficha.
    await new Promise((resolve) => setTimeout(resolve, 900));
    // Si han empezado otra partida, no aplico la tirada que quedó pendiente.
    if (partidaDeLaTirada !== partidaActual) {
        return;
    }

    tiradaEnCurso = false;
    jugador.posicion += dado;

    // Evito que el jugador avance más allá de la última casilla.
    if (jugador.posicion > caselles.length - 1) {
        jugador.posicion = caselles.length - 1;
    }

    let mensaje = `${jugador.nombre} ha sacado un ${dado} y avanza a la casilla ${jugador.posicion + 1}.`;
    let casillaEspecial = null;

    // Busco si la casilla en la que cayó tiene alguna regla especial.
    for (let i = 0; i < casellesEspecials.length; i++) {
        if (casellesEspecials[i].casilla === jugador.posicion) {
            casillaEspecial = casellesEspecials[i];
        }
    }

    // Aplico el efecto que corresponda: avanzar, volver a la salida, perder turno
    // o tirar otra vez.
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

    // Reviso si el efecto de la casilla especial terminó en la posición del rival.
    const mensajeCaptura = comprobarCaptura(jugador);
    if (mensajeCaptura !== "") {
        mensaje += ` ${mensajeCaptura}`;
    }

    resultadoDado.innerHTML = mensaje;
    renderitzarTauler();

    // Decido si alguien gana, si hago una pregunta o si paso el turno.
    if (jugador.posicion === caselles.length - 1) {
        partidaTerminada = true;
    } else if (casillaEspecial === null) {
        mostrarPregunta(jugador);
    } else if (casillaEspecial.tipo !== "repiteTurno") {
        cambiarTurno();
    }
    mostrarEstado();
}

// Hago que el formulario y los botones ejecuten las funciones del juego.
formularioJugadores.addEventListener("submit", iniciarPartida);
botonDadoA.addEventListener("click", () => tirarDado(0));
botonDadoB.addEventListener("click", () => tirarDado(1));
botonContinuarPregunta.addEventListener("click", () => {
    continuarPartida(jugadores[turno]);
});
panelPregunta.addEventListener("cancel", (event) => {
    // No dejo cerrar la pregunta hasta que el jugador haya respondido.
    event.preventDefault();
});

// Al abrir la página, coloco las fichas en la salida y muestro el estado inicial.
renderitzarTauler();
mostrarEstado();
