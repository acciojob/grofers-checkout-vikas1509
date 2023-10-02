const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll('.price');
  let totalPrice = 0;

  // Loop through the price elements and calculate the total price
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  // Display the total price
  alert(`Total Price: Rs. ${totalPrice.toFixed(2)}`);
};

getSumBtn.addEventListener("click", getSum);
