const btn = document.querySelector(".toggle");
const list = document.querySelectorAll(".item");

btn.addEventListener("click", function () {
  list.forEach(function (list) {
    list.classList.toggle("active");
  });
});
