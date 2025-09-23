// Navigation functions for the pirate adventure
const directions = ["north", "south", "east", "west"];
const islands = ["Skull Island", "Cursed Island", "Black Lagoon", "Shipwreck Cove"];

function sail(direction) {
    if (directions.includes(direction.toLowerCase())) {
        console.log(`Ahoy! Sailing ${direction}...`);
    } else {
        console.log("⚓ Invalid direction, matey!");
    }
}

function findIsland(name) {
    return islands.filter(island => island.toLowerCase().includes(name.toLowerCase()));
}

// Dummy loop to simulate lots of data
for (let i = 0; i < 50; i++) {
    console.log(`Patrolling the seas... waypoint ${i+1}`);
}
