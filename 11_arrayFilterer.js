// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    // Use the filter method to create a new array with products that match the criterion
    return products.filter(product => {
        // Iterate over each key in the criterion object
        for (let key in criterion) {
            // Check if the product has the property defined in the criterion and if it matches the criterion value
            if (product[key] === undefined || product[key] !== criterion[key]) {
                return false; // If the product doesn't match the criterion, exclude it
            }
        }
        return true; // Include the product if it matches all the criteria
    });
}


const products = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "Shirt", category: "clothing", price: 29 },
    { name: "Coffee Maker", category: "Kitchen", price: 49 },
    { name: "Headphones", category: "Electronics", price: 199 }
];

const criterion = { category: "Electronics" };

let filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts);