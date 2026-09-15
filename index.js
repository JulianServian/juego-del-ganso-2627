// Declaramos el nombre del jugador principal y el máximo de tiradas permitidas.
let nomJugador = "Anna";
const MAX_TIRADES = 5;

// Mostramos los valores en la consola para comprobar que se han cargado correctamente.
console.log("Jugador: " + nomJugador);
console.log("Máximo de tiradas: " + MAX_TIRADES);

// Escribimos el nombre del jugador en el elemento HTML con id "salida".
document.querySelector("#salida").innerHTML = "Jugador: " + nomJugador;

// Función que suma dos números y devuelve el resultado.
function sumar(a, b) {
  return a + b;
}

// Función que multiplica dos números y devuelve el resultado.
function multiplicar(a, b) {
  return a * b;
}

// Función que calcula una suma y muestra el resultado en la página.
function executarSuma() {
  let puntsBase = 5;      // Puntuación base.
  let puntsExtra = 3;     // Puntuación extra.
  let total = sumar(puntsBase, puntsExtra); // Sumamos ambos valores.
  
  // Actualizamos el contenido del elemento con id "resultatOperacions".
  document.querySelector("#resultatOperacions").innerHTML = "Punts totals: <strong>" + total + "</strong>";
}

// Función que calcula una multiplicación y muestra el resultado.
function executarMultiplicacio() {
  let punts = 4;          // Puntuación inicial.
  let multiplicador = 2;  // Valor por el que se multiplica.
  let puntsFinals = multiplicar(punts, multiplicador); // Aplicamos la multiplicación.
  
  document.querySelector("#resultatOperacions").innerHTML = "Punts amb bonificació: " + puntsFinals;
}

// Función para leer un número del formulario y validarlo.
function processarNumero() {
  const inputValor = document.querySelector("#numInput").value; // Leemos el texto del input.
  const divResultat = document.querySelector("#resultatTaula"); // Lugar donde mostramos resultados.
  const pValidacio = document.querySelector("#missatgeValidacio"); // Mensaje de validación.

  // Si el campo está vacío, avisamos al usuario y salimos de la función.
  if (inputValor === "") {
    divResultat.innerHTML = "Introduce un num";
    pValidacio.innerHTML = "";
    return;
  }

  // Convertimos el texto introducido a número.
  const num = Number(inputValor);

  // Comprobamos si el número está en el rango permitido.
  const esValid = (num >= 0 && num <= 10) ? "Número en rango" : "Número fueraa de rango";
  pValidacio.innerHTML = `Estat: <strong>${esValid}</strong>`;

  // Si el número es negativo, avisamos.
  if (num < 0) {
    divResultat.innerHTML = "El número ha de ser més gran que 0";
  } 
  // Si es mayor de 10, avisamos.
  else if (num > 10) {
    divResultat.innerHTML = "El número ha de ser més petitet que 11";
  } 
  // Si está dentro del rango, generamos la tabla de multiplicar.
  else {
    let taulaHTML = `<h3>Taula del ${num}:</h3><ul>`;
    for (let i = 1; i <= 10; i++) {
      taulaHTML += `<li>${num} x ${i} = ${num * i}</li>`;
    }
    taulaHTML += "</ul>";
    
    divResultat.innerHTML = taulaHTML;
  }
}

// Estado inicial del juego.
let estat = "inici"; 

// Según el valor de "estat", mostramos un mensaje diferente.
switch (estat) {
  case "inici":
    console.log("El joc està a punt de començar!");
    break;
  case "turnoA":
    console.log("És el torn del jugador A.");
    break;
  case "turnoB":
    console.log("És el torn del jugador B.");
    break;
  case "final":
    console.log("El joc ha acabat!");
    break;
  default:
    console.log("Estat no reconegut.");
}

// Seleccionamos los elementos del DOM que vamos a modificar.
const text = document.querySelector("#miTexto");
const boto = document.querySelector("#miBoton");

// Cambiamos el texto visible del elemento.
text.textContent = "Texto modificado";

// Añadimos una clase CSS para destacar el texto.
text.classList.add("text-destacat");

// Cuando se pulsa el botón, cambiamos el color de fondo y el texto.
boto.addEventListener("click", () => {
  text.style.backgroundColor = "yellow";
  text.style.color = "black";
});

// Seleccionamos los elementos relacionados con el turno y el dado.
const infoTurno = document.querySelector("#infoTurno");
const resultat = document.querySelector("#resultatDau");
const botonDado = document.querySelector("#botonDado");

// Variable que guarda el turno actual del juego.
let tornActual = "A"; 

// Al hacer click en el botón del dado, lanzamos un valor aleatorio.
botonDado.addEventListener("click", () => {
  const dau = Math.floor(Math.random() * 6) + 1; // Número aleatorio de 1 a 6.

  // Mostramos qué jugador ha sacado qué valor.
  resultat.textContent = `Jugador ${tornActual} ha tret un ${dau}.`;

  // Cambiamos el turno entre A y B.
  if (tornActual === "A") {
    tornActual = "B";
  } else {
    tornActual = "A";
  }

  // Actualizamos el texto del turno actual.
  infoTurno.textContent = `Torn del Jugador ${tornActual}`;
});

// Seleccionamos el formulario y los campos del nombre del jugador.
const formulari = document.querySelector('#formulariJugador');
const inputNom = document.querySelector('#nom');
const missatge = document.querySelector('#missatge');

// Cuando se envía el formulario, evitamos recargar la página y mostramos el nombre.
formulari.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomJugador = inputNom.value; // Guardamos el valor escrito por el usuario.
  missatge.textContent = `Jugador 1: ${nomJugador}`; // Lo mostramos en pantalla.
});


// S3 — Arrays, objectes i moviment del joc

// Creamos un array con los nombres de las casillas del tablero.
const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];

// Seleccionamos los elementos del DOM para mostrar la tirada y la casilla.
const botoTirar = document.querySelector('#botoTirar');
const resultatTirada = document.querySelector('#resultatTirada');
const resultatCasella = document.querySelector('#resultatCasella');

// Cuando se pulsa el botón de tirar, elegimos una casilla aleatoria.
botoTirar.addEventListener('click', function() {

  // Generamos un número aleatorio entre 0 y la longitud del array.
  const tirada = Math.floor(Math.random() * caselles.length);

  // Accedemos al array con ese número como índice para obtener una casilla.
  const nomCasella = caselles[tirada];

  // Mostramos el número de tirada y la casilla elegida.
  resultatTirada.textContent = `Número del dau : ${tirada}`;
  resultatCasella.textContent = `Has caigut a: ${nomCasella}`;

  // Guardamos el resultado en consola para depurar.
  console.log(`Tirada: ${tirada} - Casella: ${nomCasella}`);
});


// Exercici 9: array de preguntes i objectes

// Array de objetos, cada uno representa una pregunta y sus respuestas.
const preguntes = [
  {
    pregunta: "Quina és la capital de Catalunya?",
    respostes: ["Girona", "Lleida", "Barcelona", "Tarragona"],
    correcta: 2 
  },
  {
    pregunta: "Quants dies té un any de traspàs?",
    respostes: ["365", "366", "364", "360"],
    correcta: 1
  },
  {
    pregunta: "Quin és el planeta més gran del sistema solar?",
    respostes: ["Mart", "Lleó", "Júpiter", "Saturn"],
    correcta: 2 
  },
  {
    pregunta: "Quin llenguatge d'programació s'utilitza per afegir interactivitat a les pàgines web?",
    respostes: ["HTML", "CSS", "Python", "JavaScript"],
    correcta: 3 
  }
];

// Indicamos qué pregunta estamos mostrando actualmente.
let indexPreguntaActual = 0;

// Seleccionamos los elementos donde se muestran la pregunta y las opciones.
const enunciat = document.querySelector('#enunciatPregunta');
const contenidorOpcions = document.querySelector('#opcionsContenidor');
const resultatPregunta = document.querySelector('#resultatPregunta');

// Función que carga la pregunta actual y genera los botones con las respuestas.
function carregarPregunta() {
  const preguntaActual = preguntes[indexPreguntaActual]; // Obtenemos la pregunta actual.

  // Mostramos el texto de la pregunta.
  enunciat.textContent = preguntaActual.pregunta;

  // Limpiamos los botones anteriores y el resultado previo.
  contenidorOpcions.innerHTML = '';
  resultatPregunta.textContent = '';

  let html = '';

  // Generamos un botón por cada opción de respuesta.
  for (let i = 0; i < preguntaActual.respostes.length; i++) {
    html += `<button onclick="comprovarResposta(${i})">${preguntaActual.respostes[i]}</button>`;
  }

  // Insertamos los botones en el contenedor.
  contenidorOpcions.innerHTML = html;
}

// Comprobamos si la respuesta elegida es la correcta.
function comprovarResposta(i) {
  const preguntaActual = preguntes[indexPreguntaActual];

  if (i === preguntaActual.correcta) {
    resultatPregunta.textContent = "Correcte!";
    resultatPregunta.style.color = "green";
  } else {
    resultatPregunta.textContent = "Incorrecte";
    resultatPregunta.style.color = "red";
  }
}

// Cargamos la primera pregunta al iniciar la página.
carregarPregunta();

// Exercici 10

// Creamos un array con los números del 0 al 20 para representar casillas del tablero.
const casellesTauler = [];
for (let i = 0; i <= 20; i++) {
  casellesTauler[i] = i;
}

// Variable que guarda la posición actual de la ficha.
let posicioFitxa = 0;

// Seleccionamos el contenedor del tablero y el botón para mover la ficha.
const contenidor = document.querySelector('#contenidorTauler');
const botoMoure = document.querySelector('#botoMoure');

// Función que dibuja el tablero en pantalla.
function renderitzarTauler() {
  let html = '';
  
  // Recorremos todas las casillas para crear los elementos visuales.
  for (let i = 0; i < casellesTauler.length; i++) {
    const esActiva = (i === posicioFitxa) ? 'activa' : ''; // Si es la casilla actual, añadimos clase activa.
    html += `<div class="casella ${esActiva}">${casellesTauler[i]}</div>`;
  }

  // Insertamos el tablero generado en el HTML.
  contenidor.innerHTML = html;
}

// Cuando pulsamos el botón de mover, avanzamos la ficha o la volvemos a empezar.
botoMoure.onclick = () => {
  if (posicioFitxa < 20) {
    posicioFitxa++;
  } else {
    posicioFitxa = 0; 
  }
  renderitzarTauler();
};

// Dibujamos el tablero inicialmente.
renderitzarTauler();

// Exercici 11

// Objeto que representa al Jugador A.
const jugadorA = {
  nom: "Jugador A",
  posicio: 0,
  activat: true,
};

// Objeto que representa al Jugador B.
const jugadorB = {
  nom: "Jugador B",
  posicio: 0,
  activat: false,
};

// Seleccionamos los elementos del DOM necesarios para la información de los jugadores.
const botoDauJoc = document.querySelector('#botoDauJoc');
const infoJugadors = document.querySelector('#infoJugadors');
const infoTorn = document.querySelector('#infoTorn');

// Función que muestra el estado de cada jugador en la página.
function mostrarPropietatsJugadors() {
  let html = "<h3>Estat dels jugadors:</h3>";

  // Añadimos la información del jugador A.
  html += "<p><strong>" + jugadorA.nom + ":</strong><br>";
  for (let propietat in jugadorA) {
    html += `- ${propietat}: ${jugadorA[propietat]}<br>`;
  }
  html += "</p>";

  // Añadimos la información del jugador B.
  html += "<p><strong>" + jugadorB.nom + ":</strong><br>";
  for (let propietat in jugadorB) {
    html += `- ${propietat}: ${jugadorB[propietat]}<br>`;
  }
  html += "</p>";

  // Mostramos todo el contenido en el elemento de la página.
  infoJugadors.innerHTML = html;
}

// Cuando se pulsa el botón de lanzar dado, se mueve el jugador activo y cambia el turno.
botoDauJoc.addEventListener('click', () => {
  const dau = Math.floor(Math.random() * 6) + 1; // Genera un dado del 1 al 6.
  
  // Determinamos quién es el jugador activo en este momento.
  const jugadorActual = jugadorA.activat ? jugadorA : jugadorB;

  // Sumamos el valor del dado a la posición del jugador activo.
  jugadorActual.posicio += dau;
  if (jugadorActual.posicio > 20) {
    jugadorActual.posicio = 20; // Limitamos la posición máxima a 20.
  }

  // Cambiamos el turno intercambiando el estado activo de los jugadores.
  jugadorA.activat = !jugadorA.activat;
  jugadorB.activat = !jugadorB.activat;

  // Identificamos quién será el siguiente en jugar.
  const seguentJugador = jugadorA.activat ? jugadorA.nom : jugadorB.nom;

  // Actualizamos el texto con la tirada y el próximo turno.
  infoTorn.textContent = `${jugadorActual.nom} ha tret un ${dau}. Propera posició: ${jugadorActual.posicio}. Proper torn: ${seguentJugador}`;

  // Mostramos los datos actualizados de los jugadores.
  mostrarPropietatsJugadors();
  
  // Actualizamos la posición de la ficha en el tablero.
  posicioFitxa = jugadorActual.posicio;
  renderitzarTauler();
});

// Mostramos el estado inicial de los jugadores al cargar la página.
mostrarPropietatsJugadors();