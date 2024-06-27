// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffeeType) {
    const delay = Math.random() * 3000; // Calculate the random delay (0 to 3000 milliseconds)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your coffee: ${coffeeType} is ready`); // Resolve with the message after the delay
        }, delay);
    });
}


brewCoffee("latte").then((message) => {
    console.log(message); // Logs: Your coffee: latte is ready (after a random delay)
});

brewCoffee("mocha").then((message) => {
    console.log(message); // Logs: Your coffee: mocha is ready (after a random delay)
});
