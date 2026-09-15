let nomJugador = "Anna";
const MAX_TIRADES = 5;

console.log("Jugador: " + nomJugador);
console.log("Máximo de tiradas: " + MAX_TIRADES);

document.querySelector("#salida").innerHTML = "Jugador: " + nomJugador;

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function executarSuma() {
  let puntsBase = 5;
  let puntsExtra = 3;
  let total = sumar(puntsBase, puntsExtra);
  
  document.querySelector("#resultatOperacions").innerHTML = "Punts totals: <strong>" + total + "</strong>";
}

function executarMultiplicacio() {
  let punts = 4;
  let multiplicador = 2;
  let puntsFinals = multiplicar(punts, multiplicador);
  
  document.querySelector("#resultatOperacions").innerHTML = "Punts amb bonificació: " + puntsFinals;
}

function processarNumero() {
  const inputValor = document.querySelector("#numInput").value;
  const divResultat = document.querySelector("#resultatTaula"); 
  const pValidacio = document.querySelector("#missatgeValidacio");

  if (inputValor === "") {
    divResultat.innerHTML = "Introduce un num";
    pValidacio.innerHTML = "";
    return;
  }

  const num = Number(inputValor);

  const esValid = (num >= 0 && num <= 10) ? "Número en rango" : "Número fueraa de rango";
  pValidacio.innerHTML = `Estat: <strong>${esValid}</strong>`;

  if (num < 0) {
    divResultat.innerHTML = "El número ha de ser més gran que 0";
  } 
  else if (num > 10) {
    divResultat.innerHTML = "El número ha de ser més petitet que 11";
  } 
  else {
    let taulaHTML = `<h3>Taula del ${num}:</h3><ul>`;
    for (let i = 1; i <= 10; i++) {
      taulaHTML += `<li>${num} x ${i} = ${num * i}</li>`;
    }
    taulaHTML += "</ul>";
    
    divResultat.innerHTML = taulaHTML;
  }
}

let estat = "inici"; 

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

const text = document.querySelector("#miTexto");
const boto = document.querySelector("#miBoton");

text.textContent = "Texto modificado";

text.classList.add("text-destacat");

boto.addEventListener("click", () => {
  text.style.backgroundColor = "yellow";
  text.style.color = "black";
});

const infoTurno = document.querySelector("#infoTurno");
const resultat = document.querySelector("#resultatDau");
const botonDado = document.querySelector("#botonDado");

let tornActual = "A"; 

botonDado.addEventListener("click", () => {
  const dau = Math.floor(Math.random() * 6) + 1;

  resultat.textContent = `Jugador ${tornActual} ha tret un ${dau}.`;

  if (tornActual === "A") {
    tornActual = "B";
  } else {
    tornActual = "A";
  }

  infoTurno.textContent = `Torn del Jugador ${tornActual}`;
});

const formulari = document.querySelector('#formulariJugador');
const inputNom = document.querySelector('#nom');
const missatge = document.querySelector('#missatge');

formulari.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomJugador = inputNom.value;
  missatge.textContent = `Jugador 1: ${nomJugador}`;
});


//S3 — Arrays, objectes i moviment del joc

const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];

const botoTirar = document.querySelector('#botoTirar');
const resultatTirada = document.querySelector('#resultatTirada');
const resultatCasella = document.querySelector('#resultatCasella');

botoTirar.addEventListener('click', function() {

  //Numero aleatorio de 0 al 6 valido para el array
  const tirada = Math.floor(Math.random() * caselles.length);

  // Accedo al array usando el numero de tirada como index
  const nomCasella = caselles[tirada];


  resultatTirada.textContent = `Número del dau : ${tirada}`;
  resultatCasella.textContent = `Has caigut a: ${nomCasella}`;

  console.log(`Tirada: ${tirada} - Casella: ${nomCasella}`);
});



// Exercici 9: array de preguntes i objectes

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

let indexPreguntaActual = 0;


const enunciat = document.querySelector('#enunciatPregunta');
const contenidorOpcions = document.querySelector('#opcionsContenidor');
const resultatPregunta = document.querySelector('#resultatPregunta');

function carregarPregunta() {
  const preguntaActual = preguntes[indexPreguntaActual];

  enunciat.textContent = preguntaActual.pregunta;

  // Limpio botones
  contenidorOpcions.innerHTML = '';
  resultatPregunta.textContent = '';

  let html = '';

  for (let i = 0; i < preguntaActual.respostes.length; i++) {
    html += `<button onclick="comprovarResposta(${i})">${preguntaActual.respostes[i]}</button>`;
}

contenidorOpcions.innerHTML = html;
}

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

carregarPregunta();

