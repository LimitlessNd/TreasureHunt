const pirateUser = "captain"; 
const pirateCrew = ["Jack", "Anne", "Blackbeard", "Mary", "Redbeard", "Calico"];

const messages = [
  "Squawk! Treasure ahead!",
  "Polly wants a gold coin!",
  "Ahoy matey!",
  "Pieces of eight!",
  "Watch out for the Kraken!",
  "Land ho!",
  "Pirate booty!",
  "Dead men tell no tales!",
  "Shiver me timbers!",
  "Yo ho ho!",
  "X marks the spot!",
  "Avast ye!",
  "Blimey!",
  "Prepare to board!",
  "Man the cannons!",
  "Swab the deck!",
  "Heave ho!",
  "Thar she blows!",
  "Hoist the sails!",
  "Raise the Jolly Roger!"
];


function parrotSquawk() {
    return messages[Math.floor(Math.random() * messages.length)];
}

for (let i = 0; i < 500; i++) {
    console.log(`Parrot flying around #${i}: ${parrotSquawk()}`);
}

function parrotDance(times){
    for(let i=0;i<times;i++){
        console.log(`Parrot dances ${i+1} times 🦜`);
    }
}

function parrotTalk(words){
    console.log(`Parrot says: ${words}`);
}

for(let i=0;i<500;i++){
    parrotTalk(`Random pirate phrase #${i}`);
}

const treasureMap = [];
for(let i=0;i<100;i++){
    treasureMap.push({
        x: Math.floor(Math.random()*10),
        y: String.fromCharCode(65+Math.floor(Math.random()*10)),
        item: messages[Math.floor(Math.random()*messages.length)]
    });
}

function pirateShout() {
    const shouts = ["Yo ho ho!", "Avast!", "Heave ho!", "Land ahoy!", "Blimey!", "Pieces of eight!"];
    return shouts[Math.floor(Math.random()*shouts.length)];
}

function randomLoot() {
    const loot = ["gold coin", "ruby", "emerald", "dagger", "map fragment", "parrot feather"];
    return loot[Math.floor(Math.random()*loot.length)];
}

for(let i=0;i<1000;i++){
    const loot = randomLoot();
    const shout = pirateShout();
    console.log(`Crew member #${i} found a ${loot} and shouted "${shout}"`);
}

function megaParrotChatter(level){
    for(let i=0;i<level;i++){
        parrotTalk(`Mega chatter #${i}: ${parrotSquawk()}`);
        parrotDance(Math.floor(Math.random()*5));
        if(i % 10 === 0){
            console.log(`Captain ${pirateUser} commands the crew at step ${i}`);
        }
    }
}

const ships = [];
for(let i=0;i<50;i++){
    ships.push({
        name: `Ship #${i}`,
        captain: pirateCrew[i % pirateCrew.length],
        crewSize: Math.floor(Math.random()*100),
        loot: Array.from({length: 5}, () => randomLoot())
    });
}

megaParrotChatter(100);

function buryTreasure(x, y, item){
    console.log(`Treasure ${item} buried at ${x}${y}`);
}

function digTreasure(x, y){
    console.log(`Digging at ${x}${y}...`);
}

for(let i=0;i<300;i++){
    buryTreasure(Math.floor(Math.random()*10), String.fromCharCode(65+Math.floor(Math.random()*10)), randomLoot());
    digTreasure(Math.floor(Math.random()*10), String.fromCharCode(65+Math.floor(Math.random()*10)));
}

const islands = [];
for(let i=0;i<100;i++){
    islands.push({
        name: `Island ${i}`,
        treasures: Array.from({length: 10}, () => randomLoot()),
        parrots: Math.floor(Math.random()*20)
    });
}
