const button = document.querySelector(".scroll");

button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});