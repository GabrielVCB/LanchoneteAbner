let cart = {
    hamburguer: { price: 10, quantity: 1 },
    refrigerante: { price: 5, quantity: 1 },
  };
  
  function updateTotal() {
    const totalPrice = Object.values(cart).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    document.getElementById("total-price").textContent = totalPrice.toFixed(2).replace('.', ',');
  }
  
  function incrementItem(itemName) {
    cart[itemName].quantity++;
    document.getElementById(`${itemName}-quantity`).textContent =
      cart[itemName].quantity;
    updateTotal();
  }
  
  function decrementItem(itemName) {
    if (cart[itemName].quantity > 0) {
      cart[itemName].quantity--;
      document.getElementById(`${itemName}-quantity`).textContent =
        cart[itemName].quantity;
      updateTotal();
    }
  }
  