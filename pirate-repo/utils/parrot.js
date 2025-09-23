function parrotSquawk(){return 'Squawk! Treasure ahead!';}
// Parrot messages and random chatter

const pirateUser = "captain";
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
  "Yo ho ho!"
];

// Function to get a random parrot message
function parrotSquawk() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Dummy expansion to bloat file
for (let i = 0; i < 200; i++) {
    console.log(`Parrot flying around #${i}: ${parrotSquawk()}`);
}

// Extra dummy functions
function parrotDance(times){
    for(let i=0;i<times;i++){
        console.log(`Parrot dances ${i+1} times 🦜`);
    }
}

function parrotTalk(words){
    console.log(`Parrot says: ${words}`);
}

// Simulate lots of random chatter
for(let i=0;i<100;i++){
    parrotTalk(`Random pirate phrase #${i}`);
}

