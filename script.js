const getTotalPriceBtn = document.getElementById("getTotalPriceBtn");
const table = document.querySelector("table");

const calculateTotalPrice = () => {
  const priceElements = document.querySelectorAll(".price");
  let totalPrice = 0;

  // Loop through the price elements and calculate the total price
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  // Create a new row for the total price
  const newRow = table.insertRow(-1); // -1 inserts the row at the end of the table
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.innerHTML = "<b>Total Price:</b>";
  cell2.innerHTML = `<b>Rs. ${totalPrice.toFixed(2)}</b>`;
};

getTotalPriceBtn.addEventListener("click", calculateTotalPrice);
