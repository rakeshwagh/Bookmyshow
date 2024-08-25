$(document).ready(function () {
  // document.addEventListener("DOMContentLoaded", function () {
  const snacksContainer = document.getElementById("snacks-container");
  const cartList = document.getElementById("cart-list");
  const totalCost = document.getElementById("total-cost");

  const urlparams = new URLSearchParams(window.location.search);
  const total = urlparams.get("total");
  sessionStorage.setItem("total", total);
  const proceedToBillingLink = document.getElementById(
    "proceed-to-billing-link"
  );
  let cart = [];
  // next

  $(document).on("click", "#proceed-to-billing-link", function () {
    window.location.href = "../../HTML/Feedback3.html";
  });

  // start

  // Sample snacks data in JSON format
  const snacksData = [
    { name: "Burger", price: 200, image: "burger.jpg" },
    { name: "Fries", price: 100, image: "fries.jpg" },
    { name: "Pop Corn", price: 100, image: "popcorn.jpg" },
    { name: "Colddrink", price: 80, image: "colddrink.jpg" },
  ];

  // Display snacks
  snacksData.forEach((snack) => {
    const snackElement = createSnackElement(snack);
    snacksContainer.appendChild(snackElement);
  });

  // Create a snack element
  function createSnackElement(snack) {
    const snackElement = document.createElement("div");
    snackElement.classList.add("snack");

    const imageElement = document.createElement("img");

    imageElement.src = `../IMAGES/snacks/${snack.image}`;
    snackElement.appendChild(imageElement);

    const nameElement = document.createElement("p");
    nameElement.textContent = snack.name;
    snackElement.appendChild(nameElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = `${snack.price} Rs`;
    snackElement.appendChild(priceElement);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(snack));
    snackElement.appendChild(addButton);

    return snackElement;
  }

  // Add snack to the cart
  function addToCart(snack) {
    const existingItem = cart.find((item) => item.name === snack.name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...snack, quantity: 1 });
    }

    updateCart();
  }

  // Remove one quantity of snack from the cart
  function removeFromCart(index) {
    const snack = cart[index];
    if (snack.quantity > 1) {
      snack.quantity--;
    } else {
      cart.splice(index, 1);
    }
    updateCart();
  }

  // Update cart
  function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((snack, index) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${snack.name} - ${snack.price} Rs x ${snack.quantity}`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.addEventListener("click", () => removeFromCart(index));

      cartItem.appendChild(removeButton);
      cartList.appendChild(cartItem);

      total += snack.price * snack.quantity;
    });

    totalCost.textContent = total;
  }

  // Proceed to Billing
  proceedToBillingLink.addEventListener("click", () => {
    alert(
      "Proceeding to billing. Total Amount: " + totalCost.textContent + " Rs"
    );
    sessionStorage.setItem("snack", totalCost.textContent);
    // You can add further logic for navigating to the billing page here
  });
});

// end
