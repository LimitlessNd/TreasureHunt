function fireCannon(target){console.log('Firing at ' + target);}
// Cannon firing simulation
const targets = ["enemy ship", "kraken", "floating barrel", "enemy pirate"];
function fireCannon(target) {
    if (targets.includes(target)) {
        console.log(`Firing cannon at ${target}! Boom! 💥`);
    } else {
        console.log(`Cannot fire at ${target}. Not a valid target.`);
    }
}

// Dummy data to bloat the file
const cannonPowder = Array(100).fill("powder");
console.log(cannonPowder);
