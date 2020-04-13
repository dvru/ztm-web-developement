const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 2,
    grapes: 10
}
//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}
//2
basket.forEach(item => {
    console.log(item)
})


// for of 
// Iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - return properties
// enumerating - for objects
for (item in detailedBasket) {
    console.log(item);
}



