export function createMenuList(parent) {
  let list = document.createElement("ul");
  list.classList.add("header__list");
  parent.appendChild(list);
  return list;
}

export function createMenuElement(menuList, search, text, aHref, counter, icon) {
  let menuElement = document.createElement("li");

  if (search) {
      let elemSearch = document.createElement("search");
      let searchForm = document.createElement("form");
      let searchInput = document.createElement("input");
      searchInput.id = "searchInput";
      searchInput.placeholder = "Search for";
      searchInput.name = "search";
      elemSearch.appendChild(searchForm);
      searchForm.appendChild(searchInput);
      menuElement.appendChild(elemSearch);
  } else {
      let menuLink = document.createElement("a");
      menuLink.href = aHref;
      menuLink.innerText = text;

      if (icon) {
          let elemIcon = document.createElement("img");
          elemIcon.src = icon;
          menuLink.appendChild(elemIcon);
      }

      if (counter) {
          let elemCounter = document.createElement("div");
          elemCounter.classList.add(counter);
          menuLink.appendChild(elemCounter);
      }

      menuElement.appendChild(menuLink);
  }

  menuList.appendChild(menuElement);
}




// Оновлення кількості товарів у кошику
export function updateCartSum() {
  let cartsQuantity = JSON.parse(localStorage.getItem("cardItems")) || [];
  let count = 0;
  for (let i = 0; i < cartsQuantity.length; i++) {
    count += cartsQuantity[i].quantity;
  }
  
  let cardCounter = document.querySelector(".cart__counter");
  if (cardCounter) {
    cardCounter.innerText = count;
  }
}

updateCartSum();
