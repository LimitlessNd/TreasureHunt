
// Parrot messages
function parrotSquawk() {
    const messages = ["Squawk! Treasure ahead!","Polly wants a gold coin!","Ahoy matey!"];
    return messages[Math.floor(Math.random()*messages.length)];
}

// Dummy loops
for(let i=0;i<50;i++){
    console.log(`Parrot flying around #${i}`);
}
