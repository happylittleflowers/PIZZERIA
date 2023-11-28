// Program title

document.getElementById("btn").addEventListener("click", placeOrder);

function placeOrder() {
  // INPUT
  let size = document.getElementById("size").value;
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;

  // PROCESS
  let pizzaorder = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  // OUTPUT

  document.getElementById("pizzaorder").innerHTML = pizzaorder;

  document.getElementById("pizza-img").innerHTML =
    '<img width="200px" src="img/pizza.jpg">';
}
