let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
 
let cards = [];
for(let i= 0;i <savedProducts.length;i++){
let cardInfo = savedProducts[i]
cards.push(cardInfo.id);

}

localStorage.setItem("productIndex",cards[1])
console.log(localStorage);

// function sentID(n){
//     savedProducts.n
// } 

