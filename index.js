let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

// let buttonContainer = document.querySelector(".products");

let cardContainer = document.querySelector(".products");


function createCard(text,cardInfo) {
    let cardName = document.createElement("div");

    cardName.classList.add("product_card");
    cardName.id = cardInfo.id;
    cardName.innerText = text;
    cardContainer.appendChild(cardName);
    let changeBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    function createButton(){
    let buttonContainer = document.getElementById(cardName.id);
   delBtn.classList.add("change-btn");
   delBtn.innerText = "delate";
    buttonContainer.appendChild(delBtn);
   
    changeBtn.classList.add("change-btn");
    changeBtn.innerText = "change";
    buttonContainer.appendChild(changeBtn);
    }
    createButton(cardInfo);

    changeBtn.addEventListener("click", () => {
        localStorage.setItem("productIndex", cardInfo.id);
        let idOfChangedProduct = localStorage.getItem("productIndex");
        if (typeof idOfChangedProduct !== "undefined") {
            let findObj = savedProducts.find(item => item.id === idOfChangedProduct);
            localStorage.setItem("changed", JSON.stringify(findObj));
        }
        window.open("./form.html");
        
    });
    delBtn.addEventListener("click",()=>{
        // console.log(indexOf.cardInfo);
        let index = savedProducts.findIndex(item => item.id === cardInfo.id);
        if (index !== -1) {
            savedProducts.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(savedProducts));
            location.reload();
        }
        
    })

    localStorage.removeItem("changed");
    localStorage.removeItem("productIndex");
}
  
//// витягую ІД
let cardsId = [];
for (let i = 0; i < savedProducts.length; i++) {
    let cardInfo = savedProducts[i]
    cardsId.push(cardInfo.id);
    createCard(cardInfo.name,cardInfo);
}



// console.log(findObj);



// function sentID(n){
//     savedProducts.n
// } 
