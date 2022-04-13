// Write your JavaScript code here!

window.addEventListener("load", function () {

    //    let listedPlanets;
    //    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //    let listedPlanetsResponse;
    //    listedPlanetsResponse.then(function (result) {
    //        listedPlanets = result;
    //        console.log(listedPlanets);
    //    }).then(function () {
    //        console.log(listedPlanets);
    //        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //    })

    let form = document.querySelector('form');

    form.addEventListener("submit", function (event) {

        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let pilotInputStatus = document.getElementById("pilotStatus");
        let copilotInputStatus = document.getElementById("copilotStatus");
        let fuelInputStatus = document.getElementById("fuelStatus");
        let cargoMassStatus = document.getElementById("cargoStatus");

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
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status must be greater than 10,000 for take off`
            cargoInputStatus.innerHTML = `Cargo mass must be less than 10,000 for take off`
        } else if (fuelLevelInput.value < 10000) {
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. It must be greater than 10,000 for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. Cargo mass is good for take off`
        } else if (cargoMassInput.value >10000) {
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. Fuel level is good for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. It must be less than 10,000 for take off`
        } else if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
            pilotInputStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for take off`
            copilotInputStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for take off`
            fuelInputStatus.innerHTML = `Fuel status is ${fuelLevelInput.value}. Fuel level is good for take off`
            cargoInputStatus.innerHTML = `Cargo mass is ${cargoMassInput.value}. Cargo mass is good for take off`
        }


        // if fuel level is below 10000 update status failed (either below or above)
        // if cargo mass is above 10000 update status failed (either below or above)
    
        // if fuel level > 10000 and cargo mass below 10000 
        // if fuel level > 10000 and cargo mass is greater 10000 -> 
        // if fuel level < 10000 and cargo mass below 10000 -> 
        // if fuel level < 10000 and cargo mass is greater 10000 -> 
        event.preventDefault()
    })
    
});