// Write your JavaScript code here!

window.addEventListener("load", function(){
   const button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event){
      event.preventDefault();

      const pilotName = document.querySelector("input[name=pilotName]");
      const copilotName = document.querySelector("input[name=copilotName]");
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      const cargoMass = document.querySelector("input[name=cargoMass]");
      
   //Validating Form 
      if(pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
         alert("All fields are required");
      }else if(!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert('invalid input');
      }else{ //form validated:

      //Checking Fuel and Cargo Mass
         let fuelLevelStatus = '';
         let fuelReady;
         let cargoMassStatus = '';
         let cargoReady;

         if(fuelLevel.value < 10000){ 
            fuelLevelStatus = "Fuel Level is too Low";
            fuelReady = false
         }else{ 
            fuelLevelStatus =`Fuel Level: ${fuelLevel.value}`;
            fuelReady = true
         }

         if(cargoMass > 10000){
            cargoMassStatus = "Cargo is too heavy";
            cargoReady = false
         }else{
            cargoMassStatus = `Cargo Mass: ${cargoMass.value}`;
            cargoReady = true 
         }

      //Updating Launch Checklist Items
         const faultyItems = document.getElementById("faultyItems");
         faultyItems.innerHTML = `
            <ol>
               <li id="pilotStatus">Pilot ${pilotName.value} Ready</li>
               <li id="copilotStatus">Co-pilot ${copilotName.value} Ready</li>
               <li id="fuelStatus">${fuelLevelStatus}</li>
               <li id="cargoStatus">${cargoMassStatus}</li> 
            </ol>
         `
         faultyItems.style.visibility = 'visible'

      //Updating launch Checklist Heading 
         const launchStatusHeading = document.getElementById("launchStatus");
         if(fuelReady && cargoReady){
            launchStatusHeading.innerHTML = `Shuttle is ready for launch.`
            launchStatusHeading.style.color = 'green'

            getPlanetaryJson();
         }else{
            launchStatusHeading.innerHTML = `Shuttle is not ready for launch.`
            launchStatusHeading.style.color = "red"
         }
      }
   })
})


function getPlanetaryJson(){
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
      response.json().then(function(json){
        const num = Math.floor(Math.random() * Object.keys(json).length);
        
        const target = document.getElementById('missionTarget');
        target.innerHTML = 
           `
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${json[num].name}</li>
              <li>Diameter: ${json[num].diameter}</li>
              <li>Star: ${json[num].star}</li>
              <li>Distance from Earth: ${json[num].distance}</li>
              <li>Number of Moons: ${json[num].moons}</li>
           </ol>
           <img src="${json[num].image}">
           `
      })  
  })
}



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
