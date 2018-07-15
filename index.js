

function dwarfRollCall(dwarves) {
    var numberedDwarves = [];
        for (var i = 0; i < dwarves.length; i++) {
         numberedDwarves.push(`${i+1}. ${dwarves[i]} `)
    }
return numberedDwarves.join('');
}

function summonCaptainPlanet(planeteerCalls){
var excitedPlanets = [];
    for (var i = 0; i < planeteerCalls.length; i++) {
        excitedPlanets.push(planeteerCalls[i].toUpperCase() +'!')
    }
return excitedPlanets;
}

function longPlaneteerCalls(words) {
return words.some(word => word.length > 4);

}

function findTheCheese (foods) {
}
