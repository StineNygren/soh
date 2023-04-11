const sideBar = document.querySelector(".sidebar");
const toggleButton = document.querySelector(".toggle-butten");

toggleButton.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

function myFunction(x) {
  x.classList.toggle("fa-x");
}
