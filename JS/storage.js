document.addEventListener("DOMContentLoaded", () => {
  import("./header.js").then(({createMenuElement, createMenuList}) => {
    // Створення списку меню та елементів меню
    const headerContainer = document.querySelector(".header__menu");
    const menuList = createMenuList(headerContainer);

    createMenuElement(menuList, false, "main", "/index.html");
    createMenuElement(menuList, true);
    createMenuElement(menuList, false, "storage", "/storage.html");
    createMenuElement(
      menuList,
      false,
      "cart",
      "/cart.html",
      "cart__counter",
      "/img/cart.svg"
    );

    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const cardContainer = document.querySelector(".cards__container");
    const curent = "грн";
    let cardCounter = document.querySelector(".cart__counter");

    function updCarSumm() {
      cardCounter.innerText = `${cartSumm()}`;
    }

    updCarSumm();

    function createBtn(naming, itClass, pass) {
      let button = document.createElement("button");
      button.classList.add(itClass);
      button.innerText = naming;
      pass.appendChild(button);
      return button;
    }

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

      let cardBtnContainer = document.createElement("div");
      cardBtnContainer.classList.add("storage__btns");
      cardName.appendChild(cardBtnContainer);

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
      let buyBtn = createBtn(btnText, btnClass, cardBtnContainer);

      buyBtn.addEventListener("click", () => {
        const productId = info.id;

        let cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];

        const existingItem = cardItems.find((item) => item.id === productId);

        if (
          !document.getElementById(cardName.id).querySelector(".delate-btn")
        ) {
          let delBtnClass = "delate-btn";
          let delBtnText = "Delate";
          let delBtn = createBtn(delBtnText, delBtnClass, cardBtnContainer);

          delBtn.addEventListener("click", () => {
            let cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
            const existingItem = cardItems.find(
              (item) => item.id === productId
            );
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity--;
              localStorage.setItem("cardItems", JSON.stringify(cardItems));
            } else {
              let index = cardItems.findIndex((item) => item.id === productId);
              if (index !== -1) {
                cardItems.splice(index, 1);
                localStorage.setItem("cardItems", JSON.stringify(cardItems));
                delBtn.remove();
              }
            }
            updCarSumm();
          });
        }

        if (existingItem) {
          existingItem.quantity++;
        } else {
          cardItems.push({
            img: info.img,
            description: info.description,
            price: info.price,
            name: info.name,
            id: productId,
            quantity: 1,
          });
        }

        localStorage.setItem("cardItems", JSON.stringify(cardItems));
        updCarSumm();

        localStorage.removeItem("productIndex");
        localStorage.removeItem("card");
      });

      localStorage.removeItem("changed");
      localStorage.removeItem("productIndex");
      console.log(localStorage);
    }

    function getProductId() {
      savedProducts.forEach((product) => {
        createProductCard(product.name, product, cardContainer);
      });
    }

    getProductId();

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function () {
      const searchText = this.value.trim();
      search(searchText);
    });

    function search(text) {
      const products = document.querySelectorAll(".storage__card");
      products.forEach((product) => {
        const name = product.innerText.toLowerCase();
        if (name.includes(text.toLowerCase())) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }

    function cartSumm() {
      let cartsQuantity = JSON.parse(localStorage.getItem("cardItems")) || [];
      let count = 0;
      for (let i = 0; i < cartsQuantity.length; i++) {
        console.log(cartsQuantity[i].quantity);
        count += cartsQuantity[i].quantity;
      }
      return count;
    }
  });
});
