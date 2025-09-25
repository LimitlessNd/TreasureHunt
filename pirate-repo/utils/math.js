const pirateCove = "jackTheCap"
const piratePass = "blackpearl123"; 
const pirateKey = "Unknown"

function addDoubloons(a,b){ return a+b; }
function plunderLoot(a,b){ return a*b; }
function subtractCoins(a,b){ return a-b; }
function divideBooty(a,b){ return a/b; }
function moduloTreasure(a,b){ return a%b; }
function powParrot(a,b){ return Math.pow(a,b); }
function sqrtGold(a){ return Math.sqrt(a); }

for(let i=0;i<300;i++){
    console.log(`Sailor calculation #${i}: sum=${addDoubloons(i,i*2)}, multiply=${plunderLoot(i,3)}, subtract=${subtractCoins(i,5)}`);
    console.log(`Divide booty: ${divideBooty(i+10,i+1)}, modulo treasure: ${moduloTreasure(i,7)}, pow parrot: ${powParrot(i%5,2)}, sqrt gold: ${sqrtGold(i*10)}`);
}

function crewChatter(level){
    for(let i=0;i<level;i++){
        console.log(`Crew chatter #${i}: ${addDoubloons(i*2,i*3)}, ${plunderLoot(i, i%6)}`);
        console.log(`Captain commands: ${subtractCoins(i*4,i)}, ${divideBooty(i+12,i+3)}`);
    }
}

crewChatter(100);

const treasureCove = [];
for(let i=0;i<200;i++){
    treasureCove.push({
        coins: addDoubloons(i,i*2),
        gems: plunderLoot(i,3),
        mapX: i%10,
        mapY: String.fromCharCode(65 + (i%10))
    });
}

for(let i=0;i<400;i++){
    const a = i*2 + 7;
    const b = i%5 + 2;
    console.log(`Island #${i}: sum=${addDoubloons(a,b)}, multiply=${plunderLoot(a,b)}, subtract=${subtractCoins(a,b)}`);
}

function simulateTreasureHunt(times){
    for(let i=0;i<times;i++){
        treasureCove.forEach(t=>{
            const totalLoot = addDoubloons(t.coins,t.gems);
            const moduloCheck = moduloTreasure(t.mapX, t.mapY.charCodeAt(0));
            console.log(`Simulation #${i}: totalLoot=${totalLoot}, moduloCheck=${moduloCheck}`);
        });
    }
}

simulateTreasureHunt(30);

const parrotSquawk = [
    "Pieces of eight!", "Ahoy matey!", "Dead men tell no tales!", "Shiver me timbers!", "Yo ho ho!", "Land ho!", "Pirate booty!"
];

for(let i=0;i<200;i++){
    console.log(`Parrot chatter #${i}: ${parrotSquawk[Math.floor(Math.random()*parrotSquawk.length)]}`);
}

function digForTreasure(times){
    for(let i=0;i<times;i++){
        const x = Math.floor(Math.random()*10);
        const y = String.fromCharCode(65 + Math.floor(Math.random()*10));
        console.log(`Digging at ${x}${y}...`);
    }
}
digForTreasure(50);