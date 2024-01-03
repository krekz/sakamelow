
let products= null;
fetch('product.json')
.then(response => response.json())
.then(data => {

  products = data;

  var productRow = document.getElementById('productRow');

  products.forEach(product => {
    var card = document.createElement('div');
    card.className = 'col-sm-4',"col-sm-4-menu";
    card.style = 'padding: 10px 10px;width:300px';

    card.innerHTML = `
      <div class="card card-cascade card-ecommerce wider shadow mb-5" style=" margin-left: auto; margin-right: auto;">
        <div class="view view-cascade overlay text-center">
          <img class="card-img-top img-fluid w-75 rounded mt-5" src="${product.image}" alt="${product.name}">
        </div>
        <div class="card-body card-body-cascade text-center">
          <h4 class="card-title"><strong>${product.name}</strong></h4>
          <p class="card-text text-center" style="margin-left: auto; margin-right: auto;">${product.description}</p>
          <p class="price fs-2 text-danger">RM${product.price}</p>
          <div class="card-footer bg-transparent">
            <button type="button" class="btn add-to-cart btn-warning p-2 w-100">Add to cart</button>
          </div>
        </div>
      </div>
    `;

    productRow.appendChild(card);
  });


})
