const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

let cardContainer = document.querySelector(".cards-container");
let curent = "грн";


function createBtn(naming, itClass, pass) {
  let button = document.createElement("button");
  button.classList.add(itClass);
  button.innerText = naming;
  pass.appendChild(button);
  return button;
}
// createBtn();

function createProductCard(text, info, container) {
  let cardName = document.createElement("div");
  cardName.classList.add("storage__card");
  cardName.id = info.id;

  let cardTittle = document.createElement("h3");
  cardTittle.innerText = text;
  container.appendChild(cardName);
  cardName.appendChild(cardTittle);

  let cardImg = document.createElement("img");
  cardImg.classList.add("storage__img");
  cardImg.src = info.img;
  cardImg.alt = "albom-photo";
  cardName.appendChild(cardImg);

  let cardDescription = document.createElement("div");
  cardDescription.classList.add("storage__description");
  cardDescription.innerText = info.description;
  cardName.appendChild(cardDescription);

  let cardPrice = document.createElement("div");
  cardPrice.classList.add("storage__price");
  cardPrice.innerText = info.price + ` ${curent}`;
  cardName.appendChild(cardPrice);

  let btnClass = "buy-btn";
  let btnText = "Buy";
  let buyBtn = createBtn(btnText, btnClass, cardName);


  buyBtn.addEventListener("click", () => {
    // Отримуємо ідентифікатор товару, який додається до корзини
    const productId = info.id;

    // Отримуємо список товарів у корзині з localStorage
    let cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];

    // Перевіряємо, чи товар вже є у корзині
    const existingItem = cardItems.find((item) => item.id === productId);
    
    if (!document.getElementById(cardName.id).querySelector(".delate-btn")) {
      
      let delBtnClass = "delate-btn";
      let delBtnText = "Delate";
      let delBtn = createBtn(delBtnText,delBtnClass,cardName);
      // Додаємо обробник події для кнопки "Delete"
      delBtn.addEventListener("click", () => {
        let cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
        const existingItem = cardItems.find((item) => item.id === productId);
        if (existingItem && existingItem.quantity >1) {
          existingItem.quantity--; 
          localStorage.setItem("cardItems", JSON.stringify(cardItems)); // Оновлюємо localStorage
          console.log("Quantity decremented successfully!");
          console.log(existingItem.quantity);
      } else {
          let index = cardItems.findIndex(item => item.id === productId);
          if (index !== -1) {
              cardItems.splice(index, 1);
              localStorage.setItem("cardItems", JSON.stringify(cardItems)); // Оновлюємо localStorage
              console.log("Deleted!");
            delBtn.remove();

          };
          }
      
      });
    }
    if (existingItem) {
      
      existingItem.quantity++;
      
    } else {
     
      cardItems.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem("cardItems", JSON.stringify(cardItems)); // Оновлюємо дані у localStorage
    console.log("Quantity decremented successfully!");
    console.log(existingItem.quantity);


    
    localStorage.setItem("cardItems", JSON.stringify(cardItems));

    
    localStorage.removeItem("productIndex");
    localStorage.removeItem("card");

  });
  localStorage.removeItem("changed");
  localStorage.removeItem("productIndex");
  console.log(localStorage);
}


//// витягую ІД
function getProductId() {
  let cardsId = [];
  for (let i = 0; i < savedProducts.length; i++) {
    let cardInfo = savedProducts[i];
    cardsId.push(cardInfo.id);
    createProductCard(cardInfo.name, cardInfo, cardContainer);
  }
}
getProductId();

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    const searchText = this.value.trim(); 
    search(searchText); 
});
function search(text) {
    const products = document.querySelectorAll(".storage__card"); 
    
    products.forEach(product => {
        const name = product.innerText.toLowerCase(); 
        if (name.includes(text.toLowerCase())) {
          product.style.display = "block"; 
        } else {
          product.style.display = "none"; 
        }
    });
}