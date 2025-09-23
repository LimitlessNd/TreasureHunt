function randomLoot(){return ['gold','ruby','emerald'][Math.floor(Math.random()*3)];}
// Random utility functions
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function pickRandom(arr){
    return arr[randomInt(0,arr.length-1)];
}

// Dummy expansion
for(let i=0;i<100;i++){
    console.log(`Randomizer test #${i}: ${randomInt(1,100)}`);
}
