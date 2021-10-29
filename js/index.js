// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  
  let subtotalprice = price.innerHTML * quantity.value;
  subtotal.innerHTML = subtotalprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test
  let tbodyjs = document.querySelector('tbody');
  let hilera = document.createElement('tr');
  let celda = document.createElement('td');
  let textoCelda = document.createTextNode('textoCelda');
  

  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
  hilera.appendChild(celda);
  tbodyjs.appendChild(hilera);
  
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
  hilera.appendChild(celda);
  tbodyjs.appendChild(hilera);
  
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
