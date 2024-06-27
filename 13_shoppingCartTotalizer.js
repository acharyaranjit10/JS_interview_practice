// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const products = [
    { price: 150, quantity: 5 },
    { price: 350, quantity: 2 },
    { price: 15, quantity: 1 },
    { price: 10, quantity: 20 }
];

function calculateTotal(products) {
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.price * product.quantity;
    });
    return totalPrice;
};

(function print() {
    const totalCost = calculateTotal(products);
    console.log(`the total Price is ${totalCost}`);
})();