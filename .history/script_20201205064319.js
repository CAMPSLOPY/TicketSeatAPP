const container = document.querySelector(".container");

const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const ticketPrice = +movieSelect.value;


// seat select event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateCountedSeats();
  }
});

// update total and count
function updateCountedSeats() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatCount = selectedSeats.length;

 count.innerText = selectedSeatCount;
 total.innerText = selectedSeatCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener('click', (e) =>)