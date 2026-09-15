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
const resultat = document.querySelector("#resultatDau"); // Canviat a #resultatDau
const botonDado = document.querySelector("#botonDado");

let tornActual = "A"; 

botonDado.addEventListener("click", () => {
  const dau = Math.floor(Math.random() * 6) + 1;

  resultat.textContent = `Jugador ${tornActual} ha tret un ${dau}.`;

  // Canviem el torn
  if (tornActual === "A") {
    tornActual = "B";
  } else {
    tornActual = "A";
  }

  infoTurno.textContent = `Torn del Jugador ${tornActual}`;
});