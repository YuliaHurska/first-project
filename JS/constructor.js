
const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

let cardContainer = document.querySelector(".products");
let curent = "грн";

function createCard(text, info, container, saved) {
  let cardName = document.createElement("div");
  cardName.classList.add("product__card");
  cardName.id = info.id;

let cardImgContainer = document.createElement("div");
let cardImg = document.createElement("img");
cardImgContainer.classList.add("product__img");
  cardImg.src = info.img;
  cardImg.alt = "albom-photo";
  cardImgContainer.appendChild(cardImg);
  cardName.appendChild(cardImgContainer);
  

  let cardTittle = document.createElement("h3");
  
  cardTittle.classList.add("product__tittle")
  cardTittle.innerText = text;
  
  container.appendChild(cardName);
  cardName.appendChild(cardTittle);

  let cardDescription = document.createElement("div");
  cardDescription.classList.add("product__description");
  cardDescription.innerText = info.description;
  cardTittle.appendChild(cardDescription);
  
  

  let cardPrice = document.createElement("div");
  cardPrice.classList.add("product__price");
  cardPrice.innerText = info.price + ` ${curent}`;
  cardName.appendChild(cardPrice);
;
  let changeBtn = document.createElement("button");
  let delBtn = document.createElement("button");

  function createButton() {

    let buttonsPass = document.getElementById(cardName.id);
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn__container")
    delBtn.classList.add("change-btn");
    delBtn.innerText = "delate";
    buttonsPass.appendChild(btnContainer);
    btnContainer.appendChild(delBtn);

    changeBtn.classList.add("change-btn");
    changeBtn.innerText = "change";
    btnContainer.appendChild(changeBtn);
  }
  createButton(cardName);

  changeBtn.addEventListener("click", () => {
    localStorage.setItem("productIndex", info.id);
    let idOfChangedProduct = localStorage.getItem("productIndex");
    if (typeof idOfChangedProduct !== "undefined") {
      let findObj = saved.find((item) => item.id === idOfChangedProduct);
      localStorage.setItem("changed", JSON.stringify(findObj));
    }

    window.location.href = "/form.html";
  });
  delBtn.addEventListener("click", () => {
    // console.log(indexOf.cardInfo);
    let index = saved.findIndex((item) => item.id === info.id);
    if (index !== -1) {
      saved.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(saved));
      location.reload();
    }
  });

  localStorage.removeItem("changed");
  localStorage.removeItem("productIndex");
}
//// витягую ІД
function getProductId() {
  let cardsId = [];
  for (let i = 0; i < savedProducts.length; i++) {
    let cardInfo = savedProducts[i];
    console.log(savedProducts[i]);
    cardsId.push(cardInfo.id);
    createCard(cardInfo.name, cardInfo, cardContainer,savedProducts);
  }
}
getProductId();

// пошук по назві
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    const searchText = this.value.trim(); // Отримуємо введений текст і видаляємо зайві пробіли
    search(searchText); // Викликаємо функцію пошуку з введеним текстом
});
function search(text) {
    const products = document.querySelectorAll(".product__card"); // Отримуємо всі елементи, які мають клас "product_card"
    
    products.forEach(product => {
        const name = product.innerText.toLowerCase(); // Отримуємо текст елементу у нижньому регістрі
        if (name.includes(text.toLowerCase())) {
          product.style.display = "flex"; // Показуємо елемент, якщо текст відповідає введеному
        } else {
          product.style.display = "none"; // Ховаємо елемент, якщо текст не відповідає введеному
        }
    });
}