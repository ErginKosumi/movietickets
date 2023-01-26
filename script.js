const book = document.getElementById("book");
let navbar = document.querySelector(".navbar");
let container = document.querySelector(".container");
let movies = document.querySelector(".movies1");
let myBookings = document.getElementById("my-bookings");
let bookings = document.querySelector(".booked-list");
const imgElements = document.getElementsByClassName('img');
// Open form
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const form = document.getElementById("form");
const form1 = document.getElementById("form1");
let movieName = ["Avengers - Infinity War", "Black Panther - Long Live the King"]

if (!localStorage.getItem("username") || !localStorage.getItem("password")) {
    window.location.href = "signup.html";
}

myBookings.addEventListener('click', () => {
    bookings.style.display = "block";
})

document.getElementById("btn-book").addEventListener("click", function () {

    localStorage.setItem("MovieName", document.getElementById("movie-namee").value);
    localStorage.setItem("Name", document.getElementById("name").value);
    localStorage.setItem("Email", document.getElementById("email").value);

    var input = document.getElementById("movie-namee").value;
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = localStorage.getItem("MovieName");
    ul.appendChild(li);
    document.querySelector(".booked-list").appendChild(ul);
    document.querySelector(".booked-list").style.display = "block";
    removeBook();
});


for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].addEventListener('click', function () {
        book.style.display = "block";
        navbar.style.opacity = 0.5;
        container.style.opacity = 0.5;
        movies.style.opacity = 0.5;
        document.body.style.overflow = "hidden"
        startInterval();
    });
    book.addEventListener('click', function () {
        stopInterval();
    });
}

function removeBook() {
    book.style.display = "none";
    navbar.style.opacity = 1;
    container.style.opacity = 1;
    movies.style.opacity = 1;
    document.body.style.overflow = "auto"
}

let intervalId;

function startInterval() {
    intervalId = setInterval(function () {
        removeBook();
    }, 3000);
}

function stopInterval() {
    clearInterval(intervalId);
}

function logout() {
    localStorage.clear();
    window.location.href = "signup.html";
}

// Open form

btn.addEventListener('click', () => {
    form.style.display = "block"
    btn.textContent = "Cancel"
    document.getElementById("movie-name").value = movieName[0]
    btn.addEventListener('click', () => {
        form.style.display = "none"
        return btn.textContent = "Book this movie"
    })
})

btn1.addEventListener('click', () => {
    form1.style.display = "block"
    btn1.textContent = "Cancel"
    document.getElementById("movie-name1").value = movieName[1]
    btn1.addEventListener('click', () => {
        form1.style.display = "none"
        return btn1.textContent = "Book this movie"
    })
})