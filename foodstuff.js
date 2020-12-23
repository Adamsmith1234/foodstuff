const prompt = require('prompt-sync')();

let headflips = 0
let tailflips = 0
let side 

function coinflip() {
    for (let i = 0; i < 100; i++ ) {
        let outcome = Math.random()
        if (outcome < 0.5) {
            headflips = headflips + 1
            side = "Heads"
        }
        if (outcome > 0.5) {
            tailflips = tailflips + 1
            side = "Tails"
        }
        
    }


    console.log(headflips)
    // console.log("Tails: " + tailflips)
    // console.log("---------------")
    
}

for (let p = 0; p < 1000; p++) {
    headflips = 0
    tailflips = 0
    coinflip()
}
