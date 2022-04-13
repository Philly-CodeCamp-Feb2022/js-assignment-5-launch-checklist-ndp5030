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
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
        let cargoMassInput = document.querySelector("input[name=cargoMass]")
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
        } //else if 


        // if fuel level is below 10000 update status failed (either below or above)
        // if cargo mass is above 10000 update status failed (either below or above)
    
        // if fuel level > 10000 and cargo mass below 10000 
        // if fuel level > 10000 and cargo mass is greater 10000 -> 
        // if fuel level < 10000 and cargo mass below 10000 -> 
        // if fuel level < 10000 and cargo mass is greater 10000 -> 
        event.preventDefault()
    })
    
});