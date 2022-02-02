import "./styles/normalize.css";
import "./styles/style.css";
import "./loadHomePage";
import { loadHomePage } from "./loadHomePage";
import { loadMenu } from "./loadMenu";
import { loadContact } from "./loadContact";
import { loadAbout } from "./loadAbout";
console.log("***********");
console.log("WEBPACK ACTIVE!");
console.log("***********");
loadHomePage();
const content = document.querySelector("#content");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const aboutBtn = document.querySelector("#about");

loadAbout();

contactBtn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  console.log(container);
  container.remove();
  loadContact();
});
menuBtn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  console.log(container);
  container.remove();
  loadMenu();
});
aboutBtn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  console.log(container);
  container.remove();
  loadAbout();
});
