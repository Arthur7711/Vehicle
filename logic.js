// menu close part
document.getElementById("closeMenu").addEventListener("click", () => {
  document.querySelectorAll(".sp").forEach((el) => (el.style.display = "none"));
  document.querySelector(".openMenu").style.display = "block";
  document.querySelector(".closeMenu").display = "none";
  document.querySelector(".navigate").style.width = "50px";
});

// menu item selecting
document.querySelectorAll(".menuItem").forEach((el, i) => {
  el.addEventListener("click", () => {
    document
      .querySelectorAll(".menuItem")
      .forEach((elem) => elem.classList.remove("activeItem"));
    el.classList.add("activeItem");
  });
});
