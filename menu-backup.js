document.addEventListener('DOMContentLoaded', function () {
const listProductHTML = document.querySelector('.row');
const iconCart = document.querySelector('.iconCart');
const close = document.querySelector('.close');
const cart = document.querySelector('.cart'); // Add this line

   // Function to toggle the cart visibility
   function toggleCart() {
    cart.style.right = cart.style.right === '-100%' ? '0' : '-100%';
}

function hideCart() {
    cart.style.right = '-100%';
}

function addDataToHTML() {
    listProductHTML.innerHTML = '';

    if (products !== null) {
        products.forEach(product => {
            let newProduct = createProductElement(product);
            listProductHTML.appendChild(newProduct);
        });
    }
}

function createProductElement(product) {
    let newProduct = document.createElement('div');
    newProduct.classList.add('col-md-4', 'rounded', 'text-center');
    newProduct.innerHTML = `
                <img src="${product.image}" class="img-fluid rounded ">
                <h2 class="text-center">${product.name}</h2>
                <div class="price text-center">${product.price}</div>
                <button type="button" class="btn btn-outline-warning">Add to cart</button>`;
    return newProduct;
}

let products = null;
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    });

    

    iconCart.addEventListener('click', toggleCart);
    close.addEventListener('click', hideCart);

});