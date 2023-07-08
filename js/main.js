window.onload = function() {
    console.log("window loaded")
        window.innerWidth > 768
          ? (customIconEl.style.display = "none")
          : (customIconEl.style.display = "block");
  window.addEventListener("resize",()=>{
    window.innerWidth > 768
      ? (customIconEl.style.display = "none")
      : (customIconEl.style.display = "block");
  });
}


const customIconEl = document.querySelector(".menu-icon");
const ulMenuEl = document.querySelector(".menu");

customIconEl.addEventListener("click",()=>{
    console.log("clicked!")
    ulMenuEl.classList.toggle("hide");
});

console.log(window.innerWidth);



