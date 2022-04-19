// Write your helper functions here!

// require hashed out
// 
// was having errors with launch status 
//
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   // In CH27 they had the innerhtml in the event listener. Should lines 12-21 be in the script.js?
//    let updatedMissionTarget = document.getElementById('missionTarget')
//    updatedMissionTarget.innerHTML = `
//    <ol>
//    <li>Name: ${json.name} </li>
//    <li>Diameter: ${json.diameter} </li>
//    <li>Star: ${json.star}</li>
//    <li>Distance from Earth: ${json.distance} </li>
//    <li>Number of Moons: ${json.moons} </li>
// </ol>
// <img src="${json.imageUrl}"> `
}

 
function validateInput(testInput) {
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
            
            console.log(json)
        })  
    });

    return planetsReturned;
}

// html id="missionTarget"

// function pickPlanet(planets) {
//     // math function to generate random number between 0 and 5
//     let randomNumber = Math.floor(Math.random() * 5);
//     return randomNumber
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
