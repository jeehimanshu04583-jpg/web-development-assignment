let budget = 500, total = 0;
let cards = document.querySelectorAll(".card h2");

document.querySelector("button").onclick = function() {
    let name = document.querySelector('input[type="text"]').value;
    let amount = Number(document.querySelector('input[type="number"]').value);

    if (name == "" || amount <= 0) {
        alert("Enter valid details");
        return;
    }

    total += amount;
    cards[1].innerText = "₹" + total;
    cards[2].innerText = "₹" + (budget - total);
};