document.addEventListener("DOMContentLoaded", () => {
  import("./header.js").then(({ createMenuElement, createMenuList }) => {
    // Створення списку меню та елементів меню
    const headerContainer = document.querySelector(".header__menu");
    const menuList = createMenuList(headerContainer);

    createMenuElement(menuList, false, "main", "/index.html");
    createMenuElement(menuList, false, "storage", "/storage.html");
    createMenuElement(
      menuList,
      false,
      "cart",
      "/cart.html",
      "cart__counter",
      "/img/cart.svg"
    );
    let cardCounter = document.querySelector(".cart__counter");
    function cartSum() {
      let cartsQuantity = JSON.parse(localStorage.getItem("cardItems")) || [];
      let countiti = 0;
      for (let i = 0; i < cartsQuantity.length; i++) {
        console.log(cartsQuantity[i].quantity);
        countiti += cartsQuantity[i].quantity;
      }
      return countiti;
    }
    cartSum();
    function updCarSumm() {
      cardCounter.innerText = `${cartSum()}`;
    }

    updCarSumm();

    let cardProduct = JSON.parse(localStorage.getItem("cardItems"));
    let cartContainer = document.querySelector(".cart__container");
    let curent = "грн";

    // підрахунок суми кошика

    function cartSumm() {
      let count = 0;
      for (let i = 0; i < cardProduct.length; i++) {
        let num = parseFloat(cardProduct[i].price);
        let counts = parseFloat(cardProduct[i].quantity);
        if (!isNaN(num)) {
          count += num * counts;
        }
      }
      return count;
    }

    let cartSumContainer = document.createElement("div");
    cartSumContainer.classList.add("cart__sum");
    cartSumContainer.innerText = cartSumm() + "грн";
    cartContainer.appendChild(cartSumContainer);

    if (cardProduct.length > 0) {
      let btnText = "clear All";
      let btnClass = "cart-clear__btn";
      let clearBtn = createBtn(btnText, btnClass, cartContainer);

      clearBtn.addEventListener("click", () => {
        localStorage.removeItem("cardItems");
        window.location.reload();
      });
    }

    for (let i = 0; i < cardProduct.length; i++) {
      getProductIngo(i);
    }

    function getProductIngo(i) {
      createCard(cardProduct[i], cartContainer);
    }

    function createCard(element, cartContainer) {
      let cardName = document.createElement("div");
      cardName.classList.add("product__card");
      cardName.id = element.id;

      let cardImg = document.createElement("img");
      cardImg.classList.add("product__img");
      cardImg.src = element.img;
      cardImg.alt = "albom-photo";
      cardName.appendChild(cardImg);

      let cardTittle = document.createElement("h3");
      cardTittle.innerText = element.name;
      cartContainer.appendChild(cardName);
      cardName.appendChild(cardTittle);

      let cardPrice = document.createElement("div");
      cardPrice.classList.add("product__price");
      cardPrice.innerText = element.price + ` ${curent}`;
      cardName.appendChild(cardPrice);

      let btnContainer = document.createElement("div");
      cardName.appendChild(btnContainer);
      let btnClass = "buy-btn";
      let btnText = "plus";
      let plusBtn = createBtn(btnText, btnClass, btnContainer);

      let delBtnClass = "delate-btn";
      let delBtnText = "minus";
      let minusBtn = createBtn(delBtnText, delBtnClass, btnContainer);
      plusBtn.addEventListener("click", () => {
        element.quantity++;
        countersOfProduct.innerText = element.quantity;
        updateCart();
      });

      minusBtn.addEventListener("click", () => {
        if (element.quantity > 0) {
          element.quantity--;
          countersOfProduct.innerText = element.quantity; // Оновлюємо відображення кількості товару
          updateCart(); // Оновлюємо суму кошика та зберігаємо в localStorage
        } else {
          console.log("ok,maybe next time");
        }
      });

      function updateCart() {
        localStorage.setItem("cardItems", JSON.stringify(cardProduct)); // Оновлюємо дані у localStorage
        cartSumContainer.innerText = cartSumm() + "грн"; // Оновлюємо відображення суми кошика
      }
      let countersOfProduct = document.createElement("div");
      countersOfProduct.classList.add("product__counting");
      countersOfProduct.innerText = element.quantity;
      cardName.appendChild(countersOfProduct);
    }

    function createBtn(naming, itClass, pass) {
      let button = document.createElement("button");
      button.classList.add(itClass);
      button.innerText = naming;
      pass.appendChild(button);
      return button;
    }
  });
});
