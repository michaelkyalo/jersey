
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
fetch('../data/jerseys.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateCartCount();
  alert(`${name} added to cart.`);
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let cartContent = "🛒 Your Cart:\n\n";
  cart.forEach((item, index) => {
    cartContent += `${index + 1}. ${item.name} - $${item.price} [Remove: ${index}]\n`;
  });

  const indexToRemove = prompt(`${cartContent}\nEnter item number to remove or leave blank to cancel:`);

  if (indexToRemove !== null && indexToRemove !== '') {
    const idx = parseInt(indexToRemove) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < cart.length) {
      const removed = cart.splice(idx, 1);
      updateCartCount();
      alert(`Removed: ${removed[0].name}`);
    } else {
      alert("Invalid item number.");
    }
  }
}
