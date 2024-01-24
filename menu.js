fetch('product.json')
  .then(response => response.json())
  .then(products => {
    const productRow = document.getElementById('productRow');

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('col-sm-4', 'col-sm-4-menu');
      card.style = 'padding: 10px 10px;width:300px';
      card.innerHTML = `
        <div class="card card-cascade card-ecommerce wider shadow mb-5" style=" margin-left: auto; margin-right: auto;">
          <div class="view view-cascade overlay text-center">
            <img class="card-img-top img-fluid w-75 rounded mt-5" src="${product.image}" alt="${product.name}" style="height: 200px;">
          </div>
          <div class="card-body card-body-cascade text-center">
            <h4 class="card-title"><strong>${product.name}</strong></h4>
            <p class="card-text text-center" style="margin-left: auto; margin-right: auto;">${product.description}</p>
            <p class="price fs-2 text-danger">RM${product.price}</p>
            <div class="card-footer bg-transparent">
              <button type="button" class="add-to-cart btn btn-warning p-2 w-100">Add to cart</button>
            </div>
          </div>
        </div>
      `;

      const addToCartButton = card.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', () => {
        addToCart(product);
      });

      productRow.appendChild(card);
    });
  })
let totalPrice=0;
  function addToCart(product) {
    const cartDropdown = document.getElementById('dropdown-menu-parent');
  
    const productId = product.id; 
    const existingCartItem = document.querySelector(`#cart-item-${productId}`);
  
    if (existingCartItem) {
      // if product in cart, just increase value
      const quantityElement = document.querySelector(`#quantity-${productId}`);
      let currentQuantity = parseInt(quantityElement.innerText.split(' ')[2]);
      currentQuantity += 1;

      quantityElement.innerText = `Qty : ${currentQuantity}`;
      totalPrice += product.price;
          updateTotalPrice();
    } else {
      // if no product in cart, then create new
      const cartItem = document.createElement('div');
      cartItem.id = `cart-item-${productId}`;
      cartItem.classList.add('d-flex', 'flex-row', 'justify-content-start', 'p-4', 'mt-3', 'rounded', 'cart-dropdown','w-sm-100','mx-3');
      cartItem.style.backgroundColor = 'rgb(171, 178, 185)';
      cartItem.style.textDecoration = 'none';
      cartItem.innerHTML = `
      <img src="${product.image}" class="img-fluid rounded" style="width: 35%; height: auto;">
      <div class="cart-text" style="margin-left: 10px; flex-grow: 1;">
        <h4>${product.name}</h4>
        <span><h5 id="quantity">Qty : 1</h5></span>
        <button id="minus" class="btn rounded bg-danger">-</button>
        <button id="plus" class="btn rounded bg-success">+</button>
      </div>
      <h4 class="text text-center fw-bold" style="margin-left: auto;">RM${product.price}</h4>
      `;
  
      cartDropdown.appendChild(cartItem);
      totalPrice += product.price;
          updateTotalPrice();
    }
 

  }
  
  let plus = document.querySelector("#plus");
  let minus = document.querySelector("#minus");
  plus.addEventListener("click", function() {
    changeQuantity(1, "+",product);
  });
  minus.addEventListener("click", function() {
    changeQuantity(1, "-",product);
  });

function changeQuantity(productId, operation,product) {
  const quantityElement = document.querySelector(`#quantity`);
  let currentQuantity = parseInt(quantityElement.innerText.split(' ')[2]);
 
  if (operation === '+') {
    currentQuantity++;
    totalPrice += 2;
  } else if (operation === '-') {
    currentQuantity--;;
    totalPrice -= product.price;
  }

  if (currentQuantity === 0) {
    const cartItem = document.getElementById(`cart-item-${productId}`);
    cartItem.parentNode.removeChild(cartItem);
  } else {
    quantityElement.innerText = `Qty : ${currentQuantity}`;
  }
  updateTotalPrice();
}

function updateTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.innerText = `RM${totalPrice}`;
}
//pay now function alert
function payNow() {
  if(totalPrice==0){
    alert('No item in cart');
  }else{
  alert('Thank you for your order!  Please pay at the counter     You need to pay RM'+totalPrice);
  }

}
