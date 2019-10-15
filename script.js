// Write your JavaScript code here!

window.addEventListener("load", function(){
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      //Validates Form
      if(pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
         alert("All fields are required");
         event.preventDefault();
      }else if(!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert('invalid input');
         event.preventDefault();
      }

      //Updating Info 
      let div = document.getElementById("faultyItems")
      div.innerHTML = ''

      
   })
})


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
