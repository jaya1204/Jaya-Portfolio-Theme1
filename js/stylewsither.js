/* ----- JS code for light and dark theme ----- */
const darkLight = document.querySelector(".theme-darklight");
function changeTheme() {
  darkLight.querySelector("i").classList.toggle("fa-moon");
  darkLight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
}

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    darkLight.querySelector("i").classList.add("fa-sun");
  } else {
    darkLight.querySelector("i").classList.add("fa-moon");
  }
});
/* ----- JS code for maincolor changing ----- */

document.querySelectorAll(".color-picker .color").forEach((color) => {
  color.addEventListener("click", () => {
    console.log("color");
    const maincolor = color.getAttribute("data-color");
    console.log(maincolor);
    document
      .querySelector(":root")
      .style.setProperty("--main-color", maincolor);
    document
      .querySelector("body.dark")
      .style.setProperty("--main-color", maincolor);
  });
});
