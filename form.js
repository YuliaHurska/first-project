
let submitBtn = document.getElementById("btn");
let inputName = document.querySelector(".form__info-input__name input");
let changeBtn = document.createElement("button");
changeBtn.classList.add("change-btn");
changeBtn.innerText = "change";
let container = document.querySelector(".new-product");
container.appendChild(changeBtn);

let savedProducts = JSON.parse(localStorage.getItem("products")) || [];


submitBtn.addEventListener("click", () => {
  let productName=inputName.value;
  const id = Date.now().toString();

function createProduct(a,b){
        
        
    class Product {
        constructor(name,id) {
            this.name = name;
            this.id = id;
        }
    }


  
    const newProduct = new Product(a,b);
    let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (!Array.isArray(savedProducts)) {
      savedProducts = []; // Якщо не масив, створюємо новий порожній масив
    }

    // Додаємо новий продукт до масиву
    savedProducts.push(newProduct);

    // Зберігаємо оновлений масив продуктів у localStorage
    localStorage.setItem("products", JSON.stringify(savedProducts));
    }
    createProduct(productName,id);
    // Отримуємо масив продуктів з localStorage або створюємо порожній масив, якщо він не існує
    

    console.log(localStorage);
});





 
//оновлення данних
changeBtn.addEventListener("click",()=>{
  let findObj = JSON.parse(localStorage.getItem("changed"));
  findObj.name = inputName.value;
  localStorage.setItem("products",JSON.stringify(findObj));
console.log(localStorage);
})

let changedOBJ = JSON.parse(localStorage.getItem("changed"))|| [];
document.querySelector(".form__info-input__name input").value = changedOBJ.name;
// console.log(idOfChangedProduct);
// console.log(findObj);

// console.log();

































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















