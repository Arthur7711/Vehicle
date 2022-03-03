// menu close part
document.getElementById("closeMenu").addEventListener("click", () => {
  document.querySelectorAll(".sp").forEach((el) => (el.style.display = "none"));
  document.querySelector(".openMenu").style.display = "block";
  document.querySelector(".closeMenu").style.display = "none";
  document.querySelector(".section").style.gridTemplateColumns = "50px 1fr";
  document.querySelector(".navigate").style.width = "50px";

});

// menu open part
document.getElementById("openMenu").addEventListener("click", (e) => {
  console.log(e);
  document
    .querySelectorAll(".sp")
    .forEach((el) => (el.style.display = "block"));
  document.querySelector(".openMenu").style.display = "none";
  document.querySelector(".closeMenu").style.display = "flex";
  document.querySelector(".section").style.gridTemplateColumns = "250px 1fr";
  document.querySelector(".navigate").style.width = "250px";
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
