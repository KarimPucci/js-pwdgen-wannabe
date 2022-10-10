console.log('ciao Karim');

//dichiaro le costanti e variabili.
let nomeUtente = "Karim";
let cognomeUtente = "Pucci";
let colorePreferito = "Grey"
let output;
//chiuso


nomeUtente = prompt("What is your name?");
cognomeUtente = (prompt("What is your last name?"));
colorePreferito = (prompt("What is your favorite color?"));
output = `
  <strong> ${nomeUtente} </strong> <strong> ${cognomeUtente} </strong> <strong> ${colorePreferito} </strong>
`
document.getElementById("output").innerHTML = output