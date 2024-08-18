const ShowEl = document.getElementById("show");
const closeEl = document.getElementById("close");
const menuEl = document.getElementById("menu");
ShowEl.addEventListener("click", () => {
  menuEl.style.display = "block";
});

closeEl.addEventListener("click", () => {
  menuEl.style.display = "none";
});

bodyEl = document.getElementsByTagName('body')
bodyEl.addEventListener('scroll',()=>{
  if(menuEl){
    menuEl.style.display = 'none'
  }
})

