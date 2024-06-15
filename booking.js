// Mock data for movies and seats
const movies = [
    { title: "Movie 1", genre: "Action", showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"] },
    { title: "Movie 2", genre: "Comedy", showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"] },
    { title: "Movie 3", genre: "Drama", showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"] }
  ];
  
  const bookedSeats = [5, 10, 15]; // Example of booked seats
  
  // Function to generate movie list
  function generateMovieList() {
    const movieListDiv = document.getElementById("movie-list");
    movieListDiv.innerHTML = "";
    movies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.innerHTML = `<h3>${movie.title}</h3>
                            <p>Genre: ${movie.genre}</p>
                            <p>Showtimes: ${movie.showtimes.join(", ")}</p>`;
      movieListDiv.appendChild(movieDiv);
    });
  }
  
  // Function to generate seat map
  function generateSeatMap() {
    const seatMapDiv = document.getElementById("seat-map");
    seatMapDiv.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
      const seatDiv = document.createElement("div");
      seatDiv.classList.add("seat");
      if (bookedSeats.includes(i)) {
        seatDiv.classList.add("booked");
      }
      seatDiv.textContent = i;
      seatMapDiv.appendChild(seatDiv);
    }
  }
  
  // Event listener for form submission
  document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const numTickets = document.getElementById("num-tickets").value;
    const selectedMovie = document.querySelector("#movie-list h3").textContent;
    const selectedShowtime = document.querySelector("#movie-list p:nth-child(3)").textContent.split(": ")[1];
    const totalPrice = numTickets * 10; // Assuming each ticket costs $10
    const confirmationDetails = `Movie: ${selectedMovie}\nShowtime: ${selectedShowtime}\nNumber of Tickets: ${numTickets}\nTotal Price: $${totalPrice}`;
  
    document.getElementById("confirmation-details").textContent = confirmationDetails;
    document.getElementById("confirmation").style.display = "block";
  });
  
  // Initialize the page
  generateMovieList();
  generateSeatMap();
  