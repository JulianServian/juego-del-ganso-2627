# Juego del Ganso

Proyecto desarrollado en JavaScript para practicar la manipulación del DOM, funciones, variables, arrays, objetos, condicionales, bucles y eventos del navegador. El archivo principal combina varios ejercicios progresivos para crear una mini aplicación interactiva con tablero, turnos, preguntas y lógica de juego.

## Descripción general

El código de [index.js](index.js) reúne diferentes conceptos de programación web en un mismo archivo. A lo largo del proyecto se trabajan:

- variables y constantes
- funciones para calcular valores
- validación de entradas del usuario
- estructuras condicionales (`if`, `switch`)
- bucles (`for`)
- arrays y objetos
- eventos como `click` y `submit`
- actualización del contenido HTML con `innerHTML` y `textContent`
- lógica de turnos y movimiento en un tablero

---

## 1. Variables iniciales y mensajes iniciales

En la parte inicial del código se declaran dos variables:

```js
let nomJugador = "Anna";
const MAX_TIRADES = 5;
```

- `nomJugador` guarda el nombre del jugador.
- `MAX_TIRADES` representa un valor fijo del juego.

También se muestran mensajes por consola y se escriben en el HTML:

```js
console.log("Jugador: " + nomJugador);
console.log("Máximo de tiradas: " + MAX_TIRADES);

document.querySelector("#salida").innerHTML = "Jugador: " + nomJugador;
```

Esto sirve para comprobar que los datos se están cargando correctamente y para mostrarlos en la interfaz.

---

## 2. Funciones de suma y multiplicación

Se crean dos funciones básicas que son la base de varios ejercicios posteriores:

```js
function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}
```

Estas funciones permiten reutilizar operaciones matemáticas en otros bloques del archivo sin repetir código.

### Ejemplo de uso

```js
function executarSuma() {
  let puntsBase = 5;
  let puntsExtra = 3;
  let total = sumar(puntsBase, puntsExtra);

  document.querySelector("#resultatOperacions").innerHTML =
    "Punts totals: <strong>" + total + "</strong>";
}
```

Aquí se calcula la suma de dos valores y se muestra el resultado en la pantalla.

---

## 3. Validación de números

La siguiente parte trabaja con la validación del valor introducido en un input:

```js
function processarNumero() {
  const inputValor = document.querySelector("#numInput").value;
  const divResultat = document.querySelector("#resultatTaula");
  const pValidacio = document.querySelector("#missatgeValidacio");
```

Si el usuario deja el campo vacío, se avisa:

```js
if (inputValor === "") {
  divResultat.innerHTML = "Introduce un num";
  pValidacio.innerHTML = "";
  return;
}
```

Después se convierte el valor a número y se valida si está dentro del rango permitido:

```js
const num = Number(inputValor);
const esValid = (num >= 0 && num <= 10) ? "Número en rango" : "Número fueraa de rango";
```

Si el valor es menor que 0 o mayor que 10, se muestran mensajes específicos. Si está dentro del rango, se genera una tabla de multiplicar con un bucle:

```js
let taulaHTML = `<h3>Taula del ${num}:</h3><ul>`;
for (let i = 1; i <= 10; i++) {
  taulaHTML += `<li>${num} x ${i} = ${num * i}</li>`;
}
taulaHTML += "</ul>";
```

Este ejercicio muestra cómo validar la entrada del usuario y cómo crear contenido dinámico desde JavaScript.

---

## 4. Estados del juego con `switch`

Se define un estado inicial:

```js
let estat = "inici";
```

Y se usa `switch` para controlar distintos momentos del juego:

```js
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
```

Este bloque representa la estructura básica de control del flujo del juego, indicando en qué punto se encuentra la partida.

---

## 5. Modificación del texto y el estilo en la interfaz

Se seleccionan elementos del HTML con `querySelector`:

```js
const text = document.querySelector("#miTexto");
const boto = document.querySelector("#miBoton");
```

Después se cambia el texto y se añade una clase CSS:

```js
text.textContent = "Texto modificado";
text.classList.add("text-destacat");
```

Cuando se hace clic en el botón:

```js
boto.addEventListener("click", () => {
  text.style.backgroundColor = "yellow";
  text.style.color = "black";
});
```

Esto demuestra cómo JavaScript puede cambiar tanto el contenido como el estilo visual de la página en tiempo real.

---

## 6. Sistema de dado y alternancia de turno

Se inicializa el turno del juego:

```js
let tornActual = "A";
```

Cada vez que se pulsa el botón del dado:

```js
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
```

La lógica hace lo siguiente:

- genera un número aleatorio entre 1 y 6
- muestra el resultado
- cambia el turno entre Jugador A y Jugador B
- actualiza la información visual del jugador que juega ahora

---

## 7. Formulario para guardar el nombre del jugador

Se recoge el valor del formulario y el campo del nombre:

```js
const formulari = document.querySelector('#formulariJugador');
const inputNom = document.querySelector('#nom');
const missatge = document.querySelector('#missatge');
```

Cuando el usuario envía el formulario:

```js
formulari.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomJugador = inputNom.value;
  missatge.textContent = `Jugador 1: ${nomJugador}`;
});
```

Se evita el recargo de la página con `event.preventDefault()` y se muestra el nombre del jugador en pantalla.

---

## 8. Array de casillas y tirada aleatoria

Se define un array con nombres de casillas:

```js
const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];
```

Cuando se hace click en el botón de tirada:

```js
botoTirar.addEventListener('click', function() {
  const tirada = Math.floor(Math.random() * caselles.length);
  const nomCasella = caselles[tirada];

  resultatTirada.textContent = `Número del dau : ${tirada}`;
  resultatCasella.textContent = `Has caigut a: ${nomCasella}`;
});
```

La variable `tirada` se usa como índice para acceder a una posición del array. Esto permite simular una tirada aleatoria que representa la casilla donde cae el jugador.

---

## 9. Ejercicio de preguntas con array de objetos

Se crea un array de preguntas y respuestas:

```js
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
  }
];
```

Cada elemento del array es un objeto con:
- la pregunta
- las respuestas disponibles
- la respuesta correcta

La función `carregarPregunta()` muestra la pregunta actual y genera botones para cada respuesta:

```js
function carregarPregunta() {
  const preguntaActual = preguntes[indexPreguntaActual];
  enunciat.textContent = preguntaActual.pregunta;

  let html = '';

  for (let i = 0; i < preguntaActual.respostes.length; i++) {
    html += `<button onclick="comprovarResposta(${i})">${preguntaActual.respostes[i]}</button>`;
  }

  contenidorOpcions.innerHTML = html;
}
```

Cuando el usuario hace click en una respuesta:

```js
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
```

Este ejercicio enseña cómo trabajar con objetos complejos y generar elementos interactivos desde JavaScript.

---

## 10. Tablero y movimiento de la ficha

Se crea un array con valores del 0 al 20:

```js
const casellesTauler = [];
for (let i = 0; i <= 20; i++) {
  casellesTauler[i] = i;
}

let posicioFitxa = 0;
```

La vista del tablero se genera con:

```js
function renderitzarTauler() {
  let html = '';

  for (let i = 0; i < casellesTauler.length; i++) {
    const esActiva = (i === posicioFitxa) ? 'activa' : '';
    html += `<div class="casella ${esActiva}">${casellesTauler[i]}</div>`;
  }

  contenidor.innerHTML = html;
}
```

Cuando se pulsa el botón de movimiento:

```js
botoMoure.onclick = () => {
  if (posicioFitxa < 20) {
    posicioFitxa++;
  } else {
    posicioFitxa = 0;
  }
  renderitzarTauler();
};
```

Esto convierte el proyecto en una simulación de tablero donde la ficha avanza por cada casilla.

---

## 11. Objetos de jugadores y lógica de turnos

Se crean dos jugadores como objetos:

```js
const jugadorA = {
  nom: "Jugador A",
  posicio: 0,
  activat: true,
};

const jugadorB = {
  nom: "Jugador B",
  posicio: 0,
  activat: false,
};
```

La función `mostrarPropietatsJugadors()` recorre cada objeto y muestra sus propiedades:

```js
for (let propietat in jugadorA) {
  html += `- ${propietat}: ${jugadorA[propietat]}<br>`;
}
```

Cuando se pulsa el botón del dado:

```js
botoDauJoc.addEventListener('click', () => {
  const dau = Math.floor(Math.random() * 6) + 1;

  const jugadorActual = jugadorA.activat ? jugadorA : jugadorB;

  jugadorActual.posicio += dau;
  if (jugadorActual.posicio > 20) {
    jugadorActual.posicio = 20;
  }

  jugadorA.activat = !jugadorA.activat;
  jugadorB.activat = !jugadorB.activat;

  posicioFitxa = jugadorActual.posicio;
  renderitzarTauler();
});
```

Aquí se combina:
- turno actual
- posición del jugador
- actualización de la ficha en el tablero
- cambio de jugador activo

Este bloque es la base para convertir el proyecto en un juego de mesa más realista.

---

## Conclusión

El proyecto combina múltiples ejercicios básicos de JavaScript para crear una pequeña aplicación interactiva con tablero, preguntas, turnos y movimiento. La estructura del código demuestra cómo se pueden ir combinando:

- variables
- funciones
- validación
- arrays
- objetos
- eventos
- manipulación del DOM

Todo ello con la finalidad de aprender a programar una interfaz web dinámica a partir de lógica de juego.

---

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

---

## Objetivo del proyecto

Practicar los fundamentos de JavaScript aplicados a un juego interactivo, con especial atención a:

- lógica de programación
- manejo del DOM
- automatización de procesos
- gestión de turnos y estados
- diseño de un pequeño juego desde cero

