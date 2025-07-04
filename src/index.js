
  // Grab all Buy buttons
  const buyButtons = document.querySelectorAll('.buy-btn');

  // Add click event to each button
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.parentElement.querySelector('h1').textContent;
      const price = button.parentElement.querySelectorAll('p')[1].textContent;
      
      alert(`You selected: ${product} - ${price}`);
      
      // You can replace alert with actual cart logic like:
      // addToCart({ name: product, price: price });
    });
  });


