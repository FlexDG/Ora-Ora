const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector ('#menu-icon');
let navlist = document.querySelector ('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    menu.classList.toggle('bx-x');
     
}

const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 6.5}deg)">${char}</span>`
).join('');

let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");
let visibleBoxesAll = 6;
const increment = 12;

// Function to update the visibility of boxes
function updateVisibility(tabName) {
    box.forEach((el, index) => {
        if (tabName === ".All" && index < visibleBoxesAll) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
}
 
// Event listeners for the other tabs
list.forEach((el) => {
    el.addEventListener("click", (e) => {
        list.forEach((el1) => {
            el1.style.color = "#fff";
        });
        e.target.style.color = "#f21e1e";
        box.forEach((el2) => {
            el2.style.display = "none";
        });

        document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
            el3.style.display = "flex";
        });
        adjustMenuSectionHeight();
    });
});

// Initial visibility setup for the "All" tab
updateVisibility(".All");


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// const scrollUp = () => {

//     const scrollUp = document.getElementById('scroll-up')
//     this.scroll >= 300 ? scrollUp.classList.add('show-scroll')
//                     : scrollIUp.classList.remove('show-scroll')
// }

// window.addEventListener('scroll, scrollUp')

const scrollButton = document.querySelector(".scroll-top");

// Function to toggle the scroll button visibility
function toggleScrollButton() {
  if (window.scrollY > document.querySelector("header").offsetHeight) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
}

// Add a scroll event listener to call the toggleScrollButton function
window.addEventListener("scroll", toggleScrollButton);

// Scroll to the top when the button is clicked
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth scrolling behavior
  });
});
