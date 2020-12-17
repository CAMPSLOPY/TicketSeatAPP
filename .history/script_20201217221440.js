const container = document.querySelector(".container");

const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

populateUI();

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
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  // map through the arr

  // return a new arr of indexes

  // saving our function to LOCAL STORAGE
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  // JSON.stringify is used to turn an array into a string...

  const selectedSeatCount = selectedSeats.length;

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

//  this function will be used to get data from the  local storage and to populate the Ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedseats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  // json.parse is used to turn an element into an array
}
// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  // we are using the (+) to turn the string into a number.
  updateCountedSeats();
});
