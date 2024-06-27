// The Asynchronous Shopper: Imagine you are building an online shopping application.Write an asynchronous function called placeOrder that simulates placing an order and returns a promise.The promise should resolve with an order confirmation message after a random delay.

async function placeOrder(item) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 3000; // Random delay between 0 and 3000 milliseconds
        setTimeout(() => {
            const message = `${item} purchased`;
            resolve(message);
            // console.log(message);
        }, delay);
    });
}

async function main() {
    try {
        const confirmation = await placeOrder("Bag");
        console.log("Order placed:", confirmation);
    } catch (error) {
        console.error("Error placing order:", error);
    }
}

main();




