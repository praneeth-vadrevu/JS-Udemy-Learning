const header = document.querySelector("header");
header.style.backgroundColor = "blue";

const ul = document.querySelector("ul");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // if (ul.className === "bg-red visible") {
  //   ul.className = "invisible bg-red";
  // } else {
  //   ul.className = "bg-red visible";
  // }
  ul.classList.toggle('invisible');
});
