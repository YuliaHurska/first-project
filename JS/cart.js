let cardProduct = JSON.parse(localStorage.getItem("cardItems"));
//  console.log(cardProduct[0]);
let cartContainer = document.querySelector(".cart__container");
let curent = "грн";
function cartSumm(){
    let count = 0;
    for(let i = 0; i < cardProduct.length; i++){
        let num = parseFloat(cardProduct[i].price);
        let counts = parseFloat(cardProduct[i].quantity); // Перевірка як числового значення
        if (!isNaN(num)) { // Перевірка на NaN
            count += num * counts;
        }
    }
    return count;
}
let cartSumContainer = document.createElement("div");
  cartSumContainer.innerText = cartSumm() + "грн";
  cartContainer.appendChild(cartSumContainer); 
if (cardProduct.length > 0) {
  
  let clearBtn = document.createElement("button");
  clearBtn.innerText = "clear All";
  cartContainer.appendChild(clearBtn);
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("cardItems");
    window.location.reload();
  });
}

for (let i = 0; i < cardProduct.length; i++) {
  getProductIngo(i);
}
function getProductIngo(i) {
  //   console.log(cardProduct[0]);
  createCard(cardProduct[i], cartContainer);
}
function createCard(element, cartContainer) {
  let cardName = document.createElement("div");
  cardName.classList.add("product__card");
  cardName.id = element.id;

  let cardTittle = document.createElement("h3");
  cardTittle.innerText = element.name;
  cartContainer.appendChild(cardName);
  cardName.appendChild(cardTittle);

  let cardImg = document.createElement("img");
  cardImg.classList.add("product__img");
  cardImg.src = element.img;
  cardImg.alt = "albom-photo";
  cardName.appendChild(cardImg);

  let cardDescription = document.createElement("div");
  cardDescription.classList.add("product__description");
  cardDescription.innerText = element.description;
  cardName.appendChild(cardDescription);

  let cardPrice = document.createElement("div");
  cardPrice.classList.add("product__price");
  cardPrice.innerText = element.price + ` ${curent}`;
  cardName.appendChild(cardPrice);
  
}



