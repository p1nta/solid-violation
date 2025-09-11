// This code violates the Liskov Substitution Principle
// class Bird {
//     fly(): void {
//         console.log('Flying high!');
//     }
// }

// // Penguin is a bird that can't fly, breaking LSP
// class Penguin extends Bird {
//     fly(): void {
//         throw new Error("Sorry, I can't fly!");
//     }

//     swim(): void {
//         console.log('Swimming!');
//     }
// }

// // This function breaks when using a Penguin
// function makeTheBirdFly(bird: Bird) {
//     bird.fly();  // Will throw error for Penguin
// }

class Bird {

}

class FlyingBird extends Bird {
    fly(): void {
        console.log('Flying high!');
    }
}
class Penguin extends Bird {
    swim(): void {
        console.log('Swimming!');
    }
}

function makeTheBirdFly(bird: FlyingBird) {
    bird.fly();
}

// Usage:
const eagle = new FlyingBird();
makeTheBirdFly(eagle);  // Works

const penguin = new Penguin();
// makeTheBirdFly(penguin); // Compile error, can't fly
