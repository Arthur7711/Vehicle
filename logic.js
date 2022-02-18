// menu close part
document.getElementById("closeMenu").addEventListener("click", () => {
  console.log("clicked");
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
