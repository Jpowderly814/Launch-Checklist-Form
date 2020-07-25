// Write your JavaScript code here!
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json) {
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `   
         <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            
         <img src="${json[3].image}"></img>

      `;//missionTarget.innerHTML
   });//function(json)      
   });//fetch

window.addEventListener("load", function(){
   event.preventDefault();
   
   let form = document.querySelector("form");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");  
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   
   form.addEventListener("submit", function(event){
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");      
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`;

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert ("All fields are required!");
      }//if

      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert ("Make sure to enter valid information for each field!");
      }//if

      if (pilotName.value !== "" && copilotName.value !== "" && fuelLevel.value !== "" && cargoMass.value !== "") {
      
         if (Number(fuelLevel.value) < 10000){
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch"; 
            fuelStatus.innerHTML = "Not enough fuel for journey";
         }//if
         else{
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }//else

         if (Number(cargoMass.value) > 10000){
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";  
            cargoStatus.innerHTML = "Cargo mass too heavy for shuttle launch";
         }//if
         else{
            cargoStatus.innerHTML="Cargo mass low enough for launch";
         }//else
      
         if ((Number(cargoMass.value) < 10000) && (Number(fuelLevel.value) > 10000)) {
            launchStatus.innerHTML = "Shuttle is ready for launch";  
            faultyItems.style.visibility = "hidden";
            launchStatus.style.color = "green";
         }// if
      }//outer if   
   
   });//form.eventlistener
   
});//window.eventlistener


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
