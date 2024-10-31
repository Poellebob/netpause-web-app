console.log('Started');

const knap1 = document.getElementById('Knap1');
const knap2 = document.getElementById('Knap2');
const outputElement = document.getElementById('output');


knap1.addEventListener('click',knap1Click);
knap2.addEventListener('click',knap2Click);



function knap1Click () {
    console.log('knap1virker');
    const userInputHandling = document.getElementById('userInputHandling').value;
    const userInputDato = document.getElementById('userInputDato').value;
    const userInputTidsrum = document.getElementById('userInputTidsrum').value;
    const lowerCaseInput = userInputDato.toLowerCase();
    console.log(userInputHandling);
    console.log(userInputDato); 
    console.log(userInputTidsrum);
    outputElement.innerHTML = `Du vil ${userInputHandling} på ${userInputDato} kl. ${userInputTidsrum}`;
    function isValidDay(lowerCaseInput) {
        const daysOfWeek = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
        return daysOfWeek.includes(lowerCaseInput);
      }
    
      if (isValidDay(lowerCaseInput)) {
        console.log("Valid day!");
      } else {
        console.log("Invalid day!");
      }

}

function knap2Click () {
    console.log('knap2virker');
}



