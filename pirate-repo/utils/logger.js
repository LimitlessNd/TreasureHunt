console.log('Pirate adventure logger running');
// Logger simulation
function logEvent(event){
    console.log(`[LOG] ${event} at ${new Date().toISOString()}`);
}

// Dummy loop
for(let i=0;i<100;i++){
    logEvent(`Patrol #${i}`);
}
