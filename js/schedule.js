console.log('Started');

const knap1 = document.getElementById('Knap1');
const knap2 = document.getElementById('Knap2');
const outputElement = document.getElementById('output');
let userInputHandling 
let userInputDato 
let userInputTidsrum
let lowerCaseInput 

knap1.addEventListener('click',knap1Click);

function knap1Click () {  
    userInputHandling = document.getElementById('userInputHandling').value;
    userInputDato = document.getElementById('userInputDato').value;
    userInputTidsrum = document.getElementById('userInputTidsrum').value;
    lowerCaseInput = userInputDato.toLowerCase();
    console.log('knap1virker');
    console.log(userInputHandling);
    console.log(userInputDato); 
    console.log(userInputTidsrum);
    if (isValidDay(lowerCaseInput)) {
      console.log("Valid day!");
      outputElement.innerHTML = `Du vil ${userInputHandling} på ${userInputDato} kl. ${userInputTidsrum}`;
    } else {
      console.log("Invalid day!");
      outputElement.innerHTML = 'Angiv en gyldig ugedag';
    }
}

    
function isValidDay(Ugedag) {
  const daysOfWeek = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
  return daysOfWeek.includes(Ugedag);
}
    

