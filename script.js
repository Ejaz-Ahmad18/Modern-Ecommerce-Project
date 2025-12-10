// AOS Animation

AOS.init({ 
    duration: 1000,
     once: true ,
    });

// mobile menu

const hamburger = document.getElementById("hamburgerBtn");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//dropdown logic

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.querySelector(".dropdown-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((d) => d.classList.remove("active"));
    dropdown.classList.toggle("active");
  });
});

document.addEventListener("click", () => {
  dropdowns.forEach((d) => d.classList.remove("active"));
});

// search button animation

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("hide");
};

closeSearch.onclick = () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("hide");
};
