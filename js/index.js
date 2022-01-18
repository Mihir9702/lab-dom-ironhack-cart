// ITERATION 1

const total = document.querySelector("#total-value span");



// function updateSubtotal(product) {
//   subtotal.innerHTML = Number(price.innerHTML) * amount.value;
// }


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelectorAll('.product');
  // updateSubtotal(singleProduct);
  // end of test
  const price = document.querySelectorAll(".price span"); 
  const amount = document.querySelectorAll(".amount");
  const subtotal = document.querySelectorAll(".subtotal span");
  const product = document.querySelectorAll(".product");
  
  // ITERATION 2

  let calcTotal = 0;
  for (let i = 0; i < product.length; i++) {
    subtotal[i].innerHTML = (Number(price[i].innerHTML) * amount[i].value).toFixed(2);
    calcTotal += Number(subtotal[i].innerHTML);
  }
 
  

  // ITERATION 3
  total.innerHTML = calcTotal.toFixed(2);

}

// ADD EVENT LISTENER ===

// ITERATION 4

function removeProduct() {

}

// ITERATION 5

function createProduct() {
  
  const tr = document.getElementsByTagName("tbody");
  const createName = document.querySelector("#createName").value;
  const createPrice = document.querySelector("#createPrice").value;
  const newTR = document.createElement("tr");

  newTR.classList.add("product");
  
  newTR.innerHTML =  `
  <td class="name"<span>${createName}</span></td>
  <td class="price">$<span>${createPrice}</span></td>
  <td class="quantity">
  <input class="amount" type="number" value="0" min="0" placeholder="Quantity" /> </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  `
  
  tr[0].appendChild(newTR);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  // Remove Product
  const removeBTN = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBTN.length; i++) {
    const product = document.querySelectorAll(".product");
    removeBTN[i].onclick = () => {
      product[i].style.display = "none";
    }
    // removeBTN[i].addEventListener("click", removeProduct(removeBTN[i]));
  }

  // for (let i = 0; i < removeBTN.length; i++) {
  //   removeBTN[i].onclick = () => {
  //     product[i].style.display = "none";
  //   }
  // }

  // Create Product
  const create = document.getElementById("create");
  create.addEventListener('click', createProduct);

  //... your code goes here
});
