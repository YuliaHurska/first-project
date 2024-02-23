document.addEventListener("DOMContentLoaded", () => {
  import("./header.js").then(({ createMenuElement, createMenuList }) => {
    // Створення списку меню та елементів меню
    const headerContainer = document.querySelector(".header__menu");
    const menuList = createMenuList(headerContainer);

    createMenuElement(menuList, false, "main", "/index.html");
    createMenuElement(menuList, true);
    createMenuElement(menuList,false, "New Product","/form.html",false,false
    );
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const cardContainer = document.querySelector(".products");
    const curent = "грн";
    const searchInput = document.getElementById("searchInput");

    // функціястворення для кожного продукту власних кнопок
    function createCardButton(parentElement, info) {
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("btn__container");

      const changeBtn = document.createElement("button");
      changeBtn.classList.add("change-btn");
      changeBtn.innerText = "change";
      changeBtn.addEventListener("click", () => {
        changeProduct(info);
      });

      const delBtn = document.createElement("button");
      delBtn.classList.add("change-btn");
      delBtn.innerText = "delate";
      delBtn.addEventListener("click", () => {
        deleteProduct(info.id);
      });

      btnContainer.appendChild(changeBtn);
      btnContainer.appendChild(delBtn);
      parentElement.appendChild(btnContainer);
    }

    function createCard(text, info) {
      const cardName = document.createElement("div");
      cardName.classList.add("product__card");
      cardName.id = info.id;

      const cardImgContainer = document.createElement("div");
      cardImgContainer.classList.add("product__img");
      cardImgContainer.innerHTML = `<img src="${info.img}" alt="albom-photo">`;
      cardName.appendChild(cardImgContainer);

      const cardTittle = document.createElement("h3");
      cardTittle.classList.add("product__tittle");
      cardTittle.innerText = text;
      cardName.appendChild(cardTittle);

      const cardDescription = document.createElement("div");
      cardDescription.classList.add("product__description");
      cardDescription.innerText = info.description;
      cardTittle.appendChild(cardDescription);

      const cardPrice = document.createElement("div");
      cardPrice.classList.add("product__price");
      cardPrice.innerText = info.price + ` ${curent}`;
      cardName.appendChild(cardPrice);

      createCardButton(cardName, info);

      cardContainer.appendChild(cardName);
    }

    function deleteProduct(id) {
      if (confirm("delete this disk?")) {
        const index = savedProducts.findIndex((item) => item.id === id);
        if (index !== -1) {
          savedProducts.splice(index, 1);
          localStorage.setItem("products", JSON.stringify(savedProducts));
          location.reload();
        }
      } else {
        console.log("whoooh almoust...");
      }
    }
    //функція переносить данні цього продукту у табличку де їх можна редагувати
    function changeProduct(info) {
      localStorage.setItem("productIndex", info.id);
      const idOfChangedProduct = localStorage.getItem("productIndex");
      const findObj = savedProducts.find(
        (item) => item.id === idOfChangedProduct
      );
      localStorage.setItem("changed", JSON.stringify(findObj));
      window.location.href = "/form.html";
    }

    function renderProducts() {
      savedProducts.forEach((product) => {
        createCard(product.name, product);
      });
    }

    function search(text) {
        const products = document.querySelectorAll(".product__card");
        products.forEach((product) => {
            const name = product.innerText.toLowerCase();
            product.style.display = name.includes(text.toLowerCase()) ? "flex" : "none";
        });
    }

    searchInput.addEventListener("input", function () {
        search(this.value.trim());
    });

    renderProducts();
  });
});
