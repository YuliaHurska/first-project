
let submitBtn = document.getElementById("btn");
let inputName = document.querySelector(".form__info-input__name input");
let inputDescription = document.querySelector(".form__info-input__description textarea");
let inputPrice =  document.querySelector(".form__info-input__price input");
let inputImg = document.querySelector(".form__info-input__photo input");

let container = document.querySelector(".form__button-container");
let changeBtn = document.createElement("button");
changeBtn.classList.add("change-btn");
changeBtn.innerText = "change";
container.appendChild(changeBtn);

let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

submitBtn.addEventListener("click", () => {
  let productName=inputName.value;
  let productDescription = inputDescription.value;
  let productPrice = inputPrice.value;
  let productImg = inputImg.value;
  const id = Date.now().toString();

function createProduct(name,id,description,price,img){
               
    class Product {
        constructor(name,id,description,price,img) {
            this.name = name;
            this.id = id;
            this.description = description;
            this.price = price;
            this.img = img;
        }
    }

    const newProduct = new Product(name,id,description,price,img);
    let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (!Array.isArray(savedProducts)) {
      savedProducts = [];
    }

    // Додаємо новий продукт до масиву
    savedProducts.push(newProduct);

    // Зберігаємо оновлений масив продуктів у localStorage
    localStorage.setItem("products", JSON.stringify(savedProducts));
    }
    createProduct(productName,id,productDescription,productPrice,productImg); 
    inputName.value = "";
    inputDescription.value = "";
    inputImg.value = "";
    inputPrice.value = "";
    console.log(localStorage);
});


let findObj = JSON.parse(localStorage.getItem("changed"));

console.log(localStorage);

changeBtn.addEventListener("click", () => {
  const index = savedProducts.findIndex(item => item.id === findObj.id);
  
  if (index !== -1) { 

      savedProducts[index].name = inputName.value;
      savedProducts[index].img = inputImg.value;
      savedProducts[index].description = inputDescription.value;
      savedProducts[index].price = inputPrice.value;

      localStorage.setItem("products", JSON.stringify(savedProducts));
      
      window.location.href = "/index.html"

  } else {
      alert("Product not found!"); 
  }
  inputName.value = "";
  inputDescription.value = "";
  inputImg.value = "";
  inputPrice.value = "";
})

let changedOBJ = JSON.parse(localStorage.getItem("changed"))|| [];

if(typeof changedOBJ.id !== "undefined"){

document.querySelector(".form__info-input__name input").value = changedOBJ.name;
document.querySelector(".form__info-input__description textarea").value = changedOBJ.description;
document.querySelector(".form__info-input__price input").value = changedOBJ.price;
document.querySelector(".form__info-input__photo input").value = changedOBJ.img;

}else{
  inputName.value = "";
}
console.log(changedOBJ.value)

































// const addBtn = document.getElementById("btn");
// const inputName = document.querySelector(".form__info-input__name input");
// const inputDescription = document.querySelector(".form__info-input__description textarea"); 
// const inputPrice = document.querySelector(".form__info-input__price input");
// const inputImg = document.querySelector(".form__info-input__photo input");
// const products = document.querySelector(".products");

// addBtn.addEventListener("click", () => {
//     // Отримуємо дані з інпутів
//     const productName = inputName.value;
//     const productDescription = inputDescription.value;
//     const productPrice = inputPrice.value;
//     const productImg = inputImg.value;

//     const productId = Date.now().toString();
//     // Створюємо новий об'єкт продукту
//     const newProduct = {
//         name: productName,
//         description: productDescription,
//         price: productPrice,
//         img: productImg,
//         id:productId
//     };

//     // Отримуємо збережені продукти з localStorage
//     let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

//     // Додаємо новий продукт до масиву
//     savedProducts.push(newProduct);

//     // Зберігаємо оновлений масив продуктів у localStorage
//     localStorage.setItem("products", JSON.stringify(savedProducts));

//     // Очищаємо значення інпутів
//     inputName.value = "";
//     inputDescription.value = "";
//     inputPrice.value = "";
//     inputImg.value = "";
// });















