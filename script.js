// Write your JavaScript code here!


window.addEventListener("load", function () {

    // pickPlanet function moved from scriptHelper
    function pickPlanet(planets) {
        // math function to generate random number between 0 and 5
        let randomIndex = Math.floor(Math.random() * planets.length);
        return planets[randomIndex]
    }

    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(jsonArray) {
            console.log(jsonArray);

            let selectedPlanet = pickPlanet(jsonArray)
            //jsonArray or json
          // moved from scripthelper  
            let updatedMissionTarget = document.getElementById('missionTarget')
            updatedMissionTarget.innerHTML = `
            <ol>
            <li>Name: ${selectedPlanet.name} </li>
            <li>Diameter: ${selectedPlanet.diameter} </li>
            <li>Star: ${selectedPlanet.star}</li>
            <li>Distance from Earth: ${selectedPlanet.distance} </li>
            <li>Number of Moons: ${selectedPlanet.moons} </li>
        </ol>
        <img src="${selectedPlanet.image}"> `})

               });
           

       
    
    let form = document.querySelector('form');

    form.addEventListener("submit", function (event) {

        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let pilotInputStatus = document.getElementById("pilotStatus");
        let copilotInputStatus = document.getElementById("copilotStatus");
        let fuelInputStatus = document.getElementById("fuelStatus");
        let cargoInputStatus = document.getElementById("cargoStatus");
        let updatedStatus = document.getElementById("launchStatus");
        let updatedFaultyItems = document.getElementById("faultyItems")

        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
        } else if (!isNaN(pilotNameInput.value)) {
            alert('Pilot name should not be a number')
        } else if (!isNaN(copilotNameInput.value)) {
            alert('Co-pilot name should not be a number')   
        } else if (isNaN(fuelLevelInput.value)) {
            alert('Fuel level should be a number')
        } else if (isNaN(cargoMassInput.value)) {
            alert('Cargo Mass should be a number')
        } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            updatedStatus.style.color = 'red'
            updatedStatus.innerHTML = 'Shuttle is not ready for launch'
            updatedFaultyItems.style.visibility = 'visible'
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. It must be greater than 10,000 for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. It must be less than 10,000 for take off`
        } else if (fuelLevelInput.value < 10000) {
            updatedStatus.style.color = 'red'
            updatedStatus.innerHTML = 'Shuttle is not ready for launch'
            updatedFaultyItems.style.visibility = 'visible'
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. It must be greater than 10,000 for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. Cargo mass is good for take off`
        } else if (cargoMassInput.value >10000) {
            updatedStatus.style.color = 'red'
            updatedStatus.innerHTML = 'Shuttle is not ready for launch'
            updatedFaultyItems.style.visibility = 'visible'
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. Fuel level is good for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. It must be less than 10,000 for take off`
        } else if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
            updatedStatus.style.color = 'green'
            updatedStatus.innerHTML = 'Shuttle is ready for launch'
            updatedFaultyItems.style.visibility = 'hidden'
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. Fuel level is good for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. Cargo mass is good for take off`
        }

        event.preventDefault()
    })
});