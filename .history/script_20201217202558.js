const container = document.querySelector(".container");

const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

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

  // how to save to local storage
  // copy the selectedseat into an arr by using spread operator
 const seatsIndex = [...selectedSeats].map((seat) =)
  // map through the arr

  // return a new arr of indexes
  
  const selectedSeatCount = selectedSeats.length;

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  // we are using the (+) to turn the string into a number.
  updateCountedSeats();
});
