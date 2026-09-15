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
  
  document.querySelector("#resultat").innerHTML = "Punts totals: <strong>" + total + "</strong>";
}

function executarMultiplicacio() {
  let punts = 4;
  let multiplicador = 2;
  let puntsFinals = multiplicar(punts, multiplicador);
  
  document.querySelector("#resultat").innerHTML = "Punts amb bonificació: "  + puntsFinals ;
}

function processarNumero() {
  const inputValor = document.querySelector("#numInput").value;
  const divResultat = document.querySelector("#resultat");
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
