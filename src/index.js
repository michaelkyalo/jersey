
  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.parentElement.querySelector('h1').textContent;
      const price = button.parentElement.querySelectorAll('p')[1].textContent;
      
      alert(`You selected: ${product} - ${price}`);
    });
  });
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(`${productName} added to cart!`);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;
}

function showCart() {
  let cartText = cart.map((item, i) => `${i + 1}. ${item.name} - $${item.price}`).join("\n");
  alert("Your cart:\n" + (cartText || "Cart is empty."));
}


function addToCart(product, price) {
  cart.push({ name: product, price: price });
  document.getElementById("cart-count").textContent = cart.length;
  alert(`${product} added to cart!`);
}

function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  let message = "Items in your cart:\n";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - $${item.price}\n`;
  });
  alert(message);
}
