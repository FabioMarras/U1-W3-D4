const main = document.querySelector("main");
const button = document.getElementById("button");
const list = document.getElementById("list");
/*const newdiv2 = document.getElementById("div");*/
const newdiv2 = document.getElementById("numeri");

for (let i = 0; i < 76; i++) {
  const newdiv2 = document.createElement("div");
  newdiv2.innerText = 1 + i;
  newdiv2.classList.add("div");
  numeri.appendChild(newdiv2);
}

/*const button = document.createElement("button");
button.innerText = "invio";
main.appendChild(button);*/

button.onclick = function () {
  const divs = newdiv2.querySelectorAll("#numeri div");
  const random = Math.floor(Math.random() * 77);
  list.innerText = random;
  list.classList.add("color");
  for (let i = 0; i < divs.length; i++) {
    if (parseInt(divs[i].innerText) === random) {
      divs[i].classList.add("color-red");
    } else {
      divs[i].classList.add("color-green");
    }
  }
};
