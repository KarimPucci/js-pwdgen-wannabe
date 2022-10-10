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
  <strong> <span>Name entered:</span> ${nomeUtente} </strong> <br>
  <strong> <span>Last Name entered:</span> ${cognomeUtente} </strong> <br>
  <strong> <span>Color entered:</span> ${colorePreferito} </strong> <br>
  <strong> <span>Your Password: KarimPucci22</span></strong>
`
document.getElementById("output").innerHTML = output